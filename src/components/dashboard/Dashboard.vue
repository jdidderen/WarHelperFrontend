<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <MyWinLoseMatchesChart/>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Coming Soon - Valve Time</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Coming Soon - Valve Time</p>
            </article>
        </div>
    </div>
</template>

<script>
    import MyWinLoseMatchesChart from "@/components/dashboard/MyWinLoseMatchesChart";
    export default {
        name: "Dashboard",
        components: {MyWinLoseMatchesChart}
    }
</script>

<style>
    article.tile.is-child.box {
        background-color: #363636;
        padding: 20px;
        border-radius: 5px;
    }
</style>
