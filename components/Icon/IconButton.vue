<template>
	<button
		v-Ripple
		v-if="$props.icon"
		class="flex cursor-pointer outline-none noSelect h-[48px] w-[48px] rounded-full bg-transparent hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-10 dark:hover:bg-opacity-10"
	>
		<Icon class="m-auto icon m-o p-0" :name="$props.icon" size="24px" />
	</button>
</template>

<script setup lang="ts">
	defineProps({
		icon: String,
		color: String,
	});
	const emit = defineEmits(["inFocus", "submit"]);
</script>
<style scoped>
	.icon {
		pointer-events: none;
	}
	.noSelect {
		-webkit-tap-highdark-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.noSelect:focus {
		outline: none !important;
	}
</style>
