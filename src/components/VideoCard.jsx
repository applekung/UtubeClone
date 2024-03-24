export default function VideoCard({ video }) {
  return <div>{video && <div>{video.title}</div>}</div>
}
