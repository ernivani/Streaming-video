<template> </template>
<script setup lang="ts">
	const credentials = reactive({
		firstName: "",
		surname: "",
		email: "",
		password: "",
		passwordRepeat: "",
	});
	const client = useSupabaseAuthClient();

	async function register() {
		const { firstName, surname, email, password, passwordRepeat } = credentials;
		if (password !== passwordRepeat) return;
		const { error } = await client.auth.signUp({
			email,
			password,
			options: {
				data: {
					first_name: firstName,
					surname,
					email,
				},
				emailRedirectTo: "http://localhost:3000/login",
			},
		});
		if (error) {
			alert("Something went wrong !");
			return;
		}
		alert("Open the email we sent you to verify your account!");
	}

	definePageMeta({
		title: "Kujimba",
	});
</script>
