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
                <to-do-form @todo-added="addToDo"></to-do-form>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="my-12">
                <v-card class="mx-auto">
                  <v-toolbar color="orange" dark>
                      <v-toolbar-title>YOUR TODOs</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="clearToDoList">
                          <v-icon>mdi-delete-forever</v-icon>
                      </v-btn>
                  </v-toolbar>
                  <v-list>
                      <ul v-for="item in toDoList" :key="item.id">
                        <to-do-item
                          :id="item.id" :priority="item.priority" :title="item.title" 
                          @item-deleted="deleteToDo(item.id)"
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
  data() {
    return {
      toDoList : [
        { id:uniqueId('todo-'), title: 'Go to the Amsterdam Vue convention', priority: 'Important!' },
        { id:uniqueId('todo-'), title: 'Refactor code', priority: 'Important!' },
        { id:uniqueId('todo-'), title: 'Have a beer, it is Friday', priority: 'Important!' },
        { id:uniqueId('todo-'), title: 'Do the washing-up', priority: 'Meh :(' },
        { id:uniqueId('todo-'), title: 'Get a job at Forge Rock', priority: 'Life Changing!!' }
      ]
    }
  },
  methods: {
    addToDo(newTitle, newPriority) {
      this.toDoList.push({ id:uniqueId('todo-'), title: newTitle, priority: newPriority });
    },
    deleteToDo(toDoId) {
      const itemIndex = this.toDoList.findIndex(item => item.id === toDoId);
      this.toDoList.splice(itemIndex, 1);
    },
    clearToDoList() {
      this.toDoList = [];
    }
  },
};
</script>
