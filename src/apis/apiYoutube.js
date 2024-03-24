import axios from 'axios'
import instance from './axiosConfig'

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
    console.error(err)
  }
}

export async function test() {}
