<template>
  <b-image class="my-2"
        :src="config.input.src ? config.input.src : 'https://picsum.photos/id/1074/800/400'"
        :placeholder="config.input.placeholder ? config.input.placeholder  : config.input.src"
        ratio="2by1"
    ></b-image>
</template>

<script>
export default {
    props:['config']
}
</script>

<style>

</style>