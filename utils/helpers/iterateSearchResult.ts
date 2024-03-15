import { Movie } from '@/utils/types/Movie';

export default function iterateSearchResult(items: any[]): Movie[] {
  return items.map((item) => {
    const newEntries = Object.entries(item).map(([field, value]) => {
      const newField = field[0].toLowerCase() + field.slice(1);

      return [newField, value];
    });

    return Object.fromEntries(newEntries);
  });
}
