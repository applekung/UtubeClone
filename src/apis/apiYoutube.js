import instance from './axiosConfig'

// export async function getVideos() {
//   return fetch(`public/data/search.json`)
//     .then((res) => res.json())
//     .then(
//       (data) => data.items,
//     )
// }

export async function getVideos({ queryKey }) {
  const keyword = queryKey[1]

  try {
    const response = await instance.get(
      '/search',
      keyword
        ? { params: { q: keyword, part: 'snippet', maxResults: 25 } }
        : { params: { part: 'snippet', maxResults: 25 } },
    )

    return response.data.items
  } catch (err) {
    return err
  }
}

// NOTE api호출 횟수 초과로 chanel정보 나중에 확인 필요
export async function getChannelThumbnailURL({ queryKey }) {
  const id = queryKey[1]

  try {
    const response = await instance.get('/search', {
      params: { id, part: 'snippet' },
    })
    const thumbnailURL = response.data.items[0].snippet.thumbnails.default.url

    return thumbnailURL
  } catch (err) {
    return err
  }
}
