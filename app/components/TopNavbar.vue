<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

    const items = ref<NavigationMenuItem[][]>([
        [
            {
                label: 'Home',
                to: '/',
            }
        ],
        [
            {
                label: 'Institutions',
                to: '/institutions',
            },
            {
                label: 'Courses',
                to: '/courses',
            },
            {
                label: 'Contact Us',
                to: '/contact',
            },
        ]
    ]);
</script>
<template>
    <div>
        <UNavigationMenu :items="items" />
    </div>
</template>