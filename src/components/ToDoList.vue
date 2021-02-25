<template>
    <v-card class="mx-auto">
        <v-toolbar color="orange" dark>
            <v-toolbar-title>YOUR TODOs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-delete-forever</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list>
            <to-do-item  :toDoList="toDoList"></to-do-item>
        </v-list>
    </v-card>
</template>

<script>
import ToDoItem from './ToDoItem.vue'
    export default {
        name: 'ToDoList',
        components: { ToDoItem },
        props: {
            toDoList: {
                required: true,
                type: Array
            }
        }

    }
</script>

<style scoped>

</style>