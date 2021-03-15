<template>
  <div class="is-flex is-flex-direction-column panels has-background-grey-dark" :style="{width: size.width + 'px', minHeight: size.height + 'px'}">
    <div class="panel-tag">{{title}}</div>
      <slot />
  </div>
</template>

<script>
export default {
  props:['size', 'title'],
}
</script>

<style scoped>
.panels{
  position: absolute;
  border: solid 1px rgb(61, 61, 61);
  right: 0;
}
.panel-tag{
  color: rgb(219, 219, 219);
  padding: 1px 3px;
  cursor: move;
}
</style>