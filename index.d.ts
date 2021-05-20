/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface GalleryImgProps {
  src: string;
  srcset: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImgProps[];
  targetRowHeight?: number;
  padding?: number;
}

export default class Gallery extends SvelteComponentTyped<
  GalleryProps,
  {},
  {}
> {}
export class GalleryImg extends SvelteComponentTyped<GalleryProps, {}, {}> {}
