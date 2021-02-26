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
                <v-card class="mx-auto">
                  <v-toolbar color="orange" dark>
                      <v-toolbar-title>YOUR TODOs</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                          <v-icon>mdi-delete-forever</v-icon>
                      </v-btn>
                  </v-toolbar>
                  <v-list>
                      <ul v-for="item in toDoList" :key="item.id">
                        <to-do-item
                          :id="item.id" :priority="item.priority" :title="item.title" 
                        ></to-do-item>
                      </ul>
                  </v-list>
                </v-card> 
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
import uniqueId from 'lodash.uniqueid';
import ToDoItem from './components/ToDoItem.vue';

export default {
  name: 'App',

  components: {
    ToDoForm,
    ToDoItem
  },
  methods: {
    addToDo(newTitle, newPriority) {
      this.toDoList.push({ id:uniqueId('todo-'), title: newTitle, priority: newPriority });
    }
  },

  data() {
    return {
      toDoList : [
          {
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
          }
      ]
    }
  },
};
</script>
