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
            <div class="tags">
                <span v-for="army in armies" v-bind:key="army.id"  v-on:click="selectArmy(army.id)" :class="{ 'is-success': activeArmyIds.includes(army.id)}" class="tag">{{army.name}}</span>
            </div>
        </div>
        <b-table
                :data="stratagems_filtered"
                :default-sort-direction="defaultSortDirection"
                :sort-icon="sortIcon"
                :sort-icon-size="sortIconSize"
                :per-page="perPage"
                :paginated="true"
                :current-page.sync="currentPage"
                default-sort="army">

            <template slot-scope="props">
                <b-table-column field="army" label="Armée" sortable>
                    {{ props.row.army }}
                </b-table-column>

                <b-table-column field="name" label="Nom" searchable>
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="type" label="Type">
                    {{ props.row.type }}
                </b-table-column>

                <b-table-column field="description" label="Description" searchable>
                    {{ props.row.description }}
                </b-table-column>

                <b-table-column field="cost" label="Coût" searchable>
                    {{ props.row.cost }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>
    import StratagemService from "@/services/StratagemService";
    import ArmyService from "@/services/ArmyService";

    export default {
        name: "StratagemList",
        data() {
            return {
                stratagems: [],
                armies: [],
                activeArmyIds: [],
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                perPage: 10,
                currentPage: 1,
            };
        },
        computed: {
            stratagems_filtered() {
                let strata_filtered = this.stratagems
                if (!(this.activeArmyIds === undefined || this.activeArmyIds.length === 0)) {
                    strata_filtered = strata_filtered.filter((strata) => this.activeArmyIds.includes(strata.army_id));
                }
                return strata_filtered;
            }
        },
        methods: {
            retrieveStratagems() {
                StratagemService.list()
                    .then(response => {
                        this.stratagems = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            retrieveArmies() {
                ArmyService.list()
                    .then(response => {
                        this.armies = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            selectArmy: function (id) {
                if (!(this.activeArmyIds.includes(id))){
                    this.activeArmyIds.push(id)
                }
                else {
                    for( var it = 0; it < this.activeArmyIds.length; it++) {
                        if ( this.activeArmyIds[it] === id) {
                            this.activeArmyIds.splice(it, 1);
                        }
                    }
                }
            },
        },
        mounted() {
            this.retrieveStratagems();
            this.retrieveArmies();
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
