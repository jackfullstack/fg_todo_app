<template>
  <v-app id="FG_TODO_IT">
    <v-app-bar color="orange" app>
      <v-app-bar-nav-icon>
        <v-icon>mdi-airballoon</v-icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title>Todo Bristol</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-card max-width="1000" class="mx-auto my-10 px-5" >
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card class="mt-12">
                <to-do-form ></to-do-form>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="my-12">
                <to-do-list :toDoList="toDoList"></to-do-list> 
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import ToDoForm from './components/ToDoForm.vue';
import ToDoList from './components/ToDoList.vue';

export default {
  name: 'App',

  components: {
    ToDoList,
    ToDoForm
  },

  data: () => ({
    toDoList : [{
      item_id: '1',
      item_title: 'Get a job at FG',
      item_priority: 'Life Changing **',
    },
    {
      item_id: '2',
      item_title: 'Get a job somewhere else',
      item_priority: 'Meh :/',
    },
    {
      item_id: '3',
      item_title: 'Get a job',
      item_priority: 'Important!',
    }]
  }),
};
</script>
