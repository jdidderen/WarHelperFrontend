<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child tile-content">
                            <p class="title">Joueur 1</p>
                            <p class="subtitle">Informations</p>
                            <b-field label="Joueur">
                                <b-select v-model="match.player1_id" placeholder="Choisir le joueur" expanded>
                                    <option selected></option>
                                    <option v-for="(player,index) in player_ids" :key="index" :value="player.id">{{player.username}}</option>
                                </b-select>
                            </b-field>
                            <b-field label="Armée">
                                <b-select v-model="match.army_p1_id" placeholder="Choisir l'armée" expanded>
                                    <option selected></option>
                                    <option v-for="(army,index) in army_ids" :key="index" :value="army.id">{{army.name}}</option>
                                </b-select>
                            </b-field>
                            <b-field label="CP">
                                <b-numberinput v-model="match.cp_p1" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <b-field label="CP avant bataille">
                                <b-numberinput v-model="match.cp_p1_used_before_battle" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <p class="subtitle">Objectifs secondaires</p>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 1" expanded>
                                    <b-select v-model="match.objective1_p1_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective1_p1_id" label="Voir">
                                    <b-button @click="openObjectiveModal(1,1)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 2" expanded>
                                    <b-select v-model="match.objective2_p1_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective2_p1_id" label="Voir">
                                    <b-button @click="openObjectiveModal(2,1)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 3" expanded>
                                    <b-select v-model="match.objective3_p1_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective3_p1_id" label="Voir">
                                    <b-button @click="openObjectiveModal(3,1)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>

                        </article>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child tile-content">
                            <p class="title">Joueur 2</p>
                            <p class="subtitle">Informations</p>
                            <b-field label="Joueur">
                                <b-select v-model="match.player2_id" placeholder="Choisir le joueur" expanded>
                                    <option selected></option>
                                    <option v-for="(player,index) in player_ids" :key="index" :value="player.id">{{player.username}}</option>
                                </b-select>
                            </b-field>
                            <b-field label="Armée">
                                <b-select v-model="match.army_p2_id" placeholder="Choisir l'armée" expanded>
                                    <option selected></option>
                                    <option v-for="(army,index) in army_ids" :key="index" :value="army.id">{{army.name}}</option>
                                </b-select>
                            </b-field>
                            <b-field label="CP">
                                <b-numberinput v-model="match.cp_p2" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <b-field label="CP avant bataille">
                                <b-numberinput v-model="match.cp_p2_used_before_battle" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <p class="subtitle">Objectifs secondaires</p>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 1" expanded>
                                    <b-select v-model="match.objective1_p2_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective1_p2_id" label="Voir">
                                    <b-button @click="openObjectiveModal(1,2)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 2" expanded>
                                    <b-select v-model="match.objective2_p2_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective2_p2_id" label="Voir">
                                    <b-button @click="openObjectiveModal(2,2)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field label="Obj. secondaire 3" expanded>
                                    <b-select v-model="match.objective3_p2_id" placeholder="Choisir l'objectif" expanded>
                                        <option selected></option>
                                        <option v-for="(objective, index) in objective_ids" :key="index" :value="objective.id">{{objective.name}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.objective3_p2_id" label="Voir">
                                    <b-button @click="openObjectiveModal(3,2)"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                        </article>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child tile-content">
                    <div class="content">
                        <p class="title">Informations sur la partie</p>
                        <div class="content">
                            <b-field label="Select a date">
                                <b-datepicker
                                        placeholder="Type or select a date..."
                                        icon="calendar-today"
                                        v-model="dateFormatted"
                                >
                                </b-datepicker>
                            </b-field>
                            <b-field label="Location">
                                <b-input v-model="match.location"></b-input>
                            </b-field>
                            <b-field grouped>
                                <b-field label="Scenario" expanded>
                                    <b-select v-model="match.scenario_id" placeholder="Choisir le scénario" expanded>
                                        <option selected></option>
                                        <option v-for="scenario in scenario_ids" :key="scenario.id" :value="scenario.id">{{scenario.name + ' | ' + scenario.type_id.point_limit}}</option>
                                    </b-select>
                                </b-field>
                                <b-field v-if="match.scenario_id" label="Voir">
                                    <b-button @click="openScenarioModal()"><b-icon icon="eye"></b-icon></b-button>
                                </b-field>
                            </b-field>
                            <p class="title">Score</p>
                            <p class="title" style="text-align: center">{{scoreP1}} - {{scoreP2}}</p>
                            <div class="field">
                                <b-checkbox v-model="match.score_no_details">Score sans détails</b-checkbox>
                            </div>

                            <b-field label="Score - Joueur 1" v-if="match.score_no_details">
                                <b-numberinput v-model="match.score_p1" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <b-field label="Score - Joueur 2" v-if="match.score_no_details">
                                <b-numberinput v-model="match.score_p2" controls-position="compact" expanded></b-numberinput>
                            </b-field>
                            <div v-else>
                                <!--                                <h4 class="title is-4 my-text score">{{totalP1}} - {{totalP2}}</h4>-->
                            </div><br/><br/>
                            <section>
                                <div class="buttons">
                                    <b-button v-on:click="addLine" v-if="!match.score_no_details" type="is-link">
                                        Ajouter une ligne
                                    </b-button>
                                    <b-button v-on:click="createMatch" type="is-link">
                                        Créer la partie
                                    </b-button>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="tile is-ancestor" v-if="match.score_no_details !== true">
            <div class="tile is-vertical is-6 is-parent">
                <article class="tile is-child tile-content">
                    <p class="title">Battlerounds - Player 1</p>
                    <table class="table">
                        <thead>
                        <tr>
                            <th><abbr title="Primary">Prim</abbr></th>
                            <th><abbr title="Secondary 1">Sec 1</abbr></th>
                            <th><abbr title="Secondary 2">Sec 2</abbr></th>
                            <th><abbr title="Secondary 3">Sec 3</abbr></th>
                            <th><abbr title="Others">Oth</abbr></th>
                            <th><abbr title="Total">Total</abbr></th>
                            <th><abbr title="CP used">CP used</abbr></th>
                            <th><abbr title="CP left">CP left</abbr></th>
                        </tr>
                        </thead>
                        <tbody v-if="match && match.line_ids">
                        <tr v-for="(line,index) in match.line_ids.filter((line) => {
                        return (line.player === 1 || null) })" :key="index" >
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.primary_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary1_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary2_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary3_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.other_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <strong>
                                    {{totalP1[index]}}
                                </strong>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.cp_used" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <strong>
                                    {{cpLeftP1[index]}}
                                </strong>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </article>
            </div>
            <div class="tile is-vertical is-6 is-parent">
                <article class="tile is-child tile-content">
                    <p class="title">Battlerounds - Player 2</p>
                    <table class="table">
                        <thead>
                        <tr>
                            <th><abbr title="Primary">Prim</abbr></th>
                            <th><abbr title="Secondary 1">Sec 1</abbr></th>
                            <th><abbr title="Secondary 2">Sec 2</abbr></th>
                            <th><abbr title="Secondary 3">Sec 3</abbr></th>
                            <th><abbr title="Others">Oth</abbr></th>
                            <th><abbr title="Total">Total</abbr></th>
                            <th><abbr title="CP used">CP used</abbr></th>
                            <th><abbr title="CP used">CP left</abbr></th>
                        </tr>
                        </thead>
                        <tbody v-if="match && match.line_ids">
                        <tr v-for="(line,index) in match.line_ids.filter((line) => {
                        return (line.player === 2 || null) })" :key="index">
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.primary_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary1_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary2_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.secondary3_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.other_score" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <strong>
                                    {{totalP2[index]}}
                                </strong>
                            </th>
                            <th>
                                <b-field>
                                    <b-numberinput v-model="line.cp_used" :controls="false"></b-numberinput>
                                </b-field>
                            </th>
                            <th>
                                <strong>
                                    {{cpLeftP2[index]}}
                                </strong>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import ArmyService from "@/services/ArmyService";
    import ScenarioService from "@/services/ScenarioService";
    import ObjectiveService from "@/services/ObjectiveService";
    import UserService from "@/services/UserService";
    import MatchService from "@/services/MatchService";
    import ScenarioModal from "@/components/modals/ScenarioModal";
    import ObjectiveModal from "@/components/modals/ObjectiveModal";

    export default {
        name: "MatchUpdate",
        data() {
            return {
                player_ids: [],
                army_ids: [],
                scenario_ids: [],
                objective_ids: [],
                match: {'line_ids':[],'player1_id':null,'player2_id':null,'army_p1_id':null,'army_p2_id':null,'cp_p1':0,'cp_p2':0,'cp_p1_used_before_battle':0,'cp_p2_used_before_battle':0,
                    'date': new Date().toISOString().slice(0,10), 'location': '','score_no_details':false,'score_p1':0,'score_p2':0,
                    'objective1_p1_id':null,'objective2_p1_id':null,'objective3_p1_id':null,'objective1_p2_id':null,'objective2_p2_id':null,
                    'objective3_p2_id':null,'scenario_id':null,
                },
            };
        },
        computed: {
            scoreP1() {
                let sum = 0;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined && this.match.score_no_details !== true) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 1 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        sum += lines[i].primary_score + lines[i].secondary1_score + lines[i].secondary2_score + lines[i].secondary3_score + lines[i].other_score;
                    }}
                else {
                    sum = this.match.score_p1
                }
                return sum;
            },
            scoreP2() {
                let sum = 0;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined && this.match.score_no_details !== true) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 2 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        sum += lines[i].primary_score + lines[i].secondary1_score + lines[i].secondary2_score + lines[i].secondary3_score + lines[i].other_score;
                    }
                }
                else {
                    sum = this.match.score_p2
                }
                return sum
            },
            totalP1() {
                let total = [];
                let sum = 0;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 1 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        sum += lines[i].primary_score + lines[i].secondary1_score + lines[i].secondary2_score + lines[i].secondary3_score + lines[i].other_score;
                        total.push(sum);
                    }
                }
                return total
            },
            totalP2() {
                let total = [];
                let sum = 0;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 2 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        sum += lines[i].primary_score + lines[i].secondary1_score + lines[i].secondary2_score + lines[i].secondary3_score + lines[i].other_score;
                        total.push(sum);
                    }
                }
                return total
            },
            cpLeftP1() {
                let cpLeft = [];
                let cp = this.match.cp_p1 - this.match.cp_p1_used_before_battle;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 1 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        cp -= lines[i].cp_used
                        cpLeft.push(cp);
                    }
                }
                return cpLeft
            },
            cpLeftP2() {
                let cpLeft = [];
                let cp = this.match.cp_p2 - this.match.cp_p2_used_before_battle;
                if (this.match.line_ids !== null && this.match.line_ids !== undefined) {
                    let lines = this.match.line_ids.filter((line) => {
                        return (line.player === 2 || null)
                    })
                    for (var i = 0; i < lines.length; i++) {
                        cp -= lines[i].cp_used
                        cpLeft.push(cp);
                    }
                }
                return cpLeft
            },
            dateFormatted: {
                get: function() {
                    if (this.match.date) {
                        return new Date(this.match.date)
                    }
                    else {
                        return new Date()
                    }
                },
                set: function(newValue) {
                    let mm = newValue.getMonth() + 1; // getMonth() is zero-based
                    let dd = newValue.getDate();

                    this.match.date = [newValue.getFullYear(),'-',
                        (mm > 9 ? '' : '0') + mm,'-',
                        (dd > 9 ? '' : '0') + dd
                    ].join('')
                }
            }
        },
        methods: {
            addLine() {
                this.match.line_ids.push({'player':1,'primary_score':0,'secondary1_score':0,'secondary2_score':0,'secondary3_score':0,'other_score':0,'cp_used':0,});
                this.match.line_ids.push({'player':2,'primary_score':0,'secondary1_score':0,'secondary2_score':0,'secondary3_score':0,'other_score':0,'cp_used':0,});
            },
            retrieveArmies() {
                ArmyService.list()
                    .then(response => {
                        this.army_ids = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            retrieveUsers() {
                UserService.list()
                    .then(response => {
                        this.player_ids = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            retrieveObjectives() {
                ObjectiveService.list()
                    .then(response => {
                        this.objective_ids = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            retrieveScenarios() {
                ScenarioService.list()
                    .then(response => {
                        this.scenario_ids = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            createMatch() {
                this.match.score_p1 = this.scoreP1;
                this.match.score_p2 = this.scoreP2;
                MatchService.create(this.match)
                    .then(response => {
                        this.match.id = response.data.id;
                        this.$router.push({ name: 'match-update', params: { id: response.data.id }})
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            openScenarioModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: ScenarioModal,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true,
                    props: {
                        'id': this.match.scenario_id
                    }
                })
            },
            openObjectiveModal(number,player) {
                let id = 0;
                if (number === 1 && player === 1) {
                    id = this.match.objective1_p1_id
                }
                if (number === 2 && player === 1) {
                    id = this.match.objective2_p1_id
                }
                if (number === 3 && player === 1) {
                    id = this.match.objective3_p1_id
                }
                if (number === 1 && player === 2) {
                    id = this.match.objective1_p2_id
                }
                if (number === 2 && player === 2) {
                    id = this.match.objective2_p2_id
                }
                if (number === 3 && player === 2) {
                    id = this.match.objective3_p2_id
                }
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
            this.retrieveArmies();
            this.retrieveObjectives();
            this.retrieveScenarios();
            this.retrieveUsers();
        }
    }
</script>

<style>
    .table {
        width: 100%;
        color: #fff;
    }
    .table thead td, .table thead th, .table tfoot td, .table tfoot th, .table th, strong, th{
        color: #fff !important;
    }

    a.datepicker-cell.is-selectable.dots span, .datepicker-cell span {
        color: black;
    }

    .datepicker-cell.is-unselectable span {
        color: grey;
    }

    strong {
        text-align: center;
        vertical-align: middle;
    }

    .tile.is-parent.table-content {
        background-color: #363636;
        padding: 20px;
        border-radius: 5px;
    }

    article.tile.is-child.tile-content {
        background-color: #363636;
        color: #fff;
        border-radius: 5px;
        padding:20px;
    }

    th input {
        padding: 0;
        padding-left: 5px;
    }

    label.b-checkbox.checkbox:hover {
        color: #fff;
    }
</style>
