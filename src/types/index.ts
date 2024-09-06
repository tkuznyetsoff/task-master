export type Status = 'pending' | 'in progress' | 'completed'

export interface Task {
	id: number
	title: string
	description: string
	dueDate: string
	status: Status
}
