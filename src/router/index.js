import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home.vue";
import About from '@/views/About.vue';
import Events from '@/views/Events.vue';
import Contact from '@/views/Contact.vue';

Vue.useAttrs(Router);

export default new Router ({
    node: 'history',
    routers: [
        {
            path: '/',
            name: 'Home',
            component:Home
        },
        {
            path:'/about',
            name: 'About',
            component: About
        },
        {
            path: '/events',
            name: 'Events',
            component:Events
        },
        {
            path:'/contact',
            name:'Contact',
            component: Contact
        }
    ]
})