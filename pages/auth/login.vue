<template>
    <div class="section">
        <div class="heading">
            <h2>Brand</h2>
            <p>Sign in to access your account</p>
        </div>
        <div class="body">
            <Form @submit="on_submit">
                <div>
                    <label for="email" class="block mb-2">Email Address</label>
                    <Field name="email" type="email" :rules="validateEmail" placeholder="example@example.com" />
                    <ErrorMessage name="email" as="span" class="error" />
                </div>
                <div class="mt-6">
                    <div class="flex justify-between mb-2">
                        <label for="password">Password</label>
                        <nuxt-link to="/auth/reset-password"
                            class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
                            password?</nuxt-link>
                    </div>
                    <Field name="password" type="password" :rules="validatePassword" placeholder="Password" />
                    <ErrorMessage name="password" as="span" class="error" />
                </div>
                <div class="mt-6">
                    <button>
                        <span v-if="!is_loading">Sign in
                            <Icon name="material-symbols-light:arrow-right-alt" />
                        </span>
                        <span v-else>Loading ...</span>
                    </button>
                </div>
                <span class="error">{{ error_message }}</span>
            </Form>
            <hr />
            <p>Don&#x27;t have an account yet?
                <nuxt-link to="/auth/register" class="direct-link">Sign up</nuxt-link>.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const { validateEmail, validatePassword } = useUtils()
const snackbar = useSnackbar();
const config = useRuntimeConfig()
const url = config.public.api + "auth/login/";
const is_loading = ref(false)
const error_message = ref("")

async function on_submit(value: any) {
    console.log("Hello");

    if (is_loading.value) return;
    is_loading.value = true;
    const { data, error } = await useLazyFetch("/api/auth/register", {
        method: "post",
        body: JSON.stringify(value),
    });
    if (error.value !== null) {
        snackbar.add({
            type: 'Error',
            text: error.value?.data.message,
            messageClass: "snackbar",
        })
        console.log(snackbar);
    }

    is_loading.value = false;
}

definePageMeta({
    layout: 'auth-layout',
})
</script>