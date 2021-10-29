<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <v-text-field v-model="name"
        label="Regular"
    ></v-text-field>
    <v-text-field v-model="priority"
        label="Regular"
    ></v-text-field>
    <v-btn
        elevation="2" @click="onClick"
    >Добавить</v-btn>.
    {{name}}
    {{priority}}
  </div>
</template>

<script>
// @ is an alias to /src
import  API from "@/api/api.js"
import router from "@/router";

export default {
  name: 'Home',
  data () {
    return {
      // items: [
      //   { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      //   { title: 'Photos', icon: 'mdi-image' },
      //   { title: 'About', icon: 'mdi-help-box' },
      // ],
      name: 'test',
      priority: '0',
    }
  },
  methods: {
    async onClick() {
      try {
        await API.sendToDo(this.name, this.priority)
        router.push('/').catch(()=>{})
      } catch (e) {
        console.error(e)
      }
      // alert(store.state.authName)
    },
    async onLogoutClick() {
      try {
        await API.logout()
        router.push('/login').catch(()=>{})
      } catch (e) {
        console.error(e)
      }
      // alert(store.state.authName)
    },
  },
  components: {
    // HelloWorld
  }
}
</script>
