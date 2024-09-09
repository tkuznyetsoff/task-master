<template>
	<Teleport to="body">
		<Transition name="drawer">
			<div v-if="visible" class="drawer-overlay fixed inset-0 bg-black/50">
				<div
					class="drawer-container absolute w-full md:w-[400px] inset-0 left-auto bg-white flex flex-col"
				>
					<div class="flex-1 p-4 overflow-auto">
						<slot>Content</slot>
					</div>
					<footer class="flex p-4 border-t border-slate-300">
						<slot name="footer">Footer</slot>
					</footer>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
const { visible = false } = defineProps<{
	visible?: boolean
}>()
</script>

<style>
.drawer-enter-active,
.drawer-leave-active {
	transition: opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
	opacity: 0;
}

.drawer-enter-active .drawer-container,
.drawer-leave-active .drawer-container {
	transition: transform 0.3s ease;
}

.drawer-enter-from .drawer-container,
.drawer-leave-to .drawer-container {
	transform: translateX(100%);
}
</style>
