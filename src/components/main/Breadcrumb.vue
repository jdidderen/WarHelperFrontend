<template>
    <div class="breadcrumb">
        <nav class="breadcrumb breadcrumb-custom" aria-label="breadcrumbs">
            <ul>
                <li
                        v-for="(breadcrumb, idx) in breadcrumbList"
                        :key="idx"
                        @click="routeTo(idx)" :class="{'is-active': idx === Object.keys(breadcrumbList).length - 1}">
                    <a :href="breadcrumb.link">{{ breadcrumb.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        data () {
            return {
                breadcrumbList: []
            }
        },
        mounted () { this.updateList() },
        watch: { '$route' () { this.updateList() } },
        methods: {
            routeTo (pRouteTo) {
                if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
            },
            updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
        }
    }
</script>

<style>
    .breadcrumb-custom {
        background-color: #363636;
        color: #fff;
        border-radius: 5px;
        padding:10px;
    }

    .breadcrumb-custom li a:hover {
        color: #fff !important;

    }

    .breadcrumb-custom li.is-active a {
        color: #fff !important;
    }
</style>
