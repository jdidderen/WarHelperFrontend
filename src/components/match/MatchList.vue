<template>
    <section>
        <div class="columns">
            <div class="column is-1">
                <b-field>
                    <b-select v-model="perPage" rounded>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </b-select>
                </b-field>
            </div>
            <div class="column is-1">
                <b-button tag="router-link"
                          to="/match/create"
                          type="is-link">
                    Créer
                </b-button>
            </div>
        </div>
        <b-table
                :data="matches"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                :per-page="perPage"
                :paginated="true"
                :current-page.sync="currentPage"
                default-sort="match.date">

            <template slot-scope="props">
                <b-table-column field="date" label="Date" width="50" searchable sortable>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column field="player1" label="Joueur 1" searchable>
                    {{ props.row.player1 }}
                </b-table-column>

                <b-table-column field="army1" label="Army 1" searchable>
                    {{ props.row.army1 }}
                </b-table-column>

                <b-table-column field="player2" label="Joueur 2" searchable>
                    {{ props.row.player2 }}
                </b-table-column>

                <b-table-column field="army2" label="Army 2" searchable>
                    {{ props.row.army2 }}
                </b-table-column>

                <b-table-column field="scenario" label="Scenario" searchable>
                    {{ props.row.scenario }}
                </b-table-column>

                <b-table-column field="location" label="Location">
                    {{ props.row.location }}
                </b-table-column>

                <b-table-column field="score_p1" label="Score 1" sortable>
                    {{ props.row.score_p1 }}
                </b-table-column>

                <b-table-column field="score_p2" label="Score 2" sortable>
                    {{ props.row.score_p2 }}
                </b-table-column>

                <b-table-column field="id" label="Action">
                    <section>
                        <div class="buttons">
                            <b-button tag="router-link"
                                      :to="{ name: 'match-detail', params: {id: props.row.id } }"
                                      type="is-link">
                                Voir
                            </b-button>
                            <b-button tag="router-link"
                                      :to="{ name: 'match-update', params: {id: props.row.id } }"
                                      type="is-info">
                                Mettre à jour
                            </b-button>
                        </div>
                    </section>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import MatchService from "../../services/MatchService";

    export default {
        name: "MatchList",
        data() {
            return {
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                perPage: 10,
                currentPage: 1,
                matches: [],
            };
        },
        methods: {
            retrieveMatches() {
                MatchService.list()
                    .then(response => {
                        this.matches = response.data;
                    })
                    .catch(e => {
                        console.log(e);
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