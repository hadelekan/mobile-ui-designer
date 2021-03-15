<template>
  <SideNavPanel name="libraryPanel" width="200">
    <div>Components</div>
      <draggable
        v-model="components"
        :group="{ name: 'editor', pull: 'clone', put: false }"
        class="toolbox"
      >
        <div v-for="(c,k) in components" :key="k" class="ui-control">{{c.name}}</div>
      </draggable>
  </SideNavPanel>
</template>

<script>
import SideNavPanel from '@/components/navigations/SideNavPanel'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
export default {
    components:{
        SideNavPanel,
        draggable
    },
    computed:{
      ...mapState({
        components: state => state.workspace.tools
      })
    }
}
</script>

<style>
.ui-control{
  padding: 4px 7px;
  margin: 5px 10px;
  background: #333333;
  color: #dedede;
  border-left: solid 2px;
  cursor: pointer;
}
</style>