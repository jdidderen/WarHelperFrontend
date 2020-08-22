<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical is-6">
            <article class="tile is-child box">
                <MyWinLoseMatchesChart/>
            </article>
        </div>
        <div class="tile is-parent is-vertical is-6">
            <article class="tile is-child box">
                <WinLoseMatchesArmiesChart/>
            </article>
        </div>
    </div>
</template>

<script>
    import MyWinLoseMatchesChart from "@/components/dashboard/MyWinLoseMatchesChart";
    import WinLoseMatchesArmiesChart from "@/components/dashboard/WinLoseMatchesArmiesChart";
    export default {
        name: "Dashboard",
        components: {WinLoseMatchesArmiesChart,MyWinLoseMatchesChart},
    }
</script>

<style>
    article.tile.is-child.box {
        background-color: #363636;
        padding: 20px;
        border-radius: 5px;
    }
</style>
