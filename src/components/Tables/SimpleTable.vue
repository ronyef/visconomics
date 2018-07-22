<template>
  <div>
    <md-table v-model="viscoData" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Device">{{ item.device }}</md-table-cell>
        <md-table-cell md-label="Timestamp">{{ item.ts }}</md-table-cell>
        <md-table-cell md-label="Temperature">{{ item.temperature }} &#8451</md-table-cell>
        <md-table-cell md-label="Viscosity">{{ item.viscosity }} CsT</md-table-cell>
      </md-table-row>
    </md-table>

  </div>

</template>

<script>
import { viscoRef } from '../../firebase'
// import { store } from '../../store/store'

export default {
  name: 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    viscoData() {
      var viscoArr = this.visco.map(obj => {
        var rObj = {};
        var splittedData = obj.data.split(",",3);
        rObj.temperature = parseFloat(splittedData[1]).toFixed(3)
        rObj.viscosity = parseFloat(splittedData[2]).toFixed(3)
        var date = new Date(+obj.ts * 1000)
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        rObj.ts = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' +
          date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        rObj.device = obj.device;
        return rObj;
      });
      this.$store.commit('updateData', viscoArr)
      console.log(this.$store.state.sensorData)
      return viscoArr.reverse();
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          name: 'Dakota Rice',
          salary: '$36,738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          name: 'Minerva Hooper',
          salary: '$23,738',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Overland Park'
        },
        {
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Gloucester'
        },
        {
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten'
        },
        {
          name: 'Mason Porter',
          salary: '$78,615',
          country: 'Chile',
          city: 'Gloucester'
        }
      ]
    }
  },
  firebase: {
    visco: viscoRef
  }
}
</script>
