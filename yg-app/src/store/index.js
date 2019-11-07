import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store =new Vuex.Store({
    state:{
        sa:'block'
    },
    mutations:{
        'SHOWDOS':(state,payload)=>{
            // eslint-disable-next-line no-console
            console.log('海生收到，我正在做....')
            state.sa=payload
        }
    },
    actions:{
        'DIDOS':(store,data)=>{
            store.commit('SHOWDOS',data);
        }
    },
    getters:{
        'GETDOS':(state)=>{
            return state.sa
        }
    }
})
export default store
