<template>
  <md-card>
    <md-card-header class="card-chart" :data-background-color="dataBackgroundColor">
      <div :id="chartId" class="ct-chart"></div>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
    <!-- {{vtData[0].temperature}} -->
  </md-card>
</template>

<script>
import { viscoRef } from '../../firebase'
import { mapGetters } from 'vuex'

export default {
  name: 'chart-temp',
  props: {
    footerText: {
      type: String,
      default: ''
    },
    headerTitle: {
      type: String,
      default: 'Chart title'
    },
    chartType: {
      type: String,
      default: 'Line' // Line | Pie | Bar
    },
    // chartOptions: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // },
    chartResponsiveOptions: {
      type: Array,
      default: () => {
        return []
      }
    },
    // chartData: {
    //   type: Object,
    //   default: () => {
    //     return {
    //       labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    //       series: [
    //         [12, 17, 7, 17, 23, 18, 38]
    //       ]
    //     }
    //   }
    // },
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    // temperatures() {
    //   var tempArr = this.visco.map(obj => {
    //     var arr = obj.temperature
    //     return arr
    //   })
    //   console.log(tempArr)
    //   // this.initChart()
    //   return tempArr
    // },
    // ...mapGetters({
    //   mySensor: 'getSensorData'
    // })
    // vtData () {
    //   return this.$store.state.sensorData
    // }
  },
  // watch: {
  //   vtData (newData, oldData) {
  //     console.log('Data baru: ${newData} datang!')
  //   }
  // },
  data () {
    return {
      chartId: 'no-id',
      dataGrafik: {
        // type: Object,
        // default: () => {
        //   return {
        //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        //     series: [
        //       [12, 17, 7, 17, 23, 18, 12]
        //     ]
        //   }
        // }
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
          [12, 17, 7, 17, 23, 18, 20]
        ]
      },
      dataOpsi: {
        type: Object,
        default: () => {
          return {
            lineSmooth: this.$Chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        }
      }
    }
  },
  firebase: {
    visco: viscoRef
  },
  methods: {
    /***
     * Initializes the chart by merging the chart options sent via props and the default chart options
     */
    initChart () {
      var chartIdQuery = `#${this.chartId}`
      this.$Chartist[this.chartType](chartIdQuery, this.temperatures, this.dataOpsi)
    },
    /***
     * Assigns a random id to the chart
     */
    updateChartId () {
      var currentTime = new Date().getTime().toString()
      var randomInt = this.getRandomInt(0, currentTime)
      this.chartId = `div_${randomInt}`
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },
  mounted () {
    this.updateChartId()
    this.$nextTick(this.initChart)
  }
}
</script>
