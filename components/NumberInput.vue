<template>
  <b-field :label="config.label.text" :type="config.label.type" :message="config.label.errorMessage" class="py-2">
      <b-numberinput v-model="number" placeholder="config.input.placeholder" :min="config.input.min"></b-numberinput>
    </b-field>
</template>

<script>
export default {
    props:['config'],
    data() {
        return {
            number: 10,
            numberPlaceholder: undefined
        }
    }
}
</script>

<style>

</style>