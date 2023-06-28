<template>
    <AppLayout class="mx-auto grid gap-4 grid-responsive">
        <ItemCard v-for="n in 10" />
    </AppLayout>
</template>
<script setup lang="ts">
	definePageMeta({
		title: "Home",
	});
</script>
<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
</style>
