/** Camera */

class Camera {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000000);
    this.camera.up = new THREE.Vector3(0, 1, 0);
    this.camera.rotation.order = 'YXZ';
    this.camera.position.set(0, 10, 0);
    this.camera.lookAt(new THREE.Vector3());
  }

  bind(root) {
    this.ref = {};
    this.resize();
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  getCamera() {
    return this.camera;
  }
}

export default Camera;
