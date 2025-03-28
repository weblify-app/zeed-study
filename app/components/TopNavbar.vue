<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const colorMode = useColorMode();

const isLightMode = ref(true);

watch(isLightMode, () => {
    colorMode.value = isLightMode.value ? 'light' : 'dark';
});

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

        <div class="flex items-center">
            <UNavigationMenu :items="items" class="hidden md:flex" />
            <div class="mr-4">
                <USwitch 
                    v-model="isLightMode"
                    unchecked-icon="lucide:moon" 
                    checked-icon="lucide:sun" 
                />
            </div>
            <UDropdownMenu :items="items" :ui="{ content: 'w-48' }" class="md:hidden mr-4">
                <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
            </UDropdownMenu>
        </div>
    </div>
</template>