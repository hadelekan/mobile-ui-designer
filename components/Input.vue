<template>
    <b-field :label="config.label.text" :type="config.label.type" :message="config.label.errorMessage" class="py-2">
        <b-input v-model="name" 
        :placeholder="config.input.placeholder" 
        :type="config.input.type" 
        :password-reveal="config.input.showPassword" 
        :maxlength="config.input.maxlength"
        :icon="config.input.icon"
        :size="config.input.size"
        :minlength="config.input.minlength"
        >
        </b-input>
    </b-field>
</template>

<script>
export default {
    props:['config'],
    data(){
        return{
            name:''
        }
    }
}
</script>

<style>

</style>