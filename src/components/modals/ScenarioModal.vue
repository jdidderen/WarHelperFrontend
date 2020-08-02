<template>
    <b-modal :active="true">
        <p class="image">
            <img :src="scenario.rules_url" alt="Rules">
        </p>
        <p class="image">
            <img :src="scenario.deployment_url" alt="Deployment">
        </p>
        <button class="modal-close is-large" @click="$parent.close()" aria-label="close"></button>
    </b-modal>
</template>

<script>
    import ScenarioService from "@/services/ScenarioService";

    export default {
        name: "ScenarioModal",
        props: ['id',],
        data() {
            return {
                scenario: {'type_id':null},
            };
        },
        methods: {
            retrieveScenario(id) {
                ScenarioService.get(id)
                    .then(response => {
                        this.scenario = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.retrieveScenario(this.id);
        }
    }
</script>

<style scoped>

</style>
