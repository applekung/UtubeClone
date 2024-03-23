# 유튜브API를 이용한 클론웹

### 주요기능

## 모달 (Modal with Potal)

## 검색시 주소창에서 쿼리를 바꾸는 방법

### 방법1. useSearchParams()

    현재주소에서 search_query만 바꿔주고 싶은 경우
    formData전체를 돌면서 쿼리스트링 추가해주고 싶은경우는 navigate보다 setSearchParams가 적합
    setSearchParams({ search_query: search })

### 방법2. new URLSearchParams(location.search)

    useLocation()의 location.search와 new URLSearchParams() 동시에 사용해서 loaction.search 문자열을 직접 파싱해 URLSearchParams()객체 가져오는 방법
    const location = useLocation()
    const params = new URLSearchParams(location.search)

### 방법1 vs 방법2

    console.log로 출력한 아래 두 값은 같다
    console.log(params.get('search_query'))
    console.log(searchParams.get('search_query'))
    -> 방법1이 더 간편하고 setSearchParams도 사용 가능해서 방법1 사용이 좋음

## 방법3 useNavigate()

    주소 자체를 바꿔주고 싶은경우에 적합. 이 웹은 '/'와 '/videos'둘다 VideoList컴포넌트를 보여주고 있어서 navigate를 사용
    navigate(`/videos?search_query=${encodedSearch}`)
