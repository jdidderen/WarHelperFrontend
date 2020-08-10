<template>
    <div class="container">
        <line-chart ref="chart"
                :chartData="chartdata"
                :options="options"/>
        <b-field>
            <b-select v-model="other_player_id" placeholder="Choisir le joueur" expanded>
                <option :value="0" selected>Choisir le joueur</option>
                <option v-for="(player,index) in player_ids" :key="index" :value="player.id">{{player.username}}</option>
            </b-select>
        </b-field>
    </div>
</template>

<script>
    import LineChart from '../charts/barChart.vue'
    import UserService from "@/services/UserService";
    import MatchService from "@/services/MatchService";
    import moment from 'moment';

    export default {
        name: 'MyWinLoseMatchesChart',
        components: { LineChart },
        data() {
            return {
                currentUserId:0,
                other_player_id: 0,
                matches: [],
                player_ids: [],
                chartdata: {},
                options: {
                    title: {
                        display: true,
                        text: 'Mes parties gagnées et perdues',
                        fontColor: 'white'
                    },
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                            ticks: {
                                fontColor: "#fff", // this here
                            },
                        }],
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                fontColor: "#fff", // this here
                            },
                        }]
                    },
                },
            };
        },
        methods: {
            getCurrentUser() {
                UserService.getCurrentUser()
                    .then(response => {
                        this.currentUserId = response.data.pk;
                        this.retrieveMatches(response.data.pk);
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            retrieveMatches(user_id) {
                MatchService.my(user_id)
                    .then(response => {
                        this.matches = response.data;
                        this.chartdata = this.FilterMatches(response.data,user_id)
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            retrieveUsers() {
                UserService.list()
                    .then(response => {
                        this.player_ids = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            FilterMatches(matches,user_id) {
                let labels = []
                let match_won = []
                let match_lost = []
                moment.locale('fr');
                let first = new moment(Math.min.apply(null, matches.map(function(e) {
                    return new moment(e.date);
                })));
                let last = new moment(Math.max.apply(null, matches.map(function(e) {
                    return new moment(e.date);
                })));
                let interim = first.clone();
                while (last > interim || interim.format('M') === last.format('M')) {
                    labels.push(interim.format('MMMM YYYY'))
                    var won_score = 0;
                    var lost_score = 0;
                    for(var i = 0; i < matches.filter(m => {
                        if (this.other_player_id !== 0) {
                            return moment(m.date).format('M') === interim.format('M') && (m.player1_id === this.other_player_id || m.player2_id === this.other_player_id)
                        }
                        else {
                            return moment(m.date).format('M') === interim.format('M')
                        }

                    }).length; i++)
                    {
                        if (matches[i].player1_id === user_id) {
                            if (matches[i].score_p1 > matches[i].score_p2) {
                                won_score++;
                            }
                            else {
                                lost_score--;
                            }
                        }
                        else {
                            if (matches[i].score_p2 > matches[i].score_p1) {
                                won_score++;
                            }
                            else{
                                lost_score--;
                            }
                        }
                    }
                    match_won.push(won_score);
                    match_lost.push(lost_score);
                    interim.add(1,'month');
                }
                return {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Parties gagnées',
                            backgroundColor: 'hsl(141, 71%, 48%)',
                            data: match_won,
                        },
                        {
                            label: 'Parties perdues',
                            backgroundColor: 'hsl(348, 100%, 61%)',
                            data: match_lost,
                        },
                    ]
                };
            },
        },
        mounted() {
            this.getCurrentUser();
            this.retrieveUsers();
        },
        watch: {
            // whenever question changes, this function will run
            other_player_id: function () {
                this.chartdata = this.FilterMatches(this.matches,this.currentUserId)
            }
        },
    }
</script>

<style scoped>

</style>
