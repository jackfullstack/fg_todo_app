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
                <to-do-form @todo-added="addToDo" @delete-item="deleteSingleItem(item.id)"></to-do-form>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="my-12">
                <to-do-list :toDoList="toDoList" ></to-do-list> 
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
import uniqueId from 'lodash.uniqueid';

export default {
  name: 'App',

  components: {
    ToDoList,
    ToDoForm
  },
  methods: {
    addToDo(newTitle, newPriority) {
      this.toDoList.push({ id:uniqueId('todo-'), title: newTitle, priority: newPriority });
    },
    deleteSingleItem(toDoId) {
      const itemIndex = this.toDoList.find(item => item.id === toDoId);
      this.toDoList.splice(itemIndex, 1);
    },
  },

  data() {
    return {
      toDoList : [{
      id: '1',
      title: 'Get a job at FG',
      priority: 'Life Changing **',
    },
    {
      id: '2',
      title: 'Get a job somewhere else',
      priority: 'Meh :/',
    },
    {
      id: '3',
      title: 'Get a job',
      priority: 'Important!',
    }]
    }
  },
};
</script>
