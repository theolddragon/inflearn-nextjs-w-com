import { QueryFunction } from '@tanstack/query-core'
import { Post } from '@/model/Post'
import { SearchResultProps } from '@/app/(afterLogin)/search/_component/SearchResult'

export const getSearchResult: QueryFunction<
  Post[],
  [_1: string, _2: string, searchParams: { q: string, pf?: string, f?: string }]
> = async ({ queryKey }: { queryKey: [_1: string, _2: string, SearchResultProps['searchParams']]}) => {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search/${searchParams.q}?${searchParams.toString()}`, {
    next: {
      tags: ['posts', 'search', searchParams.q],
    },
    credentials: 'include',
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
