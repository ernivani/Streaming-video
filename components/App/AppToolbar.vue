<template>
	<div
		class="fixed top-0 z-50 w-full shadow-sm bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
	>
		<div class="flex min-h-[56px] px-2 space-x-2 items-center mx-auto">
			<IconButton
				v-if="$route.name == 'index'"
				:icon="isTabletMode ? '' : 'ic:outline-menu'"
				@click="emit('onClickMenuItem', 'navIcon')"
			/>
			<IconButton v-else icon="ic:round-arrow-back" @click="goBack" />
			<h1 class="text-lg sm:hidden flex flex-grow">{{ props.title }}</h1>

			<input
				type="text"
				placeholder="Type to search"
				onselectstart="return true"
				class="relative min-h-[48px] hidden sm:flex flex-grow bg-transparent select-text outline-none"
			/>
			<IconButton icon="ic:outline-notifications" />
			<Avatar src="https://avatars.githubusercontent.com/u/67279072?v=4" />
		</div>
	</div>
</template>

<script setup>
	const router = useRouter();
	const route = useRoute();
	const props = defineProps({
		title: String,
	});
	const emit = defineEmits(["onClickMenuItem", "submit"]);
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	const goBack = () => {
		setTimeout(() => {
			router.back();
		}, 200);
	};
</script>
