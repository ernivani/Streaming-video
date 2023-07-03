<script setup>
const { signIn } = useAuth();
const credentials = reactive({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
});
const register = async () => {
    try {
        console.log(credentials);
        const res = await $fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                passwordRepeat: credentials.passwordRepeat,
            }),
        });
        console.log(res);
        alert("Registration successful!");
        login();
    } catch (error) {
        console.error(error);
    }
};

const login = async () => {
    try {
        await signIn("credentials", {
            email: credentials.email,
            password: credentials.password,
        });
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <form class="space-y-8 pb-4" spellcheck="false" @submit.prevent="register">
        <TextInput
            label="Full Name"
            type="name"
            v-model="credentials.name"
        />
        <TextInput label="Email" type="email" v-model="credentials.email" />
        <TextInput
            label="Password"
            type="password"
            v-model="credentials.password"
        />
        <TextInput
            label="Confirm Password"
            type="password"
            v-model="credentials.passwordRepeat"
        />
        <FilledButton type="submit" class="w-full h-12" text="Sign up" />
    </form>
</template>
