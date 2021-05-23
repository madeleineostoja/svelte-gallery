/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface GalleryProps {
  images: (HTMLImageElement & { placeholder?: string })[];
  rowHeight?: number;
  gutter?: number;
}

export default class Gallery extends SvelteComponentTyped<
  GalleryProps,
  {},
  {}
> {}
