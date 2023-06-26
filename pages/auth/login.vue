<template>
	<AppLayout>
		<div class="space-y-4 sm:max-w-[30vw] mx-auto">
			<div class="px-3 pb-4">
				<h1 class="text-3xl">Welcome back</h1>
				<p class="text-base">Login to continue</p>
			</div>
			<form class="space-y-8 pb-4" spellcheck="false">
				<TextInput
					label="Email"
					type="email"
					placeholder="name@gmail.com"
					:text="credentials.email"
				/>
				<TextInput
					label="Password"
					type="password"
					placeholder="Password"
					v-model="credentials.password"
				/>
			</form>
			<FilledButton type="submit" class="w-full h-12" text="Sign in" />
			<OutlinedButton
				type="submit"
				class="w-full h-12"
				icon="logos:google-icon"
				text="Sign in with Google"
			/>
		</div>
	</AppLayout>
</template>
<script setup lang="ts">
	const client = useSupabaseAuthClient();
	const router = useRouter();
	const user = useSupabaseUser();
	const credentials = reactive({
		email: "",
		password: "",
	});
	async function login() {
		const { email, password } = credentials;
		const { error } = await client.auth.signInWithPassword({ email, password });
		if (!error) return router.push("/");
		console.log(error);
	}

	watchEffect(async () => {
		if (user.value) {
			await router.push("/");
		}
	});
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	definePageMeta({
		title: "Login",
	});
</script>
