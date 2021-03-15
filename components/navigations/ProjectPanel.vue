<template>
  <SideNavPanel name="projectPanel" width="300">
    <b-tabs v-model="activeTab">
        <b-tab-item label="Project">
            <div v-for="(c,k) in $store.state.workspace.collections" :key="k" class="has-text-grey-light pointer">
              <b-icon icon="gamepad-circle" size="is-small" /> {{c.name}}
            </div>
        </b-tab-item>
        <b-tab-item label="Asset">

        </b-tab-item>
    </b-tabs>
  </SideNavPanel>
</template>

<script>
import SideNavPanel from '@/components/navigations/SideNavPanel'
export default {
    components:{
        SideNavPanel,
    },
    data(){
      return{
        tabs:['Project', 'Assets'],
        activeTab: 0
      }
    },
}
</script>

<style>

</style>