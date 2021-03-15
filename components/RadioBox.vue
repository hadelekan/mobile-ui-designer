<template>
   <b-radio v-model="radio"
        :name="config.input.name"
        native-value="config.input.value"
        class="py-2"
        >
        {{config.input.text}}
    </b-radio>
</template>

<script>
export default {
    props:['config'],
}
</script>

<style>

</style>