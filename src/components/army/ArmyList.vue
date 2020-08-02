<template>
    <div class="cards">
            <router-link v-for="(army,index) in armies" :key="index" :to="{ name: 'army-detail', params: {id: army.id } }">
                <div class="card" style="box-shadow: 0 5px 10px rgba(0,0,0,.8)">
                    <div class="card-image" style="background: transparent">
                        <figure class="image">
                            <img class="rounded-image" :src="army.image_url" :alt="army.name">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{army.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
</template>

<script>
    import ArmyService from "../../services/ArmyService";

    export default {
        name: "ArmyList",
        data() {
            return {
                armies: [],
            };
        },
        methods: {
            retrieveArmies() {
                ArmyService.list()
                    .then(response => {
                        this.armies = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            refreshList() {
                this.retrieveArmies();
            },
        },
        mounted() {
            this.retrieveArmies();
        }
    }
</script>

<style scoped>
    .rounded-image {
        border-radius: .5rem;
    }

    /*.card{*/
    /*    height: 100%;*/
    /*    background-color: #363636;*/
    /*    border-radius: .5rem;*/
    /*    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);*/
    /*    cursor: pointer;*/
    /*}*/
</style>
