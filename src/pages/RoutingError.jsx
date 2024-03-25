import { useRouteError } from 'react-router-dom'

export default function RoutingError() {
  // 모든에러가 RoutingError에서 처리됨 -> 추가적인 ErrorBoundary 필요
  const error = useRouteError()

  return <h2 className="text-lg">{error.statusText}: 주소를 확인해주세요 </h2>
}
