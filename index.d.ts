/// <reference types="svelte" />
import { SvelteComponent, SvelteComponentTyped } from 'svelte';

export interface GalleryProps {
  images: (HTMLImageElement & { placeholder?: string })[];
  rowHeight?: number;
  gutter?: number;
  imageComponent?: typeof SvelteComponent;
}

export default class Gallery extends SvelteComponentTyped<
  GalleryProps,
  {},
  {}
> {}
