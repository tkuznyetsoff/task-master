import type { Meta, StoryObj } from '@storybook/vue3'
import AppBadge from './AppBadge.vue'
import colors from 'tailwindcss/colors'

const omittedColors = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray', 'transparent', 'inherit', 'current', 'black', 'white']
const meta = {
	title: 'Example/AppBadge',
	component: AppBadge,
	tags: ['autodocs'],
	render: (args: any) => ({
		components: { AppBadge },
		setup() {
			return { args }
		},
		template: '<AppBadge :color="args.color"/>'
	}),
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(colors).filter((item) => !omittedColors.includes(item))
		},
	},
	args: {
		color: 'black',
	}
} satisfies Meta<typeof AppBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Emerald: Story = {
	args: {
		color: 'emerald'
	}
}
export const Purple: Story = {
	args: {
		color: 'purple'
	}
}
