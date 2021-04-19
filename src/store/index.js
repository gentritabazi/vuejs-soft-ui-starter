import { createStore } from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
	displayLoader: false,
	loggedUser: localStorage.getItem('loggedUser') || null
}

export default createStore({
	state,
	actions,
	getters,
	mutations
})