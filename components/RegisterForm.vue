<script setup>
import { ref } from "vue";
const { signIn } = useAuth();

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
    try {
        await $fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value,
            }),
        });
        alert("Registration successful!");
        login();
    } catch (error) {
        console.error(error);
    }
};

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
    <div
        class="max-w-md w-full space-y-8 p-10 bg-gray-200 rounded-xl shadow-md"
    >
        <form class="space-y-4 md:space-y-6" @submit.prevent="register">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                >
                    Name
                </label>
                <input
                    id="name"
                    v-model="name"
                    placeholder="name"
                    name="name"
                    type="text"
                    required
                    class="bg-gray-50 border border-gray-300 rounded-md py-2 px-4 block w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                />
            </div>
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                >
                    Email address
                </label>
                <input
                    id="email"
                    v-model="email"
                    placeholder="email@gmail.com"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="bg-gray-50 border border-gray-300 rounded-md py-2 px-4 block w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                />
            </div>
            <div>
                <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    id="password"
                    v-model="password"
                    placeholder="********"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="bg-gray-50 border border-gray-300 rounded-md py-2 px-4 block w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Register
                </button>
            </div>
        </form>
    </div>
</template>
