<template>
    <div>
        <h1>Tareas ({{numTareas}})</h1>
        <div v-for="tarea of tareas"
        :key="tarea.id"
        @click="actualiza(tarea)">
        <hr>
        <label>{{tarea.title}}</label>
        </div>
    </div>
    
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
    name: "Tareas",
    computed:{
        ...mapState([
            'tareas'
        ]),
        numTareas(){
            return this.tareas.length
        }
    },
    methods:{
        ...mapActions([
            'getTareas'
        ]),
        ...mapMutations([
            'addTareaUser',
            'setTareasUser'
        ]),
        actualiza(tarea){
            this.addTareaUser(tarea)
            this.$store.commit('setStateLogin',this.$store.state.login)
        }
    },
    created(){
        this.getTareas()
    }/* ,
    updated(){
        this.$store.commit('setStateLogin',this.$store.state.login)
    } */
}
</script>