import type { Meta, StoryObj } from '@storybook/vue3'
import AppBadge from './AppBadge.vue'
import colors from 'tailwindcss/colors'

const omittedColors = [
	'lightBlue',
	'warmGray',
	'trueGray',
	'coolGray',
	'blueGray',
	'transparent',
	'inherit',
	'current',
	'black',
	'white'
]
const meta = {
	title: 'Components/AppBadge',
	component: AppBadge,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(colors).filter((item) => !omittedColors.includes(item))
		}
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
