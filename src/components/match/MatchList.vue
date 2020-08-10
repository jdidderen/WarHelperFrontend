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
            <div class="column is-4">
                <div class="tags">
                    <span class="tag" v-on:click="selectFilter('none')" :class="{ 'is-success': filterSelected === 'none'}">Aucun</span>
                    <span class="tag" v-on:click="selectFilter('mine')" :class="{ 'is-success': filterSelected === 'mine'}">Mes parties</span>
                    <span class="tag" v-on:click="selectFilter('mine_won')" :class="{ 'is-success': filterSelected === 'mine_won'}">Mes parties gagnantes</span>
                    <span class="tag" v-on:click="selectFilter('mine_lost')" :class="{ 'is-success': filterSelected === 'mine_lost'}">Mes parties perdantes</span>
                </div>
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
                :data="filteredMatches"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                :per-page="perPage"
                :paginated="true"
                :current-page.sync="currentPage"
                default-sort="date">

            <template slot-scope="props">
                <b-table-column field="date" label="Date" width="50" searchable sortable>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column field="player1" label="Joueur 1" searchable>
                    {{ props.row.player1 }}
                </b-table-column>

                <b-table-column field="army1" label="Armée 1" searchable>
                    {{ props.row.army1 }}
                </b-table-column>

                <b-table-column field="player2" label="Joueur 2" searchable>
                    {{ props.row.player2 }}
                </b-table-column>

                <b-table-column field="army2" label="Armée 2" searchable>
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
                            <b-button type="is-danger" icon-left="trash-can" @click="DeleteMatch(props.row)">Supprimer</b-button>
                        </div>
                    </section>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import MatchService from "../../services/MatchService";
    import UserService from "@/services/UserService";
    import ConfirmModal from "@/components/modals/ConfirmModal";

    export default {
        name: "MatchList",
        data() {
            return {
                currentUserId: 0,
                defaultSortDirection: 'desc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                perPage: 10,
                currentPage: 1,
                filterSelected: 'none',
                matches: [],
                filteredMatches: [],
            };
        },
        methods: {
            retrieveMatches() {
                MatchService.list()
                    .then(response => {
                        this.matches = response.data;
                        this.filteredMatches = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            refreshList() {
                this.retrieveMatches();
            },
            getCurrentUser() {
                UserService.getCurrentUser()
                    .then(response => {
                        this.currentUserId = response.data.pk;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            selectFilter(filterType) {
                if (filterType === this.filterSelected) {
                    this.filterSelected = 'none';
                }
                else {
                    this.filterSelected = filterType;
                }
            },
            filterMatches() {
                if (this.filterSelected === 'none') {
                    return this.matches;
                }
                let matches = []
                matches = this.matches.filter((match) => match.player1_id === this.currentUserId || match.player2_id === this.currentUserId);
                if (this.filterSelected === 'mine_won') {
                    matches = matches.filter((match) => (match.player1_id === this.currentUserId && match.score_p1 >= match.score_p2) || (match.player2_id === this.currentUserId && match.score_p2 >= match.score_p1))
                }
                if (this.filterSelected === 'mine_lost') {
                    matches = matches.filter((match) => (match.player1_id === this.currentUserId && match.score_p1 <= match.score_p2) || (match.player2_id === this.currentUserId && match.score_p2 <= match.score_p1))
                }
                this.filteredMatches = matches;
            },
            DeleteMatch(match) {
                this.$buefy.modal.open({
                    parent: this,
                    component: ConfirmModal,
                    hasModalCard: true,
                    trapFocus: true,
                    props: {
                        'title': "Confirmation de suppression d'une partie",
                        'message': "Êtes-vous sur de vous supprimer la partie entre " + match.player1 + " et " + match.player2 + " du " + new Date(match.date).toLocaleDateString(),
                        callback: confirm => {
                            if (confirm) {
                                MatchService.delete(match.id)
                                    .then(response => {
                                        if (response.status === 204) {
                                            this.$buefy.notification.open({
                                                message: 'La partie a été supprimée !',
                                                type: 'is-success'
                                            })
                                            this.refreshList();
                                        }
                                    })
                                    .catch(e => {
                                        this.$buefy.notification.open({
                                            message: "Une erreur s'est produite ! Erreur: " + e ,
                                            type: 'is-danger'
                                        })
                                    });
                            }
                    }}
                })
            }
        },
        mounted() {
            this.retrieveMatches();
            this.getCurrentUser();
        },
        watch: {
            filterSelected: function() {
                this.filterMatches();
            },
            matches: function() {
                this.filterMatches();
            }
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
