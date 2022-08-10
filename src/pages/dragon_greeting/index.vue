
<template>
  <div id="container">
      action: <span @click="handleAction(action)" v-for="(action, index) in actionsControls" :key="index">
        <button>{{action.name}}</button>
      </span>
      <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
      <Camera :position="{ x: 1, y: 2, z: 5 }" />
      <Scene :background="background">
        <PointLight :position="{ y: 50, z: 50, x: 30 }" />
        <GltfModel ref="box" @onLoad="onLoad" src="src/characterModels/gltf/charman5/scene.gltf" />
      </Scene>
    </Renderer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Camera, PointLight, Renderer, RendererPublicInterface, Scene, GltfModel } from '../../export'
import { AnimationMixer, Clock, WebGLRenderer, Camera as Camera1 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default defineComponent({
  name: 'womanWorkout',
  components: { Camera, GltfModel, PointLight, Renderer, Scene },
  data() {
    return {
      actionsControls: [
        { type: 'greeting', name: '打招呼' },
      ],
      animations: {},
      activeAction: null,
      previousAction: null,
      mixer: null,
      actions: [],
      model: {},
      controls: {},
      renderer: null,
      background: '#f1f1f1',
      clock: new Clock(),
      timer: null
      // color: '0xffffff',
      // intensity: 1
    }
  },
  mounted() {
    this.renderer = this.$refs.renderer as RendererPublicInterface
    this.renderer.onBeforeRender(() => {
      this.animate()
    })
  },
  methods: {
    handleAction(item: any) {
      this.controls[item.type] = true
      this.timer = setTimeout(() => {
        this.controls[item.type] = false
      }, 200)
    },
    onLoad(model: any) {
      this.model = model
      this.animations = model.animations
      this.createAnimate()
      const renderer = new WebGLRenderer({ antialias: true })
      const camera = new Camera1()
      this.controls = new OrbitControls(camera, renderer.domElement)
      this.controls.update()
      
    },
    createAnimate() {
      this.mixer = new AnimationMixer(this.model.scene)
      
      console.log('mixer', this.mixer)
      for (let i = 0; i < this.animations.length; i++) {
        const clip = this.animations[i]
        const action = this.mixer.clipAction(clip)
        this.actions[clip.name] = action
      }
      console.log('this.activeAction', this.actions)
      this.activeAction = null
    },
    animate() {
        if (this.mixer) this.mixer.update(this.clock.getDelta())
      if (this.controls.greeting) this.fadeToAction('greeting', 0.5)
    },
    fadeToAction(name: string, duration: number) {
      this.previousAction = this.activeAction
      this.activeAction = this.actions[name]
      if (this.previousAction != null) {
      if (this.previousAction !== this.activeAction) {
        this.previousAction.fadeOut(duration)
      }
      }
    if(this.activeAction) {
        this.activeAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(duration)
        .play()
    }
    }
  },
  unmounted() {
    // this.model && this.model.dispose()
    // this.renderer && this.renderer.dispose()
    // this.mixer && this.mixer.dispose()
    // this.timer && clearTimeout(this.timer)
    
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
