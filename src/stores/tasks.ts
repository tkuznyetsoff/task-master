import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types'
import json from '@/assets/data.json'

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref<Task[]>(json as Task[])

	return { tasks }
})
