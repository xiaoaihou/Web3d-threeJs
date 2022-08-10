<template>
  <div id="wrapper">
    <div @click="handleChange(index)" v-for="(type, index) in actionsTypes" :key="index">
      <button>{{type.name}}</button>
    </div>
    <character v-if="activeIndex == 0"/>
    <character1 v-if="activeIndex == 1"/>
    <womanWorkout  v-if="activeIndex == 2"/>
    <manDance v-if="activeIndex == 3" />
    <dragonGreeting v-if="activeIndex === 4" />
    <womanTextWalking v-if="activeIndex === 5" />
    <character3 v-if="activeIndex == 6"/>

      <!-- <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
        <Camera :position="{ z: 10 }" />
        <Scene>
          <womanWorkout />
        </Scene>
    </Renderer> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RendererPublicInterface } from '../export'
import womanWorkout from './woman_workout/index.vue'
import character from './character/index.vue'
import character1 from './character1/index.vue'
import character3 from './character3/index.vue'
import dragonGreeting from './dragon_greeting/index.vue'
import manDance from './man_dance/index.vue'
import womanTextWalking from './woman_text_walking/index.vue'

export default defineComponent({
  components: { character, character1, character3, womanWorkout, dragonGreeting, manDance, womanTextWalking },
  data() {
    return {
      actionsTypes: [
        { type: 'walking', name: '场景1' },
        { type: 'walking', name: 'character1' },
        { type: 'walking', name: '运动女孩' },
        { type: 'walking', name: '男人跳舞' },
        { type: 'walking', name: '恐龙打招呼' },
        { type: 'Pike', name: '女孩走路' },
        { type: 'Pike', name: 'character2' },
      ],
      activeIndex: 0
    }
  },
  methods: {
    handleChange(index: number) {
      this.activeIndex = index
    }
  }
})
</script>

<style>
body, html {
  margin: 0;
}
canvas {
  display: block;
}
</style>
