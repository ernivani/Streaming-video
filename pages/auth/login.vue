<template>
    <AppLayout>
        <div class="space-y-4 w-fit mx-auto">
            <div class="px-3 pb-4">
                <h1 class="text-3xl">Welcome back</h1>
                <p class="text-base">Login to continue</p>
            </div>
            <form
                class="space-y-8 pb-4"
                spellcheck="false"
                @submit.prevent="
                    ($event) => signIn('credentials', { email, password })
                "
            >
                <TextInput
                    label="Email"
                    type="email"
                    placeholder="name@gmail.com"
                    :text="email"
                />
                <TextInput
                    label="Password"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                />
            </form>
            <FilledButton type="submit" class="w-full h-12" text="Sign in" />
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
                >
                    Signup
                </button>
            </div>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { signIn } = useAuth();

const email = ref("");
const password = ref("");

definePageMeta({
    title: "Login",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: "/",
    },
});
</script>
