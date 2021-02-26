<template>
    <div>
        <v-list-item> 
            <v-list-item-avatar>
                            <v-icon>
                                mdi-alarm-light-outline
                            </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ priority }}</v-list-item-subtitle>
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
            id: {
                type: String,
                required: true
            },
            title:  {   
                type: String,
                required: true
            },
            priority: {
                    type: String,
                    required: true
            }
        },
    }
</script>

<style scoped>

</style>