import { useQuery } from '@tanstack/react-query'

export default function ChannelInfo({ id, title }) {
  const {
    data: thumbnailURL,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['channel', id],
  })

  return (
    <div>
      {true && (
        <img
          className="rounded-full"
          src={thumbnailURL}
          alt={`${title}의 썸네일이미지`}
        />
      )}
      <p>{title}</p>
    </div>
  )
}
