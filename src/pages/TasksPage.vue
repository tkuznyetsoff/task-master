<template>
	<h1 class="text-2xl font-bold py-6">TaskMaster</h1>
	<div class="flex items-center justify-end gap-4 mb-4">
		<AppButton variant="icon" title="Reset" @click="resetTasks">
			<AppIcon iconName="refresh" />
		</AppButton>
		<AppButton @click="createNewTask">Create task</AppButton>
	</div>
	<TasksTable :items="tasks" @itemClick="setEditedTask" @removeItem="store.removeTask" />
	<TaskEdit
		:editedTask="editedTask"
		@update="updateTask"
		@create="submitCreate"
		@cancel="setEditedTask(null)"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TasksTable from '@/components/tasks/TasksTable.vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'
import TaskEdit from '@/components/tasks/TaskEdit.vue'
import AppButton from '@/components/app-button/AppButton.vue'
import { useTask } from '@/composables/useTask'
import AppIcon from '@/components/app-icon/AppIcon.vue'

const store = useTasksStore()
const { tasks } = storeToRefs(store)
const { getDefaultTaskModel } = useTask()

const editedTask = ref<Task | null>(null)

function setEditedTask(task: Task | null) {
	editedTask.value = task
}
function createNewTask() {
	editedTask.value = getDefaultTaskModel()
}

function updateTask(task: Task) {
	store.updateTask(task)
	setEditedTask(null)
}
function submitCreate(task: Task) {
	store.createTask(task)
	setEditedTask(null)
}

function resetTasks() {
	store.$reset()
}
</script>
