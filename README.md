# 유튜브API를 이용한 클론웹

### 이번 프로젝트로 배운점

## useInfiniteQuery 페이지네이션

## axios

### axios의 instance만들어 config정의

### axios의 instance활용

    export const setAuthToken = (token) => {
      if (token) {
        instance.defaults.headers.common['Authorization'] = token
      } else {
        delete instance.defaults.headers.common['Authorization']
      }
    }
    등 함수를 만들어 로그인, 로그아웃 시 활용 가능

### axios의 intercept

    잘모르겠지만 이해한 바로는
    request의 intercept는 endpoint로의 actual call 전에 실행
    response의 intercept는 Promise가 completed 되기 전, then문에서 data 받아서 가공하기 전에 실행
    request intercept는 header에 토큰이 있는지('Authorization') 확인하거나, 토큰이 만료되었는지 확인할떄,
    response intercept는 access token이 만료되었을경우 새로 받은 access token으로 대체하는 로직, 에러시 fallback이미지를 보여주는 로직 등 에 활용하는 듯 한데 잘 모르겠다.

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

### 방법3 useNavigate()

    주소 자체를 바꿔주고 싶은경우에 적합. 이 웹은 '/'와 '/videos'둘다 VideoList컴포넌트를 보여주고 있어서 navigate를 사용
    navigate(`/videos?search_query=${encodedSearch}`)

## eslint PROBLEMS 고치기

    지금까지는 eslint problems를 주로 무시했는데 처음으로 다 고쳐봤다. (아직 프로젝트 진행중이지만)
    tanstck의 DOCS의 devtool 부분을 보니
    "plugin:@tanstack/eslint-plugin-query/recommended" 사용을 권장해서
    extends에 추가했다.
    그리고 지금까지 계속 module.exports형식으로 쓰던 eslint configure를 json으로 바꾸고
    pakage.json에 type="module"을 추가해줬다.
    앞으로는 lint PROBLEMS를 잘 보고 고쳐야겠다.
