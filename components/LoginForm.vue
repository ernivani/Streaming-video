<script setup lang="ts">
const { signIn } = useAuth();

const email = ref("");
const password = ref("");

const login = async () => {
    try {
        await signIn("credentials", {
            email: email.value,
            password: password.value,
        });
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <form class="space-y-8 pb-4" spellcheck="false" @submit.prevent="login">
        <TextInput
            label="Email"
            type="email"
            placeholder="name@gmail.com"
            v-model="email"
        />
        <TextInput
            label="Password"
            type="password"
            placeholder="Password"
            v-model="password"
        />
        <FilledButton type="submit" class="w-full h-12" text="Sign in" />
    </form>
</template>
