import { useQuery } from '@tanstack/react-query'

export default function ChannelInfo({ id, title }) {
  const { data: thumbnailURL } = useQuery({
    queryKey: ['channel', id],
  })

  return (
    <div className="mb-8 mt-4 flex items-center gap-2">
      {thumbnailURL && (
        <img
          className="h-10 w-10 rounded-full"
          src={thumbnailURL}
          alt={`${title}의 썸네일이미지`}
        />
      )}
      <p className="font-medium">{title}</p>
    </div>
  )
}
