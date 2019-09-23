import { LitElement, html, css, unsafeCSS } from 'lit-element';
import createLayout from '../common/justified-layout';
import elementResizeEvent, { unbind } from 'element-resize-event';
import './lazy-image';
import styles from '../common/style.css';

class ImageMasonry extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      scaledImages: { type: Array },
      width: { type: Number },
      padding: { type: Number },
      targetRowHeight: { type: Number },
      imageTemplate: { type: Function },
      imageStyle: { type: String }
    };
  }

  constructor() {
    super();
    this.scaledImages = [];
    this.width = 0;
    this.targetRowHeight = 220;
    this.padding = 4;
  }

  static get styles() {
    return css `
      :host {
        display: block;
      }
      ${unsafeCSS(styles)}
    `;
  }

  firstUpdated() {
    const process = () => {
      this.width = this.getBoundingClientRect().width;
      this.scaledImages = createLayout({
        images: this.images,
        containerWidth: this.width,
        targetHeight: this.targetRowHeight,
        padding: this.padding
      });
    }
    elementResizeEvent(this.shadowRoot.querySelector('.image-masonry'), () => {
      if (Math.round(this.width) !== Math.round(this.getBoundingClientRect().width)) {
        process();
      }
    });
    process();
  }

  updated(changedProperties) {
    if (changedProperties.get('images') || changedProperties.get('targetRowHeight')) {
      this.scaledImages = createLayout({
        images: this.images,
        containerWidth: this.width,
        targetHeight: this.targetRowHeight,
        padding: this.padding
      });
    }
  }

  makeStyle({ scaledWidth, scaledHeight }) {
    return `width:${scaledWidth}px; height:${scaledHeight}px;margin-right:${this.padding}px`
  }

  handleClick(index, event) {
    const e = new CustomEvent('image-click', {
      detail: {
        index,
        event,
        image: this.images[index]
      }
    });
    this.dispatchEvent(e);
  }

  render() {
    const rowStyle = `margin-bottom: ${this.padding}px`;

    return html `
      ${this.imageStyle ?  html`<style>${this.imageStyle}</style>` : ''}
      <div class="image-masonry">
        ${this.scaledImages.map(row => html`
          <div class="masonry-row" style="${rowStyle}">
          ${row.map(image => html`
            <div class="masonry-item" style="${this.makeStyle(image)}" @click="${e => this.handleClick(image.index, e)}">
              <lazy-image .src="${image.src}" .srcset="${image.srcset}" .alt="${image.alt}"></lazy-image>
              ${this.imageTemplate && this.imageTemplate(image)}
            </div>
          `)}
          </div>
        `)}
      </div>
    `;
  }

  disconnectedCallback() {
    const el = this.shadowRoot.querySelector('.image-masonry');
    if (el) {
      unbind(el);
    }
    super.disconnectedCallback();
  }
}

customElements.define('image-masonry', ImageMasonry);
