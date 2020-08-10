<template>
    <div>
        <h1 class="title is-1">{{army.name}}</h1>
        <h2 class="title is-2">Stratagèmes</h2>
        <div class="cards">
            <div class="card" v-for="(stratagem,index_stratagem) in army.stratagem_ids" :key="index_stratagem">
                <header class="card-header">
                    <div class="card-header-title">
                        <div class="columns is-multiline is-mobile level">
                            <div class="column is-half level-left">
                                <span>{{stratagem.name}}</span>
                            </div>
                            <div class="column is-half level-right">
                                <span class="tag is-primary is-medium">{{stratagem.cost}} CP</span>
                            </div>
                            <div class="column">
                                <span class="is-italic is-size-6 has-text-grey-light">{{stratagem.type}}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="card-content">
                    <div class="content">{{stratagem.description}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArmyService from "@/services/ArmyService";
    export default {
        name: "ArmyDetail",
        data() {
            return {
                army: {},
            };
        },
        methods: {
            retrieveArmy(id) {
                ArmyService.get(id)
                    .then(response => {
                        this.army = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
        },
        mounted() {
            this.retrieveArmy(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(384px,1fr));
        grid-gap: 0.5em;
    }
    .card-header{
        padding:.5rem;
    }

    .card-content, .card-header-title {
        color: #fff;
        text-shadow: 0 1px 0 rgba(3,3,3, .3 );
        text-align: center;
    }
</style>
