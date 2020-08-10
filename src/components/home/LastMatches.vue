<template>
    <section>
        <b-table
                :data="matches"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                default-sort="date">

            <template slot-scope="props">
                <b-table-column field="date" label="Date" width="40" sortable>
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>

                <b-table-column field="player1" label="Joueur 1">
                    {{ props.row.player1 }}
                </b-table-column>

                <b-table-column field="army1" label="Armée 1">
                    {{ props.row.army1 }}
                </b-table-column>

                <b-table-column field="player2" label="Joueur 2">
                    {{ props.row.player2 }}
                </b-table-column>

                <b-table-column field="army2" label="Armée 2">
                    {{ props.row.army2 }}
                </b-table-column>

                <b-table-column field="scenario" label="Scenario">
                    {{ props.row.scenario }}
                </b-table-column>

                <b-table-column field="location" label="Location">
                    {{ props.row.location }}
                </b-table-column>

                <b-table-column field="score_p1" label="Score 1">
                    {{ props.row.score_p1 }}
                </b-table-column>

                <b-table-column field="score_p2" label="Score 2">
                    {{ props.row.score_p2 }}
                </b-table-column>

                <b-table-column field="id" label="Action">
                    <router-link :to="{ name: 'match-detail', params: {id: props.row.id } }">
                        <b-button type="is-primary">Voir</b-button>
                    </router-link>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import MatchService from "../../services/MatchService";

    export default {
        name: "LastMatches",
        data() {
            return {
                defaultSortDirection: 'desc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                matches: [],
            };
        },
        methods: {
            retrieveMatches() {
                MatchService.lastfive()
                    .then(response => {
                        this.matches = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },

            refreshList() {
                this.retrieveMatches();
            },
        },
        mounted() {
            this.retrieveMatches();
        }
    }
</script>

<style>
    table.table {
         width: 100%;
         margin-top: 5px;
         background-color: #363636;
         border-radius: .4rem;
         overflow: hidden;
         box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
         color: #fff;
     }

     td, th, td, strong, .th-wrap {
         color: #fff;
     }
</style>
