import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from './AppButton.vue'

const meta = {
	title: 'Components/AppButton',
	component: AppButton,
	tags: ['autodocs'],
	argTypes: {
		variant: { control: 'radio', options: ['primary', 'secondary'] }
	}
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		variant: 'primary'
	}
}

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	}
}
