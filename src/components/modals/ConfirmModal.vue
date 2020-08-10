<template>
    <b-modal :active="true">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">{{title}}</p>
            </header>
            <section class="modal-card-body">
                {{message}}
            </section>
            <footer class="modal-card-foot">
                <button class="button is-primary" @click.stop="e => handleClickButton(false)">Non</button>
                <button class="button is-danger" @click.stop="e => handleClickButton(true)">Oui</button>
            </footer>
        </div>
    </b-modal>
</template>

<script>
    export default {
        name: "ConfirmModal",
        props: ['title','message','callback'],
        data() {
            return {
                objective: {'type_id':null},
            };
        },
        methods: {
            handleClickButton(confirm) {
                if (this.callback) {
                    this.$parent.close();
                    this.callback(confirm);
                }
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
