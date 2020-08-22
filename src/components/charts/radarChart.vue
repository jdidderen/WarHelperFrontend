<script>
    import { Radar, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Radar,
        mixins: [reactiveProp],
        props: {
            options: {},
            // labels: []
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
