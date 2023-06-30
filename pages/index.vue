<template>
    <AppLayout class="mx-auto grid gap-4 grid-responsive">
        <!-- <ItemCard v-for="n in 10" /> -->
        <LoginForm />
        <RegisterForm />
        <div>
            <pre v-if="data"><span>Data:</span> {{ data }}</pre>
            <pre v-if="status"><span>Status:</span> {{ status }}</pre>
            <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
            <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
            <button
                v-if="status === 'authenticated'"
                class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg"
                @click="signOut({ callbackUrl: '/' })"
            >
                <span>Logout</span>
            </button>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
const { data, status, getCsrfToken, getProviders, signOut } = useAuth();
const providers = await getProviders();
const csrfToken = await getCsrfToken();

//TODO: to register just $axios to the /api/register with the body of email, password and name

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
