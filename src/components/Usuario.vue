<template>
    <div class="contenedor">
        <article >
            <picture><img :src="foto" :alt="login"></picture>
            <input type="text"  v-model="nombre" readonly/>
            <input type="text"  v-model="mail" readonly/>
            <h3> ASIGNADAS():</h3>
            <select multiple>
              <option
              v-for="(tarea, index) of tareasUser"
              :key="index"
              @click="$store.commit('removeTareaUser',tarea)"
              >{{tarea.title}}</option>
            </select>
            
        </article>
        <Tareas/>
        
        
    </div>
</template>

<script>
import Tareas from '@/components/Tareas.vue'
export default {
    name: 'Usuario',
    components: {
        Tareas
    },
    computed:{
        login:{
            get(){
                return this.$store.state.login;
            },
            set(value){
                this.$store.commit('setLogin',value);
            }
        },
        nombre:{
            get(){
                return this.$store.state.nombre;
            },
            set(value){
                this.$store.commit('setNombre',value);
            }
        },
        mail:{
            get(){
                return this.$store.state.mail;
            },
            set(value){
                this.$store.commit('setMail',value);
            }
        },
        foto:{
            get(){
                return this.$store.state.foto;
            },
            set(value){
                this.$store.commit('setFoto',value);
            }
        },
        tareasUser:{
            get(){
                return this.$store.state.tareasUser;
            },
            set(value){
                this.$store.commit('setTareasUser',value);
            }
        }
    }
}
</script>

<style scoped>
    .contenedor{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }
    article{
        position: sticky;
            top: 0;
            background: white;
        border: .05vw solid blue;
        width: auto;
        padding: 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-right: 5vw;
        margin-left: 5vw;
    }

    option:nth-of-type(odd){
        color:red
    }
    select{
        width: 20vw;
    }
</style>