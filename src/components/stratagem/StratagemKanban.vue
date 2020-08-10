<template>
    <div>
        <h2 class="title is-2">Stratagèmes</h2>
        <h4 class="title is-4">Armies</h4>
        <div class="tags">
            <span v-for="army in armies" v-bind:key="army.id"  v-on:click="selectArmy(army.id)" :class="{ 'is-success': activeArmyIds.includes(army.id)}" class="tag">{{army.name}}</span>
        </div>
        <h4 class="title is-4">Phases</h4>
        <div class="tags">
            <span v-for="phase in phases" v-bind:key="phase.id"  v-on:click="selectPhase(phase.id)" :class="{ 'is-success': activePhaseIds.includes(phase.id)}" class="tag">{{phase.name}}</span>
        </div>
        <div class="cards">
            <div class="card" v-for="stratagem in stratagems_filtered" v-bind:key="stratagem.id" >
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
        <nav class="pagination is-centered top-margin" role="navigation" aria-label="pagination">
            <a class="pagination-previous custom-pagination-link" @click="page--" v-if="page !==1" >Previous</a>
            <a class="pagination-next custom-pagination-link" @click="page++" v-if="page !== this.pages.length">Next page</a>
            <div class="select is-rounded">
                <select v-model="perPage">
                    <option>3</option>
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                    <option>15</option>
                    <option>18</option>
                </select>
            </div>
            <ul class="pagination-list">
                <li class="page-item">
                    <a class="pagination-link custom-pagination-link" :class="{'is-current': pageNumber === page,'custom-is-current': pageNumber === page}" v-for="(pageNumber,index) in pages" v-bind:key="index" @click="page = pageNumber"> {{pageNumber}} </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import StratagemService from "@/services/StratagemService";
    import ArmyService from "@/services/ArmyService";

    export default {
        name: "StratagemKanban",
        data() {
            return {
                stratagems: [],
                phases: [],
                armies: [],
                activeArmyIds: [],
                activePhaseIds: [],
                page: 1,
                perPage: 6,
                pages: [],
            };
        },
        computed: {
            stratagems_filtered() {
                let strata_filtered = this.stratagems
                if (!(this.activeArmyIds === undefined || this.activeArmyIds.length === 0)) {
                    strata_filtered = strata_filtered.filter((strata) => this.activeArmyIds.includes(strata.army_id));
                }
                if (!(this.activePhaseIds === undefined || this.activePhaseIds.length === 0)) {
                    strata_filtered = strata_filtered.filter((strata) => this.activePhaseIds.includes(strata.phase_id));
                }
                this.setPages(strata_filtered);
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return strata_filtered.slice(from, to);
            }
        },
        methods: {
            retrieveStratagems() {
                StratagemService.list()
                    .then(response => {
                        this.stratagems = response.data;
                        let numberOfPages = Math.ceil(this.stratagems.length / this.perPage);
                        for (let index = 1; index <= numberOfPages; index++) {
                            this.pages.push(index);
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            retrieveStratagemPhases() {
                StratagemService.phaseList()
                    .then(response => {
                        this.phases = response.data;
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

            setPages (stratagems) {
                this.pages = []
                let numberOfPages = Math.ceil(stratagems.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },

            refreshList() {
                this.retrieveStratagems();
                this.setPages();
                this.retrieveStratagemPhases();
                this.retrieveArmies();
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

            selectPhase: function (id) {
                if (!(this.activePhaseIds.includes(id))){
                    this.activePhaseIds.push(id)
                }
                else {
                    for( var it = 0; it < this.activePhaseIds.length; it++) {
                        if ( this.activePhaseIds[it] === id) {
                            this.activePhaseIds.splice(it, 1);
                        }
                    }
                }
            }
        },
        mounted() {
            this.retrieveStratagems();
            this.retrieveStratagemPhases();
            this.retrieveArmies();
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

    .custom-pagination-link {
        background: #fff;
    }

    .custom-is-current {
        background: #00d1b2;
        border-color: #00d1b2;
    }

    .top-margin {
        margin-top: 20px;
    }
</style>
