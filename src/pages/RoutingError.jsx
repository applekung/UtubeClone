import { useRouteError } from 'react-router-dom'

export default function RoutingError() {
  const error = useRouteError()
  return <h2 className="text-lg">{error.statusText}: 주소를 확인해주세요 </h2>
}
