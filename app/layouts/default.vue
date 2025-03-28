<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = 'light';
colorMode.forced = true;

</script>
<template>
    <div>
        <slot />
    </div>
</template>

<style></style>