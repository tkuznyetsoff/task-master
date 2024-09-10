<template>
	<div class="border border-slate-300 rounded bg-white overflow-auto">
		<table class="w-full divide-y divide-slate-300">
			<thead>
				<tr>
					<th
						v-for="header in tableHeaders"
						:key="header.key"
						class="group p-4 pt-6 text-left font-bold text-sm bg-slate-100 hover:bg-slate-100/50 cursor-pointer"
						@click="sortByHeader(header.key)"
					>
						<div class="flex items-center gap-2">
							<span class="capitalize">{{ header.label }}</span>
							<AppIcon
								size="16"
								iconName="down_arrow"
								:class="[{
									'!opacity-100 !visible': metadata.sort?.includes(header.key),
									'!rotate-0': metadata.sort?.includes(header.key) && metadata.sort?.includes('-')
								}, 'group-hover:visible invisible rotate-180 opacity-50']"
							/>
						</div>
					</th>
					<th class="bg-slate-100"></th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-300">
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
							<AppIcon iconName="trashcan" class="md:invisible group-hover:visible" />
						</AppButton>
					</td>
				</tr>
			</tbody>
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
import type { Task, Status, TailwindColors, TaskBase, TableHeader } from '@/types'
import { useTasksStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'

const { metadata } = storeToRefs(useTasksStore())

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

const tableHeaders: TableHeader[] = [
	{
		key: 'title',
		label: 'Title'
	},
	{
		key: 'description',
		label: 'Description'
	},
	{
		key: 'dueDate',
		label: 'Due Date'
	},
	{
		key: 'status',
		label: 'Status'
	}
]

function sortByHeader(header: keyof TaskBase) {
	if (metadata.value.sort === header) {
		metadata.value.sort = `-${header}`
		return
	}
	metadata.value.sort = header
}
</script>
