<template lang="pug">
  #canvas(ref="canvas")
</template>

<script>
import * as THREE from 'three'

export default {
  data() {
    return {
      width: null,
      height: null,
      scene: null,
      camera: null,
      mouseX: 0.0,
      mouseY: 0.0,
      scrollY: 0,
      mesh: null,
      object: null,
      renderer: null,
      started: false
    }
  },
  mounted() {
    this.init()
    this.configScene()
    this.positionCamera()
    this.setObject()
    this.bindWindowEvents()
    this.appendElement()
    this.startScene()
  },
  methods: {
    init() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        50,
        this.width / this.height,
        1,
        1000
      )
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      this.renderer.setClearColor(0xF8EE0A, 1)
      this.renderer.setSize(this.width, this.height)
      this.object = new THREE.Object3D()
      this.scene.add(this.object)
    },
    configScene() {
      const light = new THREE.AmbientLight(0xffffff0)
      this.scene.add(light)
    },
    positionCamera() {
      this.camera.position.set(0, 0, 30)
    },
    // 処理
    setObject() {
      const geometry = new THREE.TetrahedronGeometry(20)
      const group = new THREE.Group()
      for (let i = 0; i < 100; i++) {
        const material = new THREE.MeshNormalMaterial()
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.x = Math.random()
				this.mesh.position.y = Math.random()
				this.mesh.position.z = Math.random()
        this.mesh.rotation.x = Math.random() * 20 * Math.PI
        // 後半
        // this.mesh.rotation.y = Math.random() * 0.001 * Math.PI
        if (this.scrollY) {
          this.mesh.rotation.y = Math.random() * 2 * Math.PI
        }
        group.add(this.mesh)
      }
      this.object.add(group)
    },
    bindWindowEvents() {
      window.addEventListener('resize', this.handleWindowResize, false)
      document.addEventListener('mousemove', this.onDocumentMouseMove, false)
    },
    handleWindowResize() {
      this.camera.aspect = this.width / this.height
    },
    onDocumentMouseMove( event ) {
			this.mouseX = ( event.clientX - this.width/2 ) * 10
			this.mouseY = ( event.clientY - this.height/2 ) * 10
		},
    appendElement() {
      this.$refs.canvas.appendChild(this.renderer.domElement)
    },
    startScene() {
      if (this.started) return
      this.renderScene()
      this.started = !this.started
    },
    renderScene() {
      requestAnimationFrame(this.renderScene)
      this.renderer.render(this.scene, this.camera)
      this.camera.updateProjectionMatrix()
      this.object.rotation.x -= (this.mouseY - this.object.rotation.y) * 0.0000006
      this.object.rotation.x -= (this.mouseX - this.object.rotation.x) * 0.00000006
      this.renderer.setSize(this.width, this.height)
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
