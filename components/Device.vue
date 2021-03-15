<template>
  <div class="device py-2" :style="{width: selectedDevice.width + 'px', height:selectedDevice.height + 'px'}">
      <div class="is-flex-grow-1 is-flex p-2">
          <draggable v-model="collections" group="editor" class="viewport is-flex-direction-column is-flex is-flex-grow-1">
              <div v-for="(l, k) in collections" :key="k"   @click="selectControl(k, l.config)"  @contextmenu="contextMenu($event)">
                    <component :is="l.name" :config="l.config" class="item">
                    </component>
              </div>
        </draggable>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import draggable from 'vuedraggable'
export default {
    components:{
        draggable,
    },
    computed: {
        ...mapState({
            deviceListing: state => state.device.list,
            selectedDevice: state => state.device.selectedDevice,
        }),
    },
    data(){
        return{
            collections:[]
        }
    },
    created(){
        this.$store.commit('device/selectDevice', this.deviceListing[0])
    },
    watch:{
        collections(data){
            this.$store.commit('workspace/collectionOverride', data)
        }
    },
    methods:{
        selectControl(index,control){
            this.$store.commit('workspace/activateControl', {index, control})
        },
        contextMenu(e){
            e.preventDefault();
            console.log(e, 'event from device')
        }
    }
};

</script>

<style>
.device{
    border:solid 1px rgb(77, 74, 74);
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    transition: .3s all;
    overflow-y: scroll;
    background-color:  rgb(248, 248, 248);
}
.viewport{
    /* flex: 1 */
}

</style>