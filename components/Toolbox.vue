<template>
  <div>
    <div class="toolbox">
      <draggable
        v-model="tools"
        :group="{ name: 'people', pull: 'clone', put: false }"
        class="toolbox"
      >
        <span class="btn" v-for="(t, k) in tools" :key="k">{{ t.slug }}</span>
      </draggable>
    </div>
   
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      tools: [
        { name: "Button", label: "button-a", slug: "btn" },
        { name: "Input", label: "button-b", slug: "inp" },
        { name: "Switch", label: "button-c", slug: "swt" },
      ],
    };
  },
  methods:{
    selectedControl(k){
      console.log(this.list[k])
    }
  }
};
</script>

<style>
.device {
  width: 300px;
  height: 500px;
  border: solid 1px grey;
  display: flex;
  margin: 0 auto;
}
.item {
  padding: 5px;
  margin: 5px 3px;
  border: solid 1px grey;
  background: white;
}
.viewport {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
}
.toolbox {
  display: flex;
  flex-direction: column;
  position: absolute;
  border: solid 1px gray;
  padding: 2px;
}
.toolbox span {
  padding: 10px;
  border: solid 1px grey;
  margin: 3px;
  background: rgb(241, 241, 241);
}
</style>