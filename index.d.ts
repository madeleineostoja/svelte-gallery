/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface GalleryProps {
  images: HTMLImageElement[];
  rowHeight?: number;
  gutter?: number;
}

export default class Gallery extends SvelteComponentTyped<
  GalleryProps,
  {},
  {}
> {}
