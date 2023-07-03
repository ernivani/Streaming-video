<template>
    <AppLayout>
        <div class="space-y-4 w-fit mx-auto">
            <div class="px-3 pb-4">
                <h1 class="text-3xl">Welcome back</h1>
                <p class="text-base">Login to continue</p>
            </div>
            <LoginForm />
            <OutlinedButton
                type="submit"
                class="w-full h-12"
                icon="logos:google-icon"
                text="Sign in with Google"
            />
            <div class="flex text-sm space-x-1">
                <p>Don't have an account?</p>
                <button
                    v-Ripple
                    class="cursor-pointer rounded-md text-colorPrimaryLight dark:text-colorPrimaryDark"
                    @click="() => $router.push('/auth/register')"
                >
                    Signup
                </button>
            </div>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
definePageMeta({
    title: "Login",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: "/",
    },
});
</script>
