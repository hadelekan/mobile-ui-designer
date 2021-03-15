<template>
  <div>
    <Header></Header>
    <section class="is-flex stage">
      <SideNav />
      <div class="is-flex-grow-1 is-flex" style="position:relative">
        <ProjectPanel />
        <LibraryPanel />
        <Panes :size="{width:275, height: 300}" title="Properties">
          <NavigationPane />
          <DevicePane />
          <StylePane />
          <ConfigPane />
          <ThemeRollerPane />
        </Panes>
        <Device class="m-auto" />
      </div>
    </section>
  </div>
</template>

<script>
import Device from '@/components/Device'
import LibraryPanel from '@/components/navigations/LibraryPanel'
import ProjectPanel from '@/components/navigations/ProjectPanel'
import SideNav from '@/components/navigations/SideNav'
import DevicePane from '@/components/panes/DevicePane'
import NavigationPane from '@/components/panes/NavigationPane'
import StylePane from '@/components/panes/StylePane'
import Panes from '@/components/Panes'
import ThemeRollerPane from '@/components/panes/ThemeRollerPane'
import ConfigPane from '@/components/panes/ConfigPane.vue'

export default {
  name: 'HomePage',
  layout: 'editor',
  components: {
    Device,
    Panes,
    DevicePane,
    NavigationPane,
    StylePane,
    LibraryPanel,
    ProjectPanel,
    SideNav,
    ThemeRollerPane,
    ConfigPane
  }
}

</script>
<style scoped>
  .stage{
    height: calc(100vh - 56px);
    position: relative;
  }
</style>