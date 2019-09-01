<template>
  <div class="examples">
    example
    <ToolBar :value="5"></ToolBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToolBar from '../../packages/vue-test/src/components/ToolBar.vue'; // method 1

@Component({
  components: {
    ToolBar
  }
})
export default class Home extends Vue {}
</script>
