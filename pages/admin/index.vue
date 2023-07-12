<script setup lang="ts">
const isLogin = useAuthUser()
if (isLogin.value?.username)
  navigateTo({ name: 'index' })
const { login } = useAuth()
const formData = reactive({
  username: '',
  password: '',
})

async function handleLogin() {
  try {
    await login(formData.username, formData.password)
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <ClientOnly>
    <div mx-auto flex flex-col items-center justify-center>
      <form class="mt-8 space-y-4">
        <div>
          <input
            v-model="formData.username"
            placeholder="Name" required
            type="text" autocomplete="off"
            p="x-4 y-2" m="t-5" w="250px"
            text="left" bg="transparent"
            border="~ rounded gray-300 dark:gray-700"
            outline="none active:none"
          >
        </div>
        <div>
          <input
            v-model="formData.password"
            placeholder="Password" required
            type="password" autocomplete="off"
            p="x-4 y-2" m="t-5" w="250px"
            text="left" bg="transparent"
            border="~ rounded gray-300 dark:gray-700"
            outline="none active:none"
          >
        </div>
      </form>
      <div>
        <button
          class="mt-10 inline-flex items-center justify-center whitespace-nowrap py-2"
          bg="transparent" w="250px" shadow-small justify-center border="~ rounded gray-300 dark:gray-700"
          @click="handleLogin"
        >
          <p opacity-50>
            Login
          </p>
        </button>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
</style>
