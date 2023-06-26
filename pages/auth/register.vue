<template>
	<AppLayout>
		<div class="space-y-4 sm:max-w-[30vw] mx-auto">
			<div class="px-3 pb-4">
				<h1 class="text-3xl">Hi, there</h1>
				<p class="text-base">Signup to continue</p>
			</div>
			<form class="space-y-8 pb-4" spellcheck="false">
				<TextInput label="Full Name" type="name" :text="credentials.email" />
				<TextInput label="Email" type="email" :text="credentials.email" />
				<TextInput
					label="Password"
					type="password"
					v-model="credentials.password"
				/>
				<TextInput
					label="Confirm Password"
					type="password"
					v-model="credentials.password"
				/>
			</form>
			<FilledButton type="submit" class="w-full h-12" text="Sign up" />
			<OutlinedButton
				type="submit"
				class="w-full h-12"
				icon="logos:google-icon"
				text="Sign up with Google"
			/>
			<div class="flex text-sm space-x-1"
				><p>Already have an Account? </p>
				<button
					v-Ripple
					class="cursor-pointer rounded-md text-colorPrimaryLight dark:text-colorPrimaryDark"
					>Login</button
				>
			</div>
		</div>
	</AppLayout>
</template>
<script setup lang="ts">
	const credentials = reactive({
		firstName: "",
		surname: "",
		email: "",
		password: "",
		passwordRepeat: "",
	});
	definePageMeta({
		title: "Register",
	});
</script>
