import { useLocation } from 'react-router-dom'
import { decode } from 'html-entities'
import ChannelInfo from '../components/ChannelInfo'

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation()

  const { title, description, channelId, channelTitle } = video.snippet

  return (
    <section>
      <iframe
        id="player"
        type="text/html"
        title={decode(title)}
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id.videoId}`}
      />
      <div className="p-8">
        <h2 className="text-lg font-semibold">{decode(title)}</h2>
        <ChannelInfo id={channelId} title={channelTitle} />
        <pre>{description}</pre>
      </div>
    </section>
  )
}
