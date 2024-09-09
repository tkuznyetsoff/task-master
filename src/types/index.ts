import type { DefaultColors } from 'tailwindcss/types/generated/colors'

export type Status = 'pending' | 'in progress' | 'completed'

export interface TaskBase {
	title: string
	description: string
	dueDate: string
	status: Status
}

export interface Task extends TaskBase {
	id: number
}

export type TailwindColors = keyof DefaultColors
