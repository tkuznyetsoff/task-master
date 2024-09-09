import type { TaskBase } from '@/types'

export function useTask() {
	const getDefaultTaskModel = (): TaskBase => ({
		title: '',
		description: '',
		dueDate: '',
		status: 'pending'
	})
	return { getDefaultTaskModel }
}
