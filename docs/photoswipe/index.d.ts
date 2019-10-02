declare namespace Photoswipe {
  interface Image {
    src: string,
    msrc: string,
    w: number,
    h: number,
    title?: string
  }
}

declare function Photoswipe(images: Photoswipe.Image[], index: number, getElement: { (index: number) : Element }): object;

export = Photoswipe;
