<template>
    <div class="container">
        <radar-chart ref="radarChart"
                :chartData="chartdata"
                :options="options"/>
    </div>
</template>

<script>
    import UserService from "@/services/UserService";
    import MatchService from "@/services/MatchService";
    import ArmyService from "@/services/ArmyService";
    import RadarChart from "@/components/charts/radarChart";

    export default {
        name: 'WinLoseMatchesArmiesChart',
        components: {RadarChart },
        data() {
            return {
                currentUserId:0,
                matches: [],
                player_ids: [],
                army_ids: [],
                chartdata: {},
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontColor: 'white'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Mes parties gagnées et perdues contre chaque armée',
                        fontColor: 'white'
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'white', // labels such as 10, 20, etc
                            showLabelBackdrop: false // hide square behind text
                        },
                        pointLabels: {
                            fontColor: 'white' // labels around the edge like 'Running'
                        },
                        gridLines: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        angleLines: {
                            color: 'white' // lines radiating from the center
                        }
                    }
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
            retrieveArmies() {
                ArmyService.list()
                    .then(response => {
                        this.army_ids = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            FilterMatches(matches,user_id) {
                let matches_dict = {}
                let labels = [];
                let win = [];
                let lose = [];
                for (var i = 0; i < matches.length; i++)
                {
                    if(matches[i].player1_id === user_id) {
                        if (!(matches[i].army2 in matches_dict))
                        {
                            matches_dict[matches[i].army2] = {
                                'win':0,
                                'lose':0
                            }
                        }
                        if(matches[i].score_p1 > matches[i].score_p2) {
                            matches_dict[matches[i].army2]['win']++;
                        }
                        else {
                            matches_dict[matches[i].army2]['lose']++;
                        }
                    }
                    if(matches[i].player2_id === user_id) {
                        if (!(matches[i].army1 in matches_dict))
                        {
                            matches_dict[matches[i].army1] = {
                                'win':0,
                                'lose':0
                            }
                        }
                        if(matches[i].score_p2 > matches[i].score_p1) {
                            matches_dict[matches[i].army1]['win']++;
                        }
                        else {
                            matches_dict[matches[i].army1]['lose']++;
                        }
                    }
                }
                for (let key in matches_dict) {
                    labels.push(key);
                    win.push(matches_dict[key].win)
                    lose.push(matches_dict[key].lose)
                }
                return {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Parties gagnées',
                            backgroundColor: 'rgba(35, 209, 96,0.2)',
                            borderColor: 'rgba(35, 209, 96)',
                            pointBackgroundColor: 'rgba(35, 209, 96)',
                            data: win,
                        },
                        {
                            label: 'Parties perdues',
                            backgroundColor: 'rgba(255, 56, 96,0.2)',
                            borderColor: 'rgba(255, 56, 96)',
                            pointBackgroundColor: 'rgba(255, 56, 96)',
                            data: lose,
                        },
                    ]
                };
            },
        },
        mounted() {
            this.getCurrentUser();
            this.retrieveUsers();
            this.retrieveArmies();
        },
    }
</script>

<style scoped>

</style>
