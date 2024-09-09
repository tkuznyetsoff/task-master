<template>
	<h1 class="text-2xl font-bold mb-12">TaskMaster</h1>
	<TasksTable :items="tasks" @itemClick="setEditedTask" />
	<TaskEdit :editedTask="editedTask" @update="onUpdate" @cancel="setEditedTask(null)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TasksTable from '@/components/tasks/TasksTable.vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks'
import type { TaskBase, Task } from '@/types'
import TaskEdit from '@/components/tasks/TaskEdit.vue'

const { tasks } = storeToRefs(useTasksStore())
const { updateTask } = useTasksStore()

const editedTask = ref<Task | null>(null)

function setEditedTask(task: Task | null) {
	editedTask.value = task
}
function onUpdate({ data, id }: { data: TaskBase; id: Task['id'] }) {
	updateTask({ data, id })
	setEditedTask(null)
}
</script>
