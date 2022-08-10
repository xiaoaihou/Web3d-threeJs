import { defineComponent } from 'vue'
// import { ColladaLoader } from 'three/examples/js/loaders/ColladaLoader.js'
import { ColladaLoader } from '@/core/ColladaLoader.js'
import Model from './Model'

export default defineComponent({
  extends: Model,
  props: ['activeIndex'],
  created() {
    const loader = new ColladaLoader()
    this.$emit('beforeLoad', loader)
    loader.load(this.src, (gltf) => {
      console.log('gltf', gltf.scene)
      this.onLoad(gltf)
      this.$emit('onLoad', gltf)

      this.initObject3D(gltf.scene)
    }, this.onProgress, this.onError)
  },
})
