<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const items = ref<NavigationMenuItem[][]>([
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
    <div class="flex justify-between">
        <ULink to="/" class="p-4 flex items-center gap-2">
            <img src="~/assets/logo.png" alt="logo" class="w-8"><b>Zeed International</b>
        </ULink>
        <UNavigationMenu :items="items" class="hidden md:flex" />
        <UDropdownMenu :items="items" :ui="{ content: 'w-48' }" class="md:hidden">
            <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
        </UDropdownMenu>
    </div>
</template>