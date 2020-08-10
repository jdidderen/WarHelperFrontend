<template>
    <div>
        <ContainerMenu/>
        <h1 class="title">Les 5 dernières parties</h1>
        <LastMatches/>
    </div>
</template>

<script>
    import ContainerMenu from './ContainerMenu'
    import LastMatches from './LastMatches'

    export default {
        name: "Home",
        components: {
            ContainerMenu,
            LastMatches,
        }
    }
</script>

<style scoped>
h1 {
    margin-top: 15px;
}
</style>
