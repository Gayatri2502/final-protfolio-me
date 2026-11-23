export interface Ebook {
  id: string;
  title: string;
  cover: string;
  /** Public preview images. Keep the source PDF outside the public directory. */
  pages: string[];
}

export const ebooks: Ebook[] = [];
