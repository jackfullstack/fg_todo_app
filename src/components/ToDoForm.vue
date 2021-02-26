<template>
       <v-card class="mx-auto"> 
        <v-form @submit.prevent="onSubmit" ref="form">
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
                        <v-btn type="button" class="ma-2" color="orange darken-2" @click="clearForm" dark>
                            clear
                            <v-icon dark right>
                                    mdi-minus-circle
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
            resetValidation () {
                this.$refs.form.resetValidation()   
            },
            validate () {
                this.$refs.form.validate()
            },
            clearForm () {
                this.newTitle = "";
                this.newPriority = "";
                this.resetValidation();
            },
            onSubmit() {
                if(this.newTitle === "" || this.newPriority === "") {
                    alert("Oops! Fields can't be blank, how will you know what todo?")
                    return;
                }
                if(this.newTitle.length > 100) {
                    alert("Oops! 100 words max!")
                    return;
                }
                this.$emit('todo-added', this.newTitle,  this.newPriority);
                this.clearForm();   
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
                    v => v.length <= 100 || 'Length should be less than 100 characters'
                ],
                priorityRules: [
                    v => !!v || 'Priority selection is required',    
                ]
            }
        }
    }
</script>

<style scoped>

</style>