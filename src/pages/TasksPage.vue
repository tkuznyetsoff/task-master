<template>
	<h1 class="text-2xl font-bold mb-12">TaskMaster</h1>
	<TasksTable
		:items="tasks"
		@itemClick="onItemClick"
	/>
</template>

<script setup lang="ts">
import TasksTable from '@/components/tasks/TasksTable.vue';
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'

const { tasks } = storeToRefs(useTasksStore())

const onItemClick = (task: Task) => {
	alert(`Task to be opened: ${task.title}`)
} 
</script>
