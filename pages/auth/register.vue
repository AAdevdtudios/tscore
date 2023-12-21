<template>
    <div class="section">
        <div class="heading">
            <h2>Brand</h2>
            <p>Create an account</p>
        </div>
        <div class="body">
            <Form @submit="register_user">
                <div class="row">
                    <div>
                        <label class="block mb-2" for="firstName">
                            First Name
                        </label>
                        <Field name="first_name" type="name" :rules="validateName" placeholder="example" />
                        <ErrorMessage name="first_name" as="span" class="error" />
                    </div>
                    <div>
                        <label class="block mb-2" for="lastName">
                            Last Name
                        </label>
                        <Field name="last_name" type="name" v-model="form_data.last_name" :rules="validateName"
                            placeholder="example" />
                        <ErrorMessage name="last_name" as="span" class="error" />
                    </div>
                </div>
                <div>
                    <label for="email" class="block mb-2">Email Address</label>
                    <Field name="email" type="email" v-model="form_data.email" :rules="validateEmail"
                        placeholder="example@example.com" />
                    <ErrorMessage name="email" as="span" class="error" />
                </div>
                <div class="row mt-5">
                    <div>
                        <label class="block mb-2 " for="password">
                            Password
                        </label>
                        <Field name="password" type="password" v-model="form_data.password" :rules="validatePassword"
                            placeholder="********" />
                        <ErrorMessage name="password" as="span" class="error" />
                    </div>
                    <div>
                        <label class="block mb-2 " for="confirm">
                            Confirm Password
                        </label>
                        <Field name="confirm_password" type="password" v-model="form_data.confirm_password"
                            :rules="validatePassword" placeholder="********" />
                        <ErrorMessage name="confirm_password" as="span" class="error" />
                    </div>
                </div>
                <div class="my-6">
                    <button
                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="button">
                        Register Account
                    </button>
                </div>
                <hr />
                <div class="text-center">
                    <nuxt-link to="/auth/reset-password" class="direct-link">
                        Forgot Password?
                    </nuxt-link>
                </div>
                <p>Already have an account? <nuxt-link to="/auth/login" class="direct-link">Login</nuxt-link>.</p>
            </Form>
        </div>
    </div>
</template>

<script setup lang="ts">
interface RegisterDto {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
}

const { validateEmail, validatePassword, validateConfirmPassword, validateName } = useUtils()

const form_data = reactive<RegisterDto>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
});
async function register_user(value: any) {
    console.log(form_data);
    // const { data, error } = await useLazyFetch("/api/auth/register", {
    //     method: "POST",
    //     body: {
    //         first_name: "Joseph",
    //         last_name: "Oladele",
    //         email: "email@email.com",
    //         password: "password",
    //         confirm_password: "password",
    //     },
    // });
    // console.log(data);
}
definePageMeta({
    layout: 'auth-layout',
})
</script>