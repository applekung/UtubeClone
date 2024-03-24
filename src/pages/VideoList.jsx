import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

export default function VideoList() {
  const [keyword, setKeyword] = useState('')
  const [searchParams] = useSearchParams()
  useEffect(() => {
    setKeyword(searchParams.get('search_query') || '')
  }, [searchParams])

  // const apple = fetch(`public/data/${keyword ? 'search' : 'random'}.json`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data) // JSON 데이터 확인
  //     return data // Promise를 반환하여 이어지는 처리에 사용할 수 있도록 함
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching data:', error)
  //   })
  const {
    isLoading,
    isError,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () =>
      fetch(`public/data/${keyword ? 'search' : 'random'}.json`)
        .then((res) => res.json())
        .then(
          (data) => data.items, // Promise를 반환하여 이어지는 처리에 사용할 수 있도록 함
        )
        .catch((error) => {
          console.error('Error fetching data:', error)
        }),
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
