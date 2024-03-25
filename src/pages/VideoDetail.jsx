import { useLocation } from 'react-router-dom'
import ChannelInfo from '../components/ChannelInfo'
import { decode } from 'html-entities'

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation()
  console.log(video)
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
      <div>
        <h2>{decode(title)}</h2>
        <ChannelInfo id={channelId} title={channelTitle} />
        <pre>{description}</pre>
      </div>
    </section>
  )
}
