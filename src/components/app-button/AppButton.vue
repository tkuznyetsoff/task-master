<template>
	<button
		type="button"
		:class="[
			{
				'border-transparent bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
					variant === 'primary',
				'border border-slate-300 hover:border-slate-400 active:border-slate-500':
					variant === 'secondary'
			},
			'py-2 px-4 border rounded border-box outline-none'
		]"
		v-bind="$attrs"
	>
		<slot>Button</slot>
	</button>
</template>

<script setup lang="ts">
const { variant = 'primary' } = defineProps<{
	variant?: 'primary' | 'secondary'
}>()
</script>
