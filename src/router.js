import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import listagem from './views/listagem.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: Home
        },

        {
            path: '/listagem',
            name: 'listagem_page',
            component: listagem
        }
    ]

})
