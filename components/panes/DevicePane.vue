<template>
  <Pane title="Device" class="has-text-grey-light">
    <div class="px-4 py-2 is-flex is-align-items-flex" @click="changeOrientation">
      <span class="pointer">
        <b-icon :icon="orientation == 'portrait' ? 'phone-rotate-landscape' : 'phone-rotate-portrait'"></b-icon>
      </span>
      <span class="is-flex-grow-1"></span>
      <span>{{selectedDevice.name}} - <span class="capitalize">{{orientation}}</span></span>
    </div>
    <div class="is-flex is-justify-content-center">
      <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center px-1 px-4 mx-3">
        <span class="flaticon-smartphone fs-15"></span>
        <span class="has-text-grey-lighter">iOS</span>
      </div>
      <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center px-1 px-4 mx-3">
        <span class="flaticon-mobile-phone fs-15"></span>
        <span class="has-text-grey-lighter">Android</span>
      </div>    
    </div>
    <div class="px-2 mt-2">
      <Dropdown :list="device" @input="selectDevice" />
    </div>
    <div class="p-2 is-flex has-text-grey-light">
      <span class="is-flex-grow-1">W</span>
      <span class="is-flex-grow-2">{{selectedDevice.width}}</span>
      <span class="is-flex-grow-1">H</span>
      <span class="is-flex-grow-2">{{selectedDevice.height}}</span>
    </div>
  </Pane>
</template>

<script>
import Pane from '../Pane'
import Dropdown from '../Dropdown'
import { mapState } from 'vuex'
export default {
    components:{
        Pane,
        Dropdown
    },
    computed:{
      ...mapState({
        device: state => state.device.list,
        selectedDevice: state => state.device.selectedDevice,
        orientation: state => state.device.orientation
      }),
    },

    methods:{
      selectDevice(selection){
        this.$store.commit('device/selectDevice', selection)   
      },
      changeOrientation(){
        this.$store.commit('device/changeDeviceOrientation', 'toggle')
      }
    }
}
</script>

<style>
.fs-15::before{
  font-size: 45px;
  margin:0px;
  color: whitesmoke;
  cursor: pointer;
}
.fs-15:hover::before{
  color: #d1e5fd;
}

</style>