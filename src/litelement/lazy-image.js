import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { isInViewport } from '../common/utils';
import styles from '../common/lazy-image.css';

const cache = {};

class LazyImage extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      srcset: { type: String },
      alt: { type: String },
      emitter: { type: Object },
      isLoaded: { type: Boolean },
      isVisible: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.isVisible = false;
    this.isLoaded = false;
  }

  static get styles() {
    return css `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
      ${unsafeCSS(styles)}
    `;
  }

  onLoad() {
    cache[this.src] = true;
    this.isLoaded = true;
  }

  firstUpdated() {
    window.emitter = this.emitter;
    if (cache[this.src]) {
      this.isLoaded = true;
      this.isVisible = true;
    }

    if (this.isLoaded) {
      return;
    }

    const checkIsVisible = () => {
      if (isInViewport(this)) {
        this.emitter.off('viewportChange', checkIsVisible);
        this.isVisible = true;
      }
    }
    this.emitter.on('viewportChange', checkIsVisible);
    this._lazy_image_check = checkIsVisible;
    checkIsVisible();
  }

  render() {
    const srcset = this.srcset || '';
    const alt = this.alt || '';
    const img = html`
      <img
      class="lazy-image ${this.isLoaded ? 'is-loaded' : ''}"=
      src="${this.src}"
      srcset="${srcset}"
      alt="${alt}"
      @load="${this.onLoad}"
      />
    `;

    return html `
      <div data-masonry-image class="lazy-image-container ${this.isLoaded ? 'is-loaded' : ''}">
        ${this.isVisible ? img : ''}
      </div>
    `;
  }

  disconnectedCallback() {
    this.emitter.off('viewportChange', this._lazy_image_check);
    super.disconnectedCallback();
  }
}

customElements.define('lazy-image', LazyImage);
