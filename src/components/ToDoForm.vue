<template>
       <v-card class="mx-auto"> 
        <v-form @submit.prevent="onSubmit">
            <v-toolbar color="orange" dark>
                <v-toolbar-title>ADD A TODO</v-toolbar-title>
            </v-toolbar>
            <v-container>
                <v-row class="mx-auto">
                    <v-col cols="4">
                        <v-text-field label="TODO" v-model.lazy.trim="newTitle" :rules="titleRules" required></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-select label="Priority" :items="items" v-model="newPriority" :rules="priorityRules" required></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-btn type="submit" class="ma-2" color="orange darken-2" dark>
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
        name: 'ToDoForm',
        methods: {
            onSubmit() {
                if(this.newTitle === "") {
                    return;
                }
                if(this.newPriority === "") {
                    return;
                }
                this.$emit('todo-added', this.newTitle,  this.newPriority);
                this.newTitle = "";
                this.newPriority = "";    
            }
        },
        data() {
            return {
                newTitle: '',
                newPriority: '',
                items: [
                    'Life Changing!!',
                    'Important!',
                    'Meh :(',
                ],
                titleRules: [
                    v => !!v || 'TODO description is required',
                    v => v.length <= 100 || 'Length should be less than 100 characters',
                ],
                priorityRules: [
                    v => !!v || 'Priority selection is required',
                    
                ],
            }
        },
    }
</script>

<style scoped>

</style>