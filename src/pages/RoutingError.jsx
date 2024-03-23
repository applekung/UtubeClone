import { useRouteError } from 'react-router-dom'

export default function () {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <h2 className="text-lg">{error.statusText}: 주소를 확인해주세요 </h2>
    </>
  )
}
