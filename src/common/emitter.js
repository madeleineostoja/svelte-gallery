import Emitter from 'tiny-emitter';
import { debounce } from './utils';

export default function() {
  const emitter = new Emitter();

  const debounced = debounce(() => {
    emitter.emit('viewportChange');
    if (!emitter.e.viewportChange) {
      emitter._unbind();
    }
  }, 50);

  emitter._bind = () => {
    window.addEventListener('scroll', debounced);
    window.addEventListener('resize', debounced);
  }

  emitter._unbind = () => {
    window.removeEventListener('scroll', debounced);
    window.removeEventListener('resize', debounced);
  }

  emitter._bind();

  return emitter;
}
