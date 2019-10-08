import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Bookings from './bookings';

export default new Vuex.Store({
    modules: {
        bookings: Bookings,
    },

    state: {
        date: null,
    },

    mutations: {
        setDate: function (state, newDate) {
            if (location.href.indexOf(window.HYDROFON.baseURL + '/calendar/') > 0) {
                history.pushState(null, null, window.HYDROFON.baseURL + '/calendar/' + new Date(newDate * 1000).toISOString().split('T')[0]);
            }

            state.date = newDate;
        }
    }
});
