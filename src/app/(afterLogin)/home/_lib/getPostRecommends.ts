type Props = { pageParam?: number };
export const getPostRecommends = async ({pageParam}: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postRecommends?cursor=${pageParam}`, {
    next: {
      tags: ['posts', 'recommends']
    }
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
