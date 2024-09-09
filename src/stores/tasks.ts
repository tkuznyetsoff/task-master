import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types'
import json from '@/assets/data.json'

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref<Task[]>(structuredClone(json as Task[]))

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
		console.log(taskIndex)
		if (taskIndex === -1) return
		tasks.value.splice(taskIndex, 1)
	}

	function $reset() {
		tasks.value = structuredClone(json as Task[])
	}

	return {
		tasks,
		createTask,
		updateTask,
		removeTask,
		$reset
	}
})
