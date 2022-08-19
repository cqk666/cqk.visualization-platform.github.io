import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//actions响应组件中动作
const actions = {
    sendInfo(context, value) {
        context.commit('SENDINFO', value)
    },
    taskOut(context, value) {
        context.commit('TASKOUT', value)
    }
}
//mutations操作数据
const mutations = {
    SENDINFO(state, value) {
        state.allInfo.push(value)

    },
    TASKOUT(state, value) {
        state.allTaskInfo.push(value)

    }
}
//state存储数据
const state = {
    allInfo: [
        {
            Tname: '1',
            Ttype: '1',
            Tlevel: '1', Tgrade: '1',
            Ttime: '1',
            Tbit: '1'
        },
    ],
    allTaskInfo: [
        {
            tatalName:"1",
            toalStartTMsg: "1",
            toalFinshTMsg:"1" ,
            toalLastTMsg:"1" ,
            toalHostCommunityMsg: "1",
            toalHostPersonMsg:"1" ,
            toalActPlaceMsg:"1" ,
            toalNumLimitMsg: "1",
        }
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})