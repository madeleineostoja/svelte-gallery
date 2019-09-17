import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '../../../src/litelement/image-masonry';
import sampleImages from '../images';
import styles from '../image-details.css';
import openPhotoSwipe from '../photoswipe';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
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
    openPhotoSwipe(this.images, detail.index, {
      container: this.shadowRoot.querySelector('image-masonry').shadowRoot,
      selector: '.image-masonry-item'
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
      <div class="pb-3 text-right">
        <button class="btn btn-light btn-sm" type="button" @click="${this.onChangeImagesClick}">Shuffle images</button>
        <button class="btn btn-light btn-sm" type="button" @click="${this.onChangeRowHeightClick}">Increase row height</button>
      </div>
      <image-masonry .images=${this.images} .targetRowHeight=${this.targetRowHeight} @image-click=${this.onImageClick} .imageTemplate="${this.imageDetails}" .imageStyle="${styles}"></image-masonry>
    `;
  }
}

customElements.define('image-masonry-example', ImageMasonryExample);
