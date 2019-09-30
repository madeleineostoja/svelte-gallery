declare namespace JustifiedLayout {
  interface JustifiedLayoutOptions {
    images: object[],
    containerWidth: number,
    targetHeight: number,
    padding?: number
  }
}

declare function JustifiedLayout(options: JustifiedLayout.JustifiedLayoutOptions): ScaledImage[];

export = JustifiedLayout;
