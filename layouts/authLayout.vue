<template>
    <div class="auth_body">
        <div class="auth_section">
            <div class="side_left" style="background-image: url('/1.png');">

                <div class="body">
                    <div>
                        <h2 class="brand">TScore</h2>

                        <p class="content">Witness the clash of titans, the roar of the crowd, and the unforgettable plays
                            that define the sport. Stay tuned for adrenaline-pumping moments that will keep you on the edge
                            of your seat</p>
                    </div>
                </div>
            </div>
            <!-- All the form -->
            <div class="side_right">
                <slot />
                <NuxtSnackbar />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const listImg = ['/1.png', '/2.png']
</script>

<style>
@import url('~/assets/css/auth.css');</style>