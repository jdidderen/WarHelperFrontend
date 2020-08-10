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
                          to="/personal-objective/create"
                          type="is-link">
                    Créer
                </b-button>
            </div>
        </div>
        <b-table
                :data="personal_objectives"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                :per-page="perPage"
                :paginated="true"
                :current-page.sync="currentPage"
                default-sort="date">

            <template slot-scope="props">
                <b-table-column field="date" label="Date" searchable sortable>
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>
                <b-table-column field="name" label="Nom" searchable>
                    {{ props.row.name }}
                </b-table-column>
                <b-table-column field="player" label="Joueur" searchable sortable>
                    {{ props.row.player }}
                </b-table-column>

                <b-table-column field="id" label="Action">
                    <section>
                        <div class="buttons">
                            <b-button tag="router-link"
                                      :to="{ name: 'personal-objective-detail', params: {id: props.row.id } }"
                                      type="is-link">
                                Voir
                            </b-button>
                            <b-button tag="router-link"
                                      :to="{ name: 'personal-objective-update', params: {id: props.row.id } }"
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
    import PersonalObjectiveService from "@/services/PersonalObjectiveService";

    export default {
        name: "PersonalObjectiveList",
        data() {
            return {
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                perPage: 10,
                currentPage: 1,
                personal_objectives: [],
            };
        },
        methods: {
            retrievePersonalObjectives() {
                PersonalObjectiveService.list()
                    .then(response => {
                        this.personal_objectives = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },

            refreshList() {
                this.retrievePersonalObjectives();
            },
        },
        mounted() {
            this.retrievePersonalObjectives();
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
