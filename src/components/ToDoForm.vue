<template>
       <v-card class="mx-auto"> 
        <v-form>
            <v-toolbar color="orange" dark>
                <v-toolbar-title>ADD A TODO</v-toolbar-title>
            </v-toolbar>
            <v-container>
                <v-row class="mx-auto">
                    <v-col cols="4">
                        <v-text-field label="ToDo"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-select label="Priority"></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-btn class="ma-2" color="orange darken-2" dark>
                            Add
                            <v-icon dark right>
                                    mdi-checkbox-marked-circle
                            </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>            
        </v-form>
       </v-card>
</template>

<script>
    export default {
        name: 'ToDoForm'
    }
</script>

<style scoped>

</style>