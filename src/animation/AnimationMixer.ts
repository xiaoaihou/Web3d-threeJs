import { defineComponent } from 'vue'
import { AnimationMixer } from 'three'

export default defineComponent({
  name: 'AnimationMixer',
  props: {
    // props: { model },
  },
  setup() {
    return {
      // group: new AnimationMixer(),
    }
  },
  created() {
    // const loader = new AnimationMixer(model)
    // this.$emit('before-load', loader)
    // loader.load(this.src, (fbx) => {
    //   this.onLoad(fbx)
    //   this.initObject3D(fbx)
    // }, this.onProgress, this.onError)
  },
  // render() {
  //   return this.$slots.default ? this.$slots.default() : []
  // },
  // created() {
  //   this.initObject3D(this.group)
  // },
  __hmrId: 'Group',
})



// export default defineComponent({
//   // TODO: eventually extend Object3D
//   // extends: Object3D,

//   props: {
//     props: { type: Object, default: () => ({}) },
//   },

//   // inject: { renderer: RendererInjectionKey as symbol },

//   // setup(): CameraSetupInterface {
//   //   return {}
//   // },

//   render() {
//     return this.$slots.default ? this.$slots.default() : []
//   },
// })

// export function cameraSetProp(camera: any, key: string, value: any, updateProjectionMatrix = true) {
//   camera[key] = value
//   if (updateProjectionMatrix) camera.updateProjectionMatrix()
// }