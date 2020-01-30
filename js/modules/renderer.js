/** Renderer */

class Renderer {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({});
    this.renderer.setClearColor(0x555666, 1);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.125;
    document.querySelector('#canvas-target').appendChild(this.renderer.domElement);
    this.resize();
  }

  bind(root) {
    this.ref = {};
    this.ref.scene = root.modules.scene.getScene();
    this.ref.camera = root.modules.camera.getCamera();
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.ref.scene, this.ref.camera);
  }
}

export default Renderer;
