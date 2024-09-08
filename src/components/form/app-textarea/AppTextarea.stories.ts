import type { Meta, StoryObj } from '@storybook/vue3'
import AppTextarea from './AppTextarea.vue'

const meta = {
	title: 'Components/Form/AppTextarea',
	component: AppTextarea,
	tags: ['autodocs']
} satisfies Meta<typeof AppTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Textarea'
	}
}
