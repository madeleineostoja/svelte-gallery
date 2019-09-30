import { LitElement, html, css, unsafeCSS } from 'lit-element';
import createLayout from '../common/justified-layout';
import elementResizeEvent, { unbind } from 'element-resize-event';
import { debounce } from '../common/utils';
import './lazy-image';
import styles from './style.less';

class ImageMasonry extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      scaledImages: { type: Array },
      width: { type: Number },
      padding: { type: Number },
      targetRowHeight: { type: Number },
      imageTemplate: { type: Function },
      imageStyle: { type: String },
      isResizing: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.scaledImages = [];
    this.width = 0;
    this.targetRowHeight = 220;
    this.padding = 4;
    this.isResizing = false;
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
    const el = this.shadowRoot.querySelector('[data-resizer]');
    const resizedFinished = debounce(() => {
      this.isResizing = false;
    }, 100);
    elementResizeEvent(el, () => {
      if (Math.round(this.width) !== Math.round(el.getBoundingClientRect().width)) {
        this.isResizing = true;
        process();
        resizedFinished();
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

  makeStyle({ scaledWidth, scaledHeight, isLastRow, isLastInRow }) {
    let mr = this.padding + 'px';
    const mb = isLastRow ? '0' : mr;
    let flex = `0 0 ${scaledWidth}px`;
    if (isLastInRow) {
      mr = '0';
      flex = `1 1 ${scaledWidth-4}px`;
    }
    return `height:${scaledHeight}px; flex: ${flex}; margin-right:${mr}; margin-bottom: ${mb}`;
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
    const containerStyle = `width: ${this.width}px`;

    return html `
      ${this.imageStyle ?  html`<style>${this.imageStyle}</style>` : ''}
      <div class="masonry ${this.isResizing ? 'is-resizing' : ''}">
        <div data-resizer></div>
        <div class="container" style="${containerStyle}">
        ${this.scaledImages.map(image => html`
          <div class="item" style="${this.makeStyle(image)}" @click="${e => this.handleClick(image.index, e)}">
            <lazy-image .src="${image.src}" .srcset="${image.srcset}" .alt="${image.alt}"></lazy-image>
            ${this.imageTemplate && this.imageTemplate(image)}
          </div>
        `)}
        </div>
      </div>
    `;
  }

  disconnectedCallback() {
    const el = this.shadowRoot.querySelector('.masonry');
    if (el) {
      unbind(el);
    }
    super.disconnectedCallback();
  }
}

customElements.define('image-masonry', ImageMasonry);
