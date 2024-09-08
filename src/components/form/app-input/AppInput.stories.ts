import type { Meta, StoryObj } from '@storybook/vue3'
import AppInput from './AppInput.vue'

const meta = {
	title: 'Components/Form/AppInput',
	component: AppInput,
	tags: ['autodocs']
} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Input'
	}
}
