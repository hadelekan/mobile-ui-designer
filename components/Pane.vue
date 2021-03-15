<template>
  <div class="is-flex-grow-1 pane mb-1">
    <div class="is-flex pane-title p-2">
        <span>{{title}}</span>
        <span class="is-flex-grow-1"></span>
        <span @click="togglePanel"><b-icon :icon="open ? 'chevron-down ': 'chevron-up'"></b-icon></span>
    </div>
    <div :class="{'d-none': !open}">
        <slot/>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title'],
    data(){
      return{
        open:true,
      }
    },
    created(){
      console.log(this.title)
    },
    methods:{
      togglePanel(){
        this.open = !this.open
      }
    }
}
</script>

<style>
.pane{
  background: #2f2f2f;
  transition: .3s all;
}
.pane-title{
  background: rgb(44, 43, 43);
  color: whitesmoke;
}
</style>