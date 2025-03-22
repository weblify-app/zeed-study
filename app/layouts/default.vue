<script setup lang="ts">
import TopNavbar from '~/components/TopNavbar.vue';
</script>
<template>
    <div class="max-w-6xl mx-auto">
        <TopNavbar />
        <main>
            <slot />
        </main>
    </div>
</template>