<script>
    import { Bar, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Bar,
        mixins: [reactiveProp],
        props: {
            options: {}
        },
        methods: {
            loadChart() {
                this.renderChart(this.chartData, this.options)
            }
        },
        mounted () {
            this.loadChart()
        },

    }
</script>
