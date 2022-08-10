import { App, createApp as _createAppp } from 'vue'
import * as Core from './index'
// import * as womanWorkout from './pages/woman_workout'
// import { womanWorkout } from '@/pages/womanWorkout'

export const web3DJSVuePlugin = {
  install(app: App): void {
    const comps = [
      // womanWorkout,
      'Camera',
      'OrthographicCamera',
      'PerspectiveCamera',
      'Raycaster',
      'Renderer',
      'Scene',
      'Group',

      'CubeCamera',

      'AmbientLight',
      'DirectionalLight',
      'HemisphereLight',
      'PointLight',
      'RectAreaLight',
      'SpotLight',

      'BasicMaterial',
      'LambertMaterial',
      'MatcapMaterial',
      'PhongMaterial',
      'PhysicalMaterial',
      'PointsMaterial',
      'ShaderMaterial',
      'StandardMaterial',
      'SubSurfaceMaterial',
      'ToonMaterial',

      'Texture',
      'CubeTexture',

      'BufferGeometry',

      'Mesh',

      'Box', 'BoxGeometry',
      'Circle', 'CircleGeometry',
      'Cone', 'ConeGeometry',
      'Cylinder', 'CylinderGeometry',
      'Dodecahedron', 'DodecahedronGeometry',
      'Icosahedron', 'IcosahedronGeometry',
      'Lathe', 'LatheGeometry',
      'Octahedron', 'OctahedronGeometry',
      'Plane', 'PlaneGeometry',
      'Polyhedron', 'PolyhedronGeometry',
      'Ring', 'RingGeometry',
      'Sphere', 'SphereGeometry',
      'Tetrahedron', 'TetrahedronGeometry',
      'Text',
      'Torus', 'TorusGeometry',
      'TorusKnot', 'TorusKnotGeometry',
      'Tube', 'TubeGeometry',

      'Image',
      'InstancedMesh',
      'Points',
      'Sprite',

      'FbxModel',
      'GltfModel',
      'ColladaModel',

      'BokehPass',
      'EffectComposer',
      'FilmPass',
      'FXAAPass',
      'HalftonePass',
      'RenderPass',
      'SAOPass',
      'SMAAPass',
      'SSAOPass',
      'TiltShiftPass',
      'UnrealBloomPass',
      'ZoomBlurPass',
    ]

    comps.forEach(comp => {
      // @ts-ignore
      app.component(comp, Core[comp])
    })
  },
}

export function createApp(params: any): App {
  return _createAppp(params).use(web3DJSVuePlugin)
}
