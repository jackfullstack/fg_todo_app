<template>
  <v-app id="FG_TODO_IT">
    <v-app-bar color="orange" app>
      <v-app-bar-title>FG_Todo_App</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <to-do-list></to-do-list>
    </v-main>
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'App',

  components: {
    ToDoList
  },

  data: () => ({
  }),
};
</script>
