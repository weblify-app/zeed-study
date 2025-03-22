<script setup lang="ts">
import TopNavbar from '~/components/TopNavbar.vue';
</script>
<template>
    <div>
        <TopNavbar />
        <main>
            <slot />
        </main>
    </div>
</template>