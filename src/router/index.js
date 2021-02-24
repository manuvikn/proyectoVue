import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuario from '@/components/Usuario.vue'
import Usuarios from '@/components/Usuarios.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Usuarios,
    children: [
      {
        path: '/:id',
        name: 'Usuario',
        component: Usuario
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
