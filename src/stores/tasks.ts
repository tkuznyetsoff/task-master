import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task, TaskBase } from '@/types'
import json from '@/assets/data.json'
import { useStorage } from '@vueuse/core'

export const useTasksStore = defineStore('tasks', () => {
	const tasks = useStorage('tasks', ref(structuredClone(json as Task[])))
	const metadata = useStorage('metadata', ref<{ sort?: keyof TaskBase | `-${keyof TaskBase}` }>({
		sort: undefined
	}))

	const computedTasks = computed(() => {
		if (metadata.value.sort !== undefined) {
			const sortDesc = metadata.value.sort?.includes('-')
			const sortKey = (
				sortDesc ? metadata.value.sort.slice(1) : metadata.value.sort
			) as keyof TaskBase

			tasks.value.sort((a, b) => (a[sortKey] < b[sortKey] ? -1 : 1))
			return sortDesc ? tasks.value.reverse() : tasks.value
		}

		return tasks.value
	})

	function createTask(task: Task) {
		tasks.value.push({
			id: +new Date(),
			...task
		})
	}

	function updateTask(task: Task) {
		const taskIndex = tasks.value.findIndex((_task) => _task.id === task.id)
		if (taskIndex === -1) return
		tasks.value[taskIndex] = { ...task }
	}

	function removeTask(task: Task) {
		const taskIndex = tasks.value.findIndex((_task) => _task.id === task.id)
		if (taskIndex === -1) return
		tasks.value.splice(taskIndex, 1)
	}

	function $reset() {
		metadata.value.sort = undefined
		tasks.value = structuredClone(json as Task[])
	}

	return {
		tasks: computedTasks,
		metadata,
		createTask,
		updateTask,
		removeTask,
		$reset
	}
})
