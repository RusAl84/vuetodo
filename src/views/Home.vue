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
    {{lastID}}
    <!-- Панель сообщений -->
    <v-card-text>
      <div class="messages-view">
        <div v-for="(todo, i) in toDoS" :key="i">
          <span >{{ todo.name }}</span>
          <span>{{ todo.priority }}</span>

        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script>
// @ is an alias to /src
import  API from "@/api/api.js"
import router from "@/router";

export default {
  // Модель данных страницы
  name: 'Home',
  data () {
    return {
      toDoS: [],
      name: 'test',
      priority: '0',
      intervalCtx: null,
      lastID: 0,
    }
  },

  // Хук который сработает когда страница создасться
  mounted() {

    this.intervalCtx = setInterval(async () => {
      try {
        const msg = await API.getToDo(this.lastID)
        if ( 'name' in msg) {
          this.toDoS.push(msg)
          this.lastID++
        }
        else
        {
          console.log(this.lastID)
        }
      } catch (e) {
        console.error(e)
      }
    }, 100)
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
  },
  // После уничтожения компонента
  destroyed() {
    clearInterval(this.intervalCtx)
  },
  components: {
    // HelloWorld
  }
}
</script>
