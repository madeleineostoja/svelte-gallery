import { LitElement, html, css, unsafeCSS } from 'lit-element';
import createLayout from '../common/justified-layout';
import elementResizeEvent, { unbind } from 'element-resize-event';
import styles from '../common/style.css';

class ImageMasonry extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      scaledImages: { type: Array },
      width: { type: Number },
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
    return html `
      ${this.imageStyle ?  html`<style>${this.imageStyle}</style>` : ''}
      <div class="image-masonry">
        ${this.scaledImages.map((image, index) => html`
          <div class="image-masonry-item" style="${this.makeStyle(image)}" @click="${e => this.handleClick(index, e)}">
            <img src="${image.src}" alt="${image.alt || ''}" />
            ${this.imageTemplate && this.imageTemplate(image, index)}
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
