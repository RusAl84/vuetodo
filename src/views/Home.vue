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
        elevation="2"
    >Добавить</v-btn>.
    {{name}}
    {{priority}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      // items: [
      //   { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      //   { title: 'Photos', icon: 'mdi-image' },
      //   { title: 'About', icon: 'mdi-help-box' },
      // ],
      name: "",
      priority: "",
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
