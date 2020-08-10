<template>
    <b-modal :active="true">
        <p class="image">
            <img :src="objective.description_url" alt="Objective">
        </p>
        <button class="modal-close is-large" @click="$parent.close()" aria-label="close"></button>
    </b-modal>
</template>

<script>
    import ObjectiveService from "@/services/ObjectiveService";

    export default {
        name: "ObjectiveModal",
        props: ['id',],
        data() {
            return {
                objective: {'type_id':null},
            };
        },
        methods: {
            retrieveObjective(id) {
                ObjectiveService.get(id)
                    .then(response => {
                        this.objective = response.data;
                    })
                    .catch(e => {
                        this.$buefy.notification.open({
                            message: "Une erreur s'est produite ! Erreur: " + e ,
                            type: 'is-danger'
                        })
                    });
            },
        },
        mounted() {
            this.retrieveObjective(this.id);
        }
    }
</script>

<style scoped>

</style>
