"use client";

import Post from '@/app/(afterLogin)/_component/Post'
import { Post as IPost } from '@/model/Post'
import { getSearchResult } from '@/app/(afterLogin)/search/_lib/getSearchResult'
import { useQuery } from '@tanstack/react-query'
import { Metadata } from 'next'

export type SearchResultProps = {
  searchParams: { q: string, f?: string, pf?: string };
}

export async function generateMetadata({searchParams}: SearchResultProps): Promise<Metadata> {
  return {
    title: `${searchParams.q} - 검색 / Z`,
    description: `${searchParams.q} - 검색 / Z`,
  }
}


export default function SearchResult({ searchParams }: SearchResultProps) {
  const {data} = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, SearchResultProps['searchParams']]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => (
    <Post key={post.postId} post={post} />
  ))
}
