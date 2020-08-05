<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <article class="tile is-child tile-content">
                    <h2 class="title is-2">Liste</h2>
                    <b-field label="Nom">
                        <b-input v-model="army_list.name" type="text"></b-input>
                    </b-field>
                    <b-field label="Type">
                        <b-select v-model="army_list.type" placeholder="Choisir le type" expanded>
                            <option selected></option>
                            <option value="aln">ALN</option>
                            <option value="bsc">Battlescribe</option>
                        </b-select>
                    </b-field>
                    <p v-if="army_list.type === 'bsc'">
                        <span class="has-text-danger">Si vous utilisez Battlescribe, il faut copier votre liste au format <strong class="has-text-danger">HTML</strong>. <a target="_blank" href="https://drive.google.com/file/d/1dhFfgxQX9-nkxfd9FAnuoRfhTrw0gFzQ/view?usp=sharing">Voir exemple</a></span>
                    </p>
                    <p v-if="army_list.type === 'aln'">
                        <span class="has-text-danger">Si vous utilisez ALN, il faut copier votre liste au format <strong class="has-text-danger">BBcode</strong>. <a target="_blank" href="https://drive.google.com/file/d/1Eco-G2fDpUUmBjSBQoD7dF_lco7xyKBX/view?usp=sharing">Voir exemple</a></span>
                    </p>
                    <b-field label="Armée">
                        <b-select v-model="army_list.army_id" placeholder="Choisir l'armée" expanded>
                            <option selected></option>
                            <option v-for="(army,index) in army_ids" :key="index" :value="army.id">{{army.name}}</option>
                        </b-select>
                    </b-field>
                    <b-field label="Liste">
                        <b-input v-model="army_list.description" type="textarea"></b-input>
                    </b-field>
                    <b-button @click="createArmyList()" type="is-primary" icon-left="new-box">Créer</b-button>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import ArmyListService from "@/services/ArmyListService";
    import ArmyService from "@/services/ArmyService";
    import UserService from "@/services/UserService";

    export default {
        name: "ArmyListCreate",
        data() {
            return {
                army_ids: [],
                army_list: {},
                editorOption: {
                    // Some Quill options...
                }
            };
        },
        methods: {
            retrieveArmies() {
                ArmyService.list()
                    .then(response => {
                        this.army_ids = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getCurrentUser() {
                UserService.getCurrentUser()
                    .then(response => {
                        this.currentUserId = response.data.pk;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            createArmyList() {
                this.army_list.player_id = this.currentUserId
                ArmyListService.create(this.army_list)
                    .then(response => {
                        this.army_list.id = response.data.id;
                        this.$router.push({ name: 'army-list-list'})
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.getCurrentUser();
            this.retrieveArmies();
        },
    }
</script>

<style>
    div.battlescribe {
        color: white !important;
    }
</style>
