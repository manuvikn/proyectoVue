<template>
    <div id="main">
        <div>
        <h1>Usuarios ({{numUsers}})</h1>
        <div v-for="usuario of usuarios"
        :key="usuario.id">
            <hr>
            <input type="radio" :value="usuario.nombre" 
            :id="usuario.nombre"
            name="usuairos"
            @click="cargaUsuarios(usuario)">
            <label :for="usuario.nombre">
                {{usuario.nombre}}
            </label>
        </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
    name: 'Usuarios',
    computed: {
        ...mapState([
            'usuarios'
        ]),
        numUsers(){
            return this.usuarios.length
        }
    },
    methods:{
        ...mapActions([
            'getUsuarios'
        ]),
        ...mapMutations([
            'setNombre',
            'setLogin',
            'setFoto',
            'setMail'
        ]),
        cargaUsuarios(item) {
            this.setNombre(item.nombre)
            this.setFoto(item.foto)
            this.setMail(item.mail)
            this.setLogin(item.login)
            if (this.$route.path !== "/"+item.login){
                this.$router.push({
                    name: 'Usuario',
                    params: {
                        id: item.login
                    }
                })
            }
            
        }
    },
    created(){
        this.getUsuarios();
    }
}
</script>

<style scoped>
    #main {
        display:flex;
        flex-direction:row;
        justify-content: space-around;
    }
</style>