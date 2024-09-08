<template>
	<div
		:class="`inline-flex items-center font-medium rounded-md text-xs px-2 py-1 leading-none whitespace-nowrap bg-${color}-100 text-${color}-600 border border-${color}-600`"
	>
		<slot>Badge</slot>
	</div>
</template>

<script setup lang="ts">
import type { TailwindColors } from '@/types'

const { color = 'gray' } = defineProps<{
	color?: TailwindColors
}>()
</script>
