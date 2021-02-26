<template>
    <div>
        <v-list-item v-for="item in toDoList" :key="item.id">
                <v-list-item-avatar>
                    <v-icon>
                        mdi-alarm-light-outline
                    </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.priority }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon>mdi-circle-edit-outline</v-icon>
                    </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                    <v-btn icon >
                        <v-icon>mdi-delete-circle</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
    </div>
</template>

<script>
    export default {
        name: 'ToDoItem',
        props: {
            toDoList: {
                required: true,
                type: Array
            }
        },
    }
</script>

<style scoped>

</style>