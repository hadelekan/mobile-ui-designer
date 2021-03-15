<template>
    <div class="nav-panel line-r" :class="{'open': handle == 'open'}" :style="{width: handle == 'open' ? width + 'px' : 0 + 'px'}">
        <div :class="handle == 'open' ? 'open' : 'close'" >
            <slot>
                {{name}}
            </slot>
        </div>
    </div>
</template>
<script>
import $bus from '@/plugins/eventbus'
export default {
    props:['name', 'width', 'state'],
    created(){
        $bus.$on('nav-panel', this.navPanel)
    },
    data(){
        return{
            handle: this.state || 'close',
        }
    },
    watch:{
        handle(state){
            state == 'open' ? this.sidebarWidth = this.width : this.sidebarWidth = 0
        }
    },
    methods:{
        navPanel(data){
            if(data.name != this.name){
                return
            }
            if(data.action == 'open'){
                this.handle = "open"
                console.log('open')
            }else if(data.action == 'close'){
                this.handle = ""
            }else{
                this.handle == 'open' ? this.handle = 'close' : this.handle = 'open'
            }
        }
    }
}
</script>
<style scoped>
/* .nav-panel{
    background-color: #222729;
    width: 0px;
    transition: 0.3s all;
    opacity: 0;
} */
.nav-panel{
  position: fixed;
  background: #212121;
  height: 100%;
  width: 0px;
  transition: 0.3s all;
  z-index: 9999;
  overflow: hidden;
}
.open{
    transition: 0.3s all;
    opacity: 1;
}
</style>