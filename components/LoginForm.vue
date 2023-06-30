<script setup lang="ts">
const { signIn } = useAuth();

const email = ref("");
const password = ref("");
</script>

<template>
    <div
        class="max-w-md w-full space-y-8 p-10 bg-gray-200 rounded-xl shadow-md"
    >
        <form
            class="space-y-4 md:space-y-6"
            @submit.prevent="
                ($event) => signIn('credentials', { email, password })
            "
        >
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
                    placeholder="test@gmail.com"
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
                    placeholder="test"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="bg-gray-50 border border-gray-300 rounded-md py-2 px-4 block w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Sign in
                </button>
            </div>
        </form>
    </div>
</template>
