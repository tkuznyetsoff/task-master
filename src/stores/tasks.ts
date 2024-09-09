import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task, TaskBase } from '@/types'
import json from '@/assets/data.json'

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref<Task[]>(json as Task[])

	function updateTask({ data, id }: { data: TaskBase; id: Task['id'] }) {
		const taskIndex = tasks.value.findIndex((task) => task.id === id)
		if (taskIndex === -1) return
		tasks.value[taskIndex] = { id, ...data }
	}

	return { tasks, updateTask }
})
