<template>
    <div>
        <div class="tile exclude is-ancestor">
            <div class="tile exclude is-vertical is-8">
                <div class="tile exclude">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child tile-content">
                            <p class="title">Joueur 1</p>
                            <p class="subtitle">Informations</p>
                            <b-field label="Joueur">
                                <b-input v-model="match.player1" readonly></b-input>
                            </b-field>
                            <b-field label="Armée">
                                <b-input v-model="match.army1" readonly></b-input>
                            </b-field>
                            <b-field label="CP">
                                <b-input v-model="match.cp_p1" readonly></b-input>
                            </b-field>
                            <b-field label="CP avant bataille">
                                <b-input v-model="match.cp_p1_used_before_battle" readonly></b-input>
                            </b-field>
                            <p class="subtitle">Objectifs secondaires</p>
                            <b-field label="Obj. secondaire 1">
                                <b-input v-model="match.objective1_p1" readonly></b-input>
                            </b-field>
                            <b-field label="Obj. secondaire 2">
                                <b-input v-model="match.objective2_p1" readonly></b-input>
                            </b-field>
                            <b-field label="Obj. secondaire 1">
                                <b-input v-model="match.objective3_p1" readonly></b-input>
                            </b-field>
                        </article>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child is-primary tile-content">
                            <p class="title">Joueur 2</p>
                            <p class="subtitle">Informations</p>
                            <b-field label="Joueur">
                                <b-input v-model="match.player2" readonly></b-input>
                            </b-field>
                            <b-field label="Armée">
                                <b-input v-model="match.army2" readonly></b-input>
                            </b-field>
                            <b-field label="CP">
                                <b-input v-model="match.cp_p2" readonly></b-input>
                            </b-field>
                            <b-field label="CP avant bataille">
                                <b-input v-model="match.cp_p2_used_before_battle" readonly></b-input>
                            </b-field>
                            <p class="subtitle">Objectifs secondaires</p>
                            <b-field label="Obj. secondaire 1">
                                <b-input v-model="match.objective1_p2" readonly></b-input>
                            </b-field>
                            <b-field label="Obj. secondaire 2">
                                <b-input v-model="match.objective2_p2" readonly></b-input>
                            </b-field>
                            <b-field label="Obj. secondaire 1">
                                <b-input v-model="match.objective3_p2" readonly></b-input>
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
                                        disabled>
                                </b-datepicker>
                            </b-field>
                            <b-field label="Location">
                                <b-input v-model="match.location" readonly></b-input>
                            </b-field>
                            <b-field label="Scenario">
                                <b-input v-model="match.scenario" readonly></b-input>
                            </b-field>
                            <p class="title">Score</p>
                            <p class="title" style="text-align: center">{{match.score_p1}} - {{match.score_p2}}</p>
                            <div class="field is-horizontal">
                                <label class="label">
                                    Score sans détails
                                    <input type="checkbox" v-model="match.score_no_details" disabled>
                                </label>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child table-content">
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
                            return (line.player === 1 || null) })" :key="index">
                                <th><input class="input" type="number" v-model="line.primary_score" readonly></th>
                                <th><input class="input" type="number" v-model="line.secondary1_score" readonly></th>
                                <th><input class="input" type="number" v-model="line.secondary2_score" readonly></th>
                                <th><input class="input" type="number" v-model="line.secondary3_score" readonly></th>
                                <th><input class="input" type="number" v-model="line.other_score" readonly></th>
                                <th><strong>{{totalP1[index]}}</strong></th>
                                <th><input class="input" type="number" v-model="line.cp_used" readonly></th>
                                <th><strong>{{cpLeftP1[index]}}</strong></th>
                            </tr>
                        </tbody>
                    </table>
                </article>
                <article class="tile is-child table-content">
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
                            <th><input class="input" type="number" v-model="line.primary_score" readonly></th>
                            <th><input class="input" type="number" v-model="line.secondary1_score" readonly></th>
                            <th><input class="input" type="number" v-model="line.secondary2_score" readonly></th>
                            <th><input class="input" type="number" v-model="line.secondary3_score" readonly></th>
                            <th><input class="input" type="number" v-model="line.other_score" readonly></th>
                            <th><strong>{{totalP2[index]}}</strong></th>
                            <th><input class="input" type="number" v-model="line.cp_used" readonly></th>
                            <th><strong>{{cpLeftP2[index]}}</strong></th>
                        </tr>
                        </tbody>
                    </table>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import MatchService from "@/services/MatchService";

    export default {
        name: "MatchDetail",
        data() {
            return {
                match: {},
            };
        },
        computed: {
            dateFormatted() {
                if (this.match.date) {
                    return new Date(this.match.date)
                }
                else {
                    return new Date(1900,1,1)
                }
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
            }
        },
        methods: {
            retrieveMatch(id) {
                MatchService.get(id)
                    .then(response => {
                        this.match = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.retrieveMatch(this.$route.params.id);
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

    strong {
        text-align: center;
        vertical-align: middle;
    }

    article.tile.is-child.table-content {
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

    .my-text {
        color: #fff;
    }

    .label {
        color: #fff;
    }

    .score {
        display:inline
    }

    th input {
        padding: 0;
        padding-left: 5px;
    }
</style>
