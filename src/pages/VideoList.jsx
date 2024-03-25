import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Fragment, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../apis/apiYoutube'
import useIntersect from '../hooks/useIntersect'

export default function VideoList() {
  const [keyword, setKeyword] = useState('')
  const [searchParams] = useSearchParams()
  useEffect(() => {
    setKeyword(searchParams.get('search_query') || '')
  }, [searchParams])

  const {
    isFetching,
    data: videos,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['videos', keyword],
    queryFn: getVideos,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id.videoId,
  })

  const [intersectRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!isFetching && hasNextPage) {
        fetchNextPage()
      }
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <>
      {isFetching && <p>Loading</p>}
      {videos &&
        videos.pages.map((page, i) => (
          <Fragment key={i}>
            <div className="flex justify-center">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {page.map((video) => (
                  <li key={video.id.videoId}>
                    <Link
                      to={`videos/watch/${video.id.videoId}`}
                      state={{ video }}
                    >
                      <VideoCard video={video} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      <div className="h-40 w-40 bg-pink-300" ref={intersectRef} />
    </>
  )
}
