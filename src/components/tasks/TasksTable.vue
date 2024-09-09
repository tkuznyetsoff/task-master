<template>
	<div class="border border-slate-300 rounded bg-white overflow-auto">
		<table class="w-full divide-y divide-slate-300">
			<tr>
				<th
					v-for="header in ['Title', 'Description', 'Due date', 'Status']"
					:key="header"
					class="p-4 pt-6 text-left font-bold text-sm bg-slate-100 rounded-t-md"
				>
					{{ header }}
				</th>
			</tr>
			<tr
				v-for="task in items"
				:key="task.id"
				class="hover:bg-sky-50 transition cursor-pointer"
				@click="$emit('itemClick', task)"
			>
				<td class="p-4">{{ task.title }}</td>
				<td class="p-4">{{ task.description }}</td>
				<td class="p-4 whitespace-nowrap">{{ task.dueDate }}</td>
				<td class="p-4">
					<AppBadge :color="badgeMap.get(task.status)">
						{{ task.status }}
					</AppBadge>
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup lang="ts">
import AppBadge from '@/components/app-badge/AppBadge.vue'
import type { Task, Status, TailwindColors } from '@/types'

const { items } = defineProps<{
	items: Task[]
}>()

defineEmits<{
	itemClick: [task: Task]
}>()

const badgeMap = new Map<Status, TailwindColors>([
	['completed', 'green'],
	['in progress', 'sky'],
	['pending', 'gray']
])
</script>
