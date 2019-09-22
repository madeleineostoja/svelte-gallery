import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '../../../src/litelement/image-masonry';
import sampleImages from '../images-advanced';
import styles from '../image-details.css';
import openPhotoSwipe from '../photoswipe';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// get stylesheets to include
const sheets = document.querySelectorAll('[data-include-in-shadow]');
let styleImports = '';
for (let i = 0; i < sheets.length; i++) {
  styleImports += `@import "${sheets[i].href}";`
}

class ImageMasonryExample extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      targetRowHeight: { type: Number }
    };
  }

  constructor() {
    super();
    this.images = sampleImages;
    this.targetRowHeight = 220;
  }

  static get styles() {
    return css `${unsafeCSS(styles)}`
  }

  onChangeImagesClick() {
    const newArray = [...sampleImages];
    shuffleArray(newArray);
    this.images = newArray;
  }

  onChangeRowHeightClick() {
    this.targetRowHeight = this.targetRowHeight + 50;
  }

  onImageClick({ detail }) {
    // create array compatible with PhotoSwipe
    const images = this.images.map(({ src, width, height, original, title }) => {
      return {
        src: original,
        msrc: src,
        w: width,
        h: height,
        title
      }
    });
    openPhotoSwipe(images, detail.index, (index) => {
      const el = this.shadowRoot.querySelector('image-masonry').shadowRoot.querySelectorAll('lazy-image')[index].shadowRoot;
      return el.querySelector('[data-masonry-image]');
    });
  }


  imageDetails(image) {
    return html `
      <div class="image-masonry-overlay">
        <div class="image-masonry-text">${image.title}</div>
      </div>
    `
  }

  render() {
    return html `
      <style>${styleImports}</style>
      <div class="pb-3 text-right">
        <button class="btn btn-light btn-sm" type="button" @click="${this.onChangeImagesClick}">Shuffle images</button>
        <button class="btn btn-light btn-sm" type="button" @click="${this.onChangeRowHeightClick}">Increase row height</button>
      </div>
      <image-masonry .images=${this.images} .targetRowHeight=${this.targetRowHeight} @image-click=${this.onImageClick} .imageTemplate="${this.imageDetails}" .imageStyle="${styles}"></image-masonry>
    `;
  }
}

customElements.define('image-masonry-example', ImageMasonryExample);
