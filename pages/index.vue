<template>
    {{ blogData }}
</template>

<script setup>
    const blogData = await queryContent('pagina').where({
        slug: 'home'
    }).find();
</script>

<style scoped lang="scss">
</style>
