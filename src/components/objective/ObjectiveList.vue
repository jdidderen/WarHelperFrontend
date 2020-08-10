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
        </div>
        <b-table
                :data="objectives"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                :per-page="perPage"
                :paginated="true"
                :current-page.sync="currentPage"
                default-sort="type_id.name">

            <template slot-scope="props">

                <b-table-column field="name" label="Nom" searchable>
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="type_id.name" label="Type" searchable sortable>
                    {{ props.row.type_id.name }}
                </b-table-column>

                <b-table-column field="id" label="Action">
                    <section>
                        <div class="buttons">
                            <b-button type="is-primary" @click="openObjectiveModal(props.row.id)"><b-icon icon="eye"></b-icon></b-button>
                        </div>
                    </section>
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import ObjectiveService from "../../services/ObjectiveService";
    import ObjectiveModal from "@/components/modals/ObjectiveModal";

    export default {
        name: "ObjectiveList",
        data() {
            return {
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                perPage: 10,
                currentPage: 1,
                objectives: [],
            };
        },
        methods: {
            retrieveObjectives() {
                ObjectiveService.list()
                    .then(response => {
                        this.objectives = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },

            refreshList() {
                this.retrieveObjectives();
            },

            openObjectiveModal(id) {
                this.$buefy.modal.open({
                    parent: this,
                    component: ObjectiveModal,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true,
                    props: {
                        'id': id
                    }
                })
            }
        },
        mounted() {
            this.retrieveObjectives();
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
