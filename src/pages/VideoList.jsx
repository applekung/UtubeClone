import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../apis/apiYoutube'

export default function VideoList() {
  const [keyword, setKeyword] = useState('')
  const [searchParams] = useSearchParams()
  useEffect(() => {
    setKeyword(searchParams.get('search_query') || '')
  }, [searchParams])

  const {
    isLoading,
    isError,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: getVideos,
  })

  return (
    <>
      {isLoading && <p>Loading</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video.snippet} />
          ))}
        </ul>
      )}
    </>
  )
}
