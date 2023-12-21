<template>
    <div class="section">
        <div class="heading">
            <h2>Brand</h2>
            <p>Forgot Your Password?</p>
        </div>
        <div class="body">
            <form>
                <div class="mb-4">
                    <label class="block mb-2" for="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="Enter Email Address..." />
                </div>
                <div class="mb-6 text-center">
                    <button type="button">
                        Reset Password
                    </button>
                </div>
                <hr />
                <div class="text-center">
                    <nuxt-link to="/auth/register" class="direct-link">
                        Create an Account!
                    </nuxt-link>
                </div>
                <p>Already have an account? <nuxt-link to="/auth/login" class="direct-link">Login</nuxt-link>.</p>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth-layout',
})
</script>