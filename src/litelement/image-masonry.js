import { LitElement, html, css } from 'lit-element';
import createLayout from '../common/justified-layout';
import elementResizeEvent, { unbind } from 'element-resize-event';

class ImageMasonry extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      scaledImages: { type: Array },
      width: { type: Number },
      targetRowHeight: { type: Number }
    };
  }

  constructor() {
    super();
    this.scaledImages = [];
    this.width = 0;
    this.targetRowHeight = 220;
  }

  static get styles() {
    return css `
      :host {
        display: block;
      }

      .image-masonry {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
      }

      .image-masonry-item {
        box-sizing: border-box;
        padding: 1px;
      }

      .image-masonry-item img {
        display: block;
        width: 100%;
        height: 100%;
      }
    `;
  }

  firstUpdated() {
    const process = () => {
      this.width = this.getBoundingClientRect().width;
      this.scaledImages = createLayout(this.images, this.width, this.targetRowHeight);
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
      this.scaledImages = createLayout(this.images, this.width, this.targetRowHeight);
    }
  }

  makeStyle({ scaledWidthPc, scaledHeight }) {
    return `width:${scaledWidthPc}%; height:${scaledHeight}px;`
  }

  render() {
    return html `
      <div class="image-masonry">
        ${this.scaledImages.map(image => html`
          <div class="image-masonry-item" style="${this.makeStyle(image)}">
            <img src="${image.src}" alt="${image.alt || ''}" />
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define('image-masonry', ImageMasonry);
