import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/createface',
  },
  {
    path: '/createface',
    name: 'createface',
    component: function () {
      return import('../views/changface/createFace.vue')
    }
  },
  {
    path: '/collectface',
    name: 'collectface',
    component: function () {
      return import('../views/changface/collectFace.vue')
    }
  },
  {
    path: '/changeface',
    name: 'changeface',
    component: function () {
      return import('../views/changface/changeFace.vue')
    }
  },
  {
    path: '/cutperson',
    name: 'cutperson',
    component: function () {
      return import('../views/replacebackground/cutPerson.vue')
    }
  },
  {
    path: '/replacebackground',
    name: 'replacebackground',
    component: function () {
      return import('../views/replacebackground/replacebackground.vue')
    }
  },
  {
    path: '/addbackground',
    name: 'addbackground',
    component: function () {
      return import('../views/backgroundmanage/addbackground.vue')
    }
  },
  {
    path: '/backgroundlist',
    name: 'backgroundlist',
    component: function () {
      return import('../views/backgroundmanage/backgroundlist.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
