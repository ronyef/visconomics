import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    sensorData: []
  },
  mutations: {
    updateData (state, data) {
      state.sensorData = data
    }
  },
  getters: {
    getSensorData: state => state.sensorData
  }
})

export default store
