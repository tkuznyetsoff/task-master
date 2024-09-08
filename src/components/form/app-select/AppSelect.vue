<template>
	<label class="space-y-1">
		<p v-if="label" class="text-slate-500 text-sm">{{ label }}</p>
		<select
			v-model="model"
			v-bind="$attrs"
			class="p-2 border rounded border-slate-300 hover:border-slate-400 focus:border-slate-500 w-full outline-none"
		>
			<option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</option>
		</select>
	</label>
</template>

<script setup lang="ts">
const { items, label } = defineProps<{
	items: { label: string; value: string }[]
	label?: string
}>()
const model = defineModel()
</script>
