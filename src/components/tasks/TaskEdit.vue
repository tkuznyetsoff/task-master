<template>
	<AppDrawer :visible="!!editedTask">
		<h2 class="text-xl font-bold mt-4 mb-8">{{ inEditMode ? 'Edit' : 'Create' }} task</h2>
		<form id="task-form" class="flex flex-col gap-4" @submit.prevent="onSubmit">
			<AppInput label="Title" v-model="formModel.title" />
			<AppTextarea label="Description" v-model="formModel.description" />
			<AppInput label="Due date" type="date" v-model="formModel.dueDate" />
			<AppSelect
				label="Status"
				:items="[
					{ label: 'Pending', value: 'pending' },
					{ label: 'In progress', value: 'in progress' },
					{ label: 'Completed', value: 'completed' }
				]"
				v-model="formModel.status"
			/>
		</form>
		<template #footer>
			<AppButton variant="secondary" @click="emit('cancel')">Cancel</AppButton>
			<AppButton type="submit" form="task-form" class="ml-auto">Confirm</AppButton>
		</template>
	</AppDrawer>
</template>

<script setup lang="ts">
import { reactive, watch, toRefs, computed } from 'vue'
import type { Task } from '@/types'
import AppDrawer from '@/components/app-drawer/AppDrawer.vue'
import AppInput from '@/components/form/app-input/AppInput.vue'
import AppTextarea from '@/components/form/app-textarea/AppTextarea.vue'
import AppSelect from '@/components/form/app-select/AppSelect.vue'
import AppButton from '@/components/app-button/AppButton.vue'
import { useTask } from '@/composables/useTask'

const props = defineProps<{
	editedTask: Task | null
}>()
const { editedTask } = toRefs(props)

const emit = defineEmits<{
	create: [task: Task]
	update: [task: Task]
	cancel: []
}>()

const { getDefaultTaskModel } = useTask()

const inEditMode = computed(() => typeof editedTask.value?.id === 'number')

const formModel = reactive<Task>(getDefaultTaskModel())

const onSubmit = () => {
	if (!editedTask.value) return
	if (inEditMode.value) {
		emit('update', { id: editedTask.value.id, ...formModel })
	} else {
		emit('create', formModel)
	}
}

watch(editedTask, () => {
	if (!editedTask.value) return
	formModel.title = editedTask.value.title
	formModel.description = editedTask.value.description
	formModel.dueDate = editedTask.value.dueDate
	formModel.status = editedTask.value.status
})
</script>
