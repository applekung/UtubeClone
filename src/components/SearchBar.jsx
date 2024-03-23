import { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SearchBar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  // const [searchParams, setSearchParams] = useSearchParams()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    setSearch(searchParams.get('search_query') || '')
  }, [searchParams])

  const onSubmit = (e) => {
    e.preventDefault()
    const encodedSearch = encodeURIComponent(search).replace(/%20/g, '+')
    /* 
    NOTE 
    방법1. useSearchParams()
    현재주소에서 search_query만 바꿔주고 싶은 경우
    formData전체를 돌면서 쿼리스트링 추가해주고 싶은경우는 navigate보다 setSearchParams가 적합
    // setSearchParams({ search_query: search })

    방법2.
    useLocation()과 URLSearchParams동시에 사용해서 loaction.search문자열을 직접 파싱해 URLSearchParams()객체 가져옴
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    방법1 vs 방법2
    console.log로 출력한 아래 두 값은 같다
    console.log(params.get('search_query'))
    console.log(searchParams.get('search_query'))
    -> 방법1이 더 간편하고 setSearchParams도 사용 가능해서 방법1 사용이 좋을듯
    */

    // 주소 자체를 바꿔주고 싶은경우 이 웹은 '/'와 '/videos'둘다 VideoList컴포넌트를 보여주고 있어서 navigate를 사용
    navigate(`/videos?search_query=${encodedSearch}`)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        name="keyword"
        type="text"
        className="focus:ring-none w-96 rounded border border-neutral-600 px-4 py-2"
        placeholder="search"
        value={search}
        onChange={handleChange}
      />
      <button aria-label="Search">
        <IoSearchOutline className="h-8 w-8" />
      </button>
    </form>
  )
}
