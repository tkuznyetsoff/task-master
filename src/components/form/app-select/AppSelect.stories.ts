import type { Meta, StoryObj } from '@storybook/vue3'
import AppSelect from './AppSelect.vue'

const meta = {
	title: 'Components/Form/AppSelect',
	component: AppSelect,
	tags: ['autodocs']
} satisfies Meta<typeof AppSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		items: [
			{
				label: 'Item 1',
				value: 'item 1'
			},
			{
				label: 'Item 2',
				value: 'item 2'
			},
			{
				label: 'Item 3',
				value: 'item 3'
			}
		],
		label: 'Select'
	}
}
