<template>
  <b-field :label="config.label.text" class="py-2">
        <b-autocomplete
            :rounded="config.input.rounded"
            v-model="name"
            :data="filteredDataArray"
            :placeholder="config.input.placeholder"
            icon="config.input.icon"
            :clearable="config.input.clearable"
            @select="option => selected = option">
            <template #empty>{{config.input.errorMessage ? config.input.errorMessage : 'No results'}}</template>
        </b-autocomplete>
    </b-field>
</template>

<script>
export default {
    props:['config'],
    data(){
        return{
            name:''
        }
    },
    computed: {
        filteredDataArray() {
            return this.config.input.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    }
}
</script>

<style>

</style>