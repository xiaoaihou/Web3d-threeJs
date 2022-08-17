import { defineComponent, watch } from 'vue'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js'
import { Mesh } from 'three/src/objects/Mesh.js'
import { Vector2 } from 'three/src/math/Vector2.js'
import Model from './Model'
import sizeof from 'object-sizeof'
// import { indexDBStore } from 'indexdb-store'
// const store = indexDBStore.createStore('WDB', 'myStore', {
//   version: 1,
//   onupgradeHandler: (store, request, event) => {
//     store.createIndex('IdIndex', 'id', { unique: true })
//     console.log(request, event)
//   },
// })


export default defineComponent({
  extends: Model,
  created() {
    const loader = new GLTFLoader()
    this.$emit('beforeLoad', loader)
    loader.load(this.src, (gltf) => {
      console.log('glt => f', gltf)
      this.onLoad(gltf)
      this.$emit('onLoad', gltf)

      this.initObject3D(gltf.scene)
    }, this.onProgress, this.onError)
  },
  watch: {
    
  }
})
