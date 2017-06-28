import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

let snapshots = []
const store = new Vuex.Store({
    state: {
        cols: []
    },
    mutations: {
        updateCols (state, cols) {
            state.cols = cols
        },
        undo (state) {
            if(snapshots.length > 1) {
                snapshots.pop()
                let _state = snapshots.pop()
                store.replaceState(_state)
            }
        }
    },
    // actions: {
    //     updateCols ({commit}) {
    //         commit('updateCols')
    //     },
    //     undo ({commit}) {
    //         console.log('action is to undo');
    //         commit('undo')
    //     }
    // },
    debug: true
})

store.subscribe((mutation, state) => {
    let prevState = _.cloneDeep(store.state)
    let nextState = _.cloneDeep(state)
    snapshots.push(nextState)
})

export default store
