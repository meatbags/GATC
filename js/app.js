/** App */

import Camera from './modules/camera';
import Renderer from './modules/renderer';
import Scene from './modules/scene';

class App {
  constructor() {
    this.modules = {
      camera: new Camera(),
      renderer: new Renderer(),
      scene: new Scene(),
    };
    this.call('bind', this);
    window.addEventListener('resize', () => { this.call('resize', null); });
    this.active = true;
    this.time = (new Date()).getTime();
    this.loop();
  }

  call(func, arg) {
    for (const key in this.modules) {
      const module = this.modules[key];
      if (module[func] !== undefined) {
        module[func](arg);
      }
    }
  }

  loop() {
    requestAnimationFrame(() => { this.loop(); });
    if (this.active) {
      const t = (new Date()).getTime();
      const dt = Math.min(0.1, (t - this.time) / 1000);
      this.time = t;
      this.call('update', dt);
      this.call('render', dt);
    }
  }
}

window.onload = () => {
  const app = new App();
};
