<template>
    <div>
        <v-list-item>
                <v-list-item-avatar>
                    <v-icon>
                        mdi-alarm-light-outline
                    </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Get a job at Forge Rock</v-list-item-title>
                    <v-list-item-subtitle>Life Changing</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon>mdi-circle-edit-outline</v-icon>
                    </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon>mdi-delete-circle</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
    </div>
</template>

<script>
    export default {
        name: 'ToDoItem'
    }
</script>

<style scoped>

</style>