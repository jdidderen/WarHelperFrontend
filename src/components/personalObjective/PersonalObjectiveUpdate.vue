<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <article class="tile is-child tile-content">
                    <h2 class="title is-2">Objectif personnel</h2>
                    <b-field label="Sélectionner une date">
                        <b-datepicker
                                placeholder="Type or select a date..."
                                icon="calendar-today"
                                v-model="dateFormatted"
                        >
                        </b-datepicker>
                    </b-field>
                    <b-field label="Nom">
                        <b-input v-model="personal_objective.name"></b-input>
                    </b-field>
                    <b-field label="Description">
                        <b-input v-model="personal_objective.description" type="textarea"></b-input>
                    </b-field>
                    <b-button @click="savePersonalObjective()" type="is-primary" icon-left="new-box">Mettre à jour</b-button>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import PersonalObjectiveService from "@/services/PersonalObjectiveService";

    export default {
        name: "PersonalObjectiveUpdate",
        data() {
            return {
                personal_objective: {},
            };
        },
        methods: {
            retrievePersonalObjective(id) {
                PersonalObjectiveService.get(id)
                    .then(response => {
                        this.personal_objective = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
            savePersonalObjective() {
                PersonalObjectiveService.update(this.$route.params.id,this.personal_objective)
                    .then(response => {
                            if (response.status === 200) {
                                this.$buefy.notification.open({
                                    message: "L'objectif personnel a été mise à jour avec succès !",
                                    type: 'is-success'
                                })
                            }
                        this.$router.push({ name: 'personal-objective-list'});
                    }
                    )
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
        },
        computed: {
            dateFormatted: {
                get: function() {
                    if (this.personal_objective.date) {
                        return new Date(this.personal_objective.date)
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
        mounted() {
            this.retrievePersonalObjective(this.$route.params.id);
        }
    }
</script>

<style>

</style>
