<template>
	<div class="border border-slate-300 rounded bg-white overflow-auto">
		<table class="w-full divide-y divide-slate-300">
			<tr>
				<th
					v-for="header in ['Title', 'Description', 'Due date', 'Status']"
					:key="header"
					class="p-4 pt-6 text-left font-bold text-sm bg-slate-100"
				>
					{{ header }}
				</th>
				<th class="bg-slate-100"></th>
			</tr>
			<tr
				v-for="task in items"
				:key="task.id"
				class="hover:bg-sky-50 transition cursor-pointer group"
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
				<td class="p-2">
					<AppButton
						variant="icon"
						class="align-middle hover:text-red-500 transition-all"
						@click.stop="$emit('removeItem', task)"
					>
						<AppIcon iconName="trashcan" class="invisible group-hover:visible" />
					</AppButton>
				</td>
			</tr>
		</table>
		<div v-if="!items.length" class="min-h-[50vh] flex items-center justify-center">
			<p>You have no tasks, well done!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import AppBadge from '@/components/app-badge/AppBadge.vue'
import AppIcon from '@/components/app-icon/AppIcon.vue'
import AppButton from '@/components/app-button/AppButton.vue'
import type { Task, Status, TailwindColors } from '@/types'

const { items } = defineProps<{
	items: Task[]
}>()

defineEmits<{
	itemClick: [task: Task]
	removeItem: [task: Task]
}>()

const badgeMap = new Map<Status, TailwindColors>([
	['completed', 'green'],
	['in progress', 'sky'],
	['pending', 'gray']
])
</script>
