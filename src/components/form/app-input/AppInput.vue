<template>
	<label class="space-y-1">
		<p v-if="label" class="text-slate-500 text-sm">{{ label }}</p>
		<input
			v-model="model"
			v-bind="$attrs"
			class="p-2 border rounded border-slate-300 hover:border-slate-400 focus:border-slate-500 w-full outline-none"
		/>
	</label>
</template>

<script setup lang="ts">
const { label } = defineProps<{
	label?: string
}>()
const model = defineModel()
</script>
