import { decode } from 'html-entities'
import { getTimeDifference } from '../utils/date'

export default function VideoCard({ video }) {
  const { thumbnails, title, publishedAt, channelTitle } = video.snippet

  return (
    <div>
      {video && (
        <div className="flex w-40 flex-col">
          <img
            className="w-full object-cover"
            src={thumbnails.default.url}
            alt="thumbnails이미지"
          />

          <div className="flex flex-col">
            <p className="line-clamp-2 font-semibold">{decode(title)}</p>
            <p className="line-clamp-2 text-sm">{channelTitle}</p>
            <p className="text-sm">{getTimeDifference(publishedAt)}</p>
          </div>
        </div>
      )}
    </div>
  )
}
