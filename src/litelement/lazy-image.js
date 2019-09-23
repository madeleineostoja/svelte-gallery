import { LitElement, html, css, unsafeCSS } from 'lit-element';
import whenElementVisible from '../common/when-element-visible';
import styles from '../common/lazy-image.css';

const cache = {};

class LazyImage extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      srcset: { type: String },
      alt: { type: String },
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
    if (cache[this.src]) {
      this.isLoaded = true;
      this.isVisible = true;
    }

    if (this.isLoaded) {
      return;
    }

    this._observer_disconnect = whenElementVisible(this, () => {
      this.isVisible = true;
    });
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
    this._observer_disconnect && this._observer_disconnect();
    super.disconnectedCallback();
  }
}

customElements.define('lazy-image', LazyImage);
