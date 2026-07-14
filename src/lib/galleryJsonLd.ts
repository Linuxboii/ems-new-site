import { getImage } from 'astro:assets';
import type { GalleryGroup } from '@/data/gallery';

const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/*.{png,jpg,jpeg,webp}', { eager: true });
const SITE = 'https://emstechnologies.in';

/** Build an ImageGallery JSON-LD node with real, build-optimized image URLs.
 *  Helps both classic SEO (Google image indexing) and GEO (generative engines
 *  parsing structured media + captions). */
export async function galleryJsonLd(name: string, description: string, path: string, groups: GalleryGroup[]) {
  const images = groups.flatMap((g) => g.images);
  const associatedMedia = await Promise.all(
    images.map(async (img) => {
      const meta = assets[`/src/assets/${img.src}`]?.default;
      let contentUrl = `${SITE}/${img.src}`;
      let width = 1000;
      let height = 750;
      if (meta) {
        const built = await getImage({ src: meta, width: 1000, format: 'webp' });
        contentUrl = new URL(built.src, SITE).href;
        height = Math.round((1000 * meta.height) / meta.width);
      }
      return {
        '@type': 'ImageObject',
        contentUrl,
        caption: img.alt,
        width,
        height,
      };
    })
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    url: new URL(path, SITE).href,
    numberOfItems: associatedMedia.length,
    associatedMedia,
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: new URL(t.path, SITE).href,
    })),
  };
}
