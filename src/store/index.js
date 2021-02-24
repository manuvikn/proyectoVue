import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    tareas: [],
    // datos detalle del usuario mostrado
    login: '',
    nombre: '',
    foto: '',
    mail: '',
    //lista de tareas asignadas al usuario
    tareasUser: []
  },
  mutations: {
    setUsuarios(state, value) {
      state.usuarios = value;
    },
    setTareas(state,value){
      state.tareas=value;
    },
    setNombre(state, value) {
      state.nombre = value;
    },
    setLogin(state, value) {
      state.login = value;
    },
    setFoto(state, value) {
      state.foto = value;
    },
    setMail(state, value) {
      state.mail = value;
    },
    setTareasUser(state,value){
      state.tareasUser=value;
    },
    //Recibe un objeto tarea, la extrae del array de tareas y la añade
    //al array de tareas asignadas al usuario.
    addTareaUser(state,value){
      state.tareas.splice(state.tareas.findIndex(element => element.id == value.id),1);
      state.usuarios[state.usuarios.findIndex(element => element.login == state.login)].tareasUser.push(value);
    },
    //Recibe un objeto tarea, la extrae del array de tareas asignadas al usuario y la añade
    //al array de tareas .
    removeTareaUser(state,value){
      state.tareasUser.splice(state.tareasUser.findIndex(element => element.id == value.id),1);
      state.tareas.push(value);
    },
    //Recibe un login y actualiza el estado con los datos del usuario
    // que tiene ese login.   
    setStateLogin(state,value){
      let index = state.usuarios.findIndex(element => element.login==value);
      state.login=state.usuarios[index].login;
      state.nombre=state.usuarios[index].nombre;
      state.foto=state.usuarios[index].foto;
      state.mail=state.usuarios[index].mail;
      state.tareasUser=state.usuarios[index].tareasUser;
    }
  },
  actions: {
    getUsuarios(context) {
      fetch('https://randomuser.me/api/?results=20', { method: 'GET' })
        .then(response => response.json())
        .then(data => context.commit('setUsuarios',
          data.results.map(usuario => {
            return {
              login: usuario.login.username,
              nombre: usuario.name.title + '. ' + usuario.name.first + ' ' + usuario.name.last,
              mail: usuario.email,
              foto: usuario.picture.large,
              //lista de tareas asignadas al usuario
              tareasUser: []
            }
          }
          )
        )
        )
    },
    getTareas(context){
      fetch('https://jsonplaceholder.typicode.com/todos',{method: 'GET', cache: 'no-cache'})
      .then(respuesta => respuesta.json())
      .then(data => {
        context.commit('setTareas',data);

      })
    }

  }
})
