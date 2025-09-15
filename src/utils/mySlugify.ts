import slugify from 'slugify';

export function customSlugify(text: string): string {
  return slugify(text, { strict: true, lower: true });
}

