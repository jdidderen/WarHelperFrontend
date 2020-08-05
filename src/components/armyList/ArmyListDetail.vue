<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <article class="tile is-child tile-content">
                    <h2 class="title is-2">Liste</h2>
                    <b-field label="Nom">
                        <b-input v-model="army_list.name" type="text" readonly></b-input>
                    </b-field>
                    <b-field label="Joueur">
                        <b-input v-model="army_list.player" readonly></b-input>
                    </b-field>
                    <b-field label="Type">
                        <b-select v-model="army_list.type" placeholder="Choisir le type" expanded disabled>
                            <option value="aln">ALN</option>
                            <option value="bsc">Battlescribe</option>
                        </b-select>
                    </b-field>
                    <b-field label="Armée">
                        <b-input v-model="army_list.army" readonly></b-input>
                    </b-field>
                    <b-field label="Liste">
                        <div v-html="army_list.descriptionHTML"></div>
                    </b-field>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import ArmyListService from "@/services/ArmyListService";

    export default {
        name: "ArmyListDetail",
        data() {
            return {
                army_list: {},
                editorOption: {
                    // Some Quill options...
                }
            };
        },
        methods: {
            retrieveArmyList(id) {
                ArmyListService.get(id)
                    .then(response => {
                        this.army_list = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.retrieveArmyList(this.$route.params.id);
        },
    }
</script>

<style>
    div.battlescribe {
        color: white !important;
    }
</style>
