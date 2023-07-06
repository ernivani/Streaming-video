<template>
  <AppLayout>
    <div class="space-y-4 w-fit mx-auto">
      <div class="px-3 pb-4">
        <h1 class="text-3xl">Hi, there</h1>
        <p class="text-base">Signup to continue</p>
      </div>
      <RegisterForm />
      <OutlinedButton
        type="submit"
        class="w-full h-12"
        icon="logos:google-icon"
        text="Sign up with Google"
      />
      <div class="flex text-sm space-x-1">
        <p>Already have an Account?</p>
        <button
          v-Ripple
          class="cursor-pointer rounded-md text-colorPrimaryLight dark:text-colorPrimaryDark"
          @click="() => $router.push('/auth/login')"
        >
          Login
        </button>
      </div>
    </div>
  </AppLayout>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Register",
});
</script>

