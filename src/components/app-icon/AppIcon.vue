<template>
	<svg :height="size" :width="size" viewBox="0 0 24 24" class="shrink-0" v-html="template" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { iconName, size = '20' } = defineProps<{
	iconName: 'trashcan' | 'down_arrow' | 'refresh'
	size?: string
}>()

const template = computed(() => {
	switch (iconName) {
		case 'trashcan':
			return `<path d="M21.7073 4.25H2.29268C2.39564 3.9587 2.67345 3.75 3 3.75H21C21.3266 3.75 21.6044 3.9587 21.7073 4.25Z" stroke="currentColor" stroke-width="1.5"/> 
				<path d="M4.05494 4.52035C4.04478 4.23602 4.27253 4 4.55703 4H12H19.443C19.7275 4 19.9552 4.23602 19.9451 4.52035L19.354 21.0714C19.3155 22.1475 18.432 23 17.3552 23H6.64477C5.56798 23 4.68448 22.1475 4.64604 21.0714L4.05494 4.52035Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/> 
				<path d="M8.64494 3.5C9.07521 2.05426 10.4145 1 12 1C13.5855 1 14.9248 2.05426 15.3551 3.5H8.64494Z" stroke="currentColor" stroke-width="2" fill="transparent"/> 
				<line x1="9.25" y1="8.5" x2="9.25" y2="18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/> 
				<line x1="14.5" y1="8.5" x2="14.5" y2="18.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
		case 'down_arrow':
			return `<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V18.5139L6.72112 14.0602C6.33849 13.662 5.70545 13.6493 5.30719 14.0319C4.90893 14.4145 4.89625 15.0476 5.27888 15.4458L11.2789 21.691C11.4674 21.8873 11.7278 21.9982 12 21.9982C12.2722 21.9982 12.5326 21.8873 12.7211 21.691L18.7211 15.4458C19.1037 15.0476 19.0911 14.4145 18.6928 14.0319C18.2945 13.6493 17.6615 13.662 17.2789 14.0602L13 18.5139V3Z" fill="currentColor"/>`
		case 'refresh':
			return `<path d="M4.49926 13.0019L2 10.0047L6.99777 9.99926L4.49926 13.0019Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="transparent"/> 
			<path d="M13 21C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3C8.02944 3 4 7.02944 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="transparent"/>`
		default:
			return ''
	}
})
</script>
