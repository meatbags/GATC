/** Scene */

class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    const geo = new THREE.BoxBufferGeometry(10, 1, 10);
    const mat = new THREE.MeshStandardMaterial({color: 0xffffff});
    const mesh = new THREE.Mesh(geo, mat);
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    const point = new THREE.PointLight(0xffffff, 0.25, 20, 2);
    point.position.set(0, 5, 0);
    this.scene.add(mesh, ambient, point);
  }

  getScene() {
    return this.scene;
  }
}

export default Scene;
