<template>
	<button
		type="button"
		:class="[
			{
				'border border-transparent bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
					variant === 'primary',
				'border border-slate-300 hover:border-slate-400 active:border-slate-500':
					variant === 'secondary',
				'p-2 hover:bg-slate-200 active:bg-slate-300 inline-flex': variant === 'icon'
			},
			{ 'py-2 px-4': variant !== 'icon' },
			'rounded font-bold text-sm border-box outline-none'
		]"
		v-bind="$attrs"
	>
		<slot>Button</slot>
	</button>
</template>

<script setup lang="ts">
const { variant = 'primary' } = defineProps<{
	variant?: 'primary' | 'secondary' | 'icon'
}>()
</script>
