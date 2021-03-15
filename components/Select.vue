<template>
  <b-field :label="config.label.text" class="py-2">
        <b-select :placeholder="config.input.placeholder" :icon="config.input.icon" :rounded="config.input.rounded">
            <option value="" v-for="(l, k) in config.input.list" :key="k">{{l.text}}</option>
        </b-select>
  </b-field>                
</template>

<script>
export default {
    props:['config']
}
</script>

<style>

</style>