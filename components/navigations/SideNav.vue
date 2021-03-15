<template>
    <aside id="sidenav" class="dark-sidebar">
      <p class="menu-label is-hidden-touch has-text-centered pt-2">
          View
        </p>
        <div @click="triggerNavPanel('projectPanel')">
          <SideNavButton icon="file" label="Project" size="mdi-36px" />
        </div>
        <div @click="triggerNavPanel('libraryPanel')">
          <SideNavButton icon="view-grid" label="Library" size="mdi-36px" />
        </div>
    </aside>
</template>
<script>
import $bus from "@/plugins/eventbus"
import SideNavButton from './SideNavButton'
export default {
  components:{
    SideNavButton,
  },
    methods:{
        triggerNavPanel(name){
            $bus.$emit('nav-panel', {name, action: 'toggle'})
        }
    }
}
</script>
<style scoped>
.dark-sidebar{
    background: #292d31;
}
</style>