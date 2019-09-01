<template>
  <div class="tool-bar-contrainer">
    <a @click="add">+</a>
    <a @click='subtract'>-</a>
    value:{{ value }} object:{{ obj }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mergeObjectOptions } from "@lerna-test/utils-test/src/utils/objectUtils";

@Component
export default class ToolBar extends Vue {
  @Prop() private initValue!: number;
  private value!: number;
  private obj!: object;

  data() {
    return {
      value: 0,
      obj: {}
    };
  }

  add() {
    this.value++;
  }

  subtract() {
    this.value--;
  }

  mounted() {
    let a = "abc";
    this.obj = mergeObjectOptions(
      { name: "wu", age: 18 },
      { name: "li", tall: 180 }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
