<template>
	<div
		class="outline relative flex items-center pe-1 rounded-md outline-none border-2 border-colorOutlineLight dark:border-colorOutlineDark focus-within:border-colorPrimaryLight dark:focus-within:border-colorSecondaryDark"
	>
		<input
			:name="label"
			:type="type"
			:value="modelValue"
			placeholder=" "
			@input="$emit('update:modelValue', $event.target.value)"
			class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
		/>

		<div
			v-Ripple
			v-if="type == 'password'"
			onclick="(isPasswordVisible = !isPasswordVisible)"
			class="flex cursor-pointer outline-none noSelect h-[48px] w-12 rounded-full bg-transparent hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-10 dark:hover:bg-opacity-10"
		>
			<Icon
				class="m-auto icon"
				:name="
					isPasswordVisible
						? 'ic:outline-visibility'
						: 'ic:outline-visibility-off'
				"
				size="24px"
			/>
		</div>
		<label
			:for="label"
			class="absolute label top-0 text-lg bg-colorBackgroundLight dark:bg-colorBackgroundDark mx-4 py-4 -z-1 duration-300 origin-0"
			>{{ label }}</label
		>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		modelValue: String,
		type: String,
		placeholder: String,
	});
	defineEmits(["update:modelValue"]);
	const isPasswordVisible = ref(false);
</script>
<style scoped>
	.outline input:focus-within ~ label,
	.outline input:not(:placeholder-shown) ~ label {
		@apply transform scale-75 -translate-y-4 z-0 ml-3 px-1 py-0;
	}
	.label {
		pointer-events: none;
	}
</style>
