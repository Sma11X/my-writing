import type { Writing } from '@prisma/client'
import type { writing } from '~/types/IWriting'

export default () => {
  const createWriting = async (writingData: writing) => {
    const data = await useAuthFetch('/api/writings/create', {
      method: 'POST',
      body: writingData,
    })
    await navigateTo('/writings/1')
    return data
  }

  const getWritings = async (page: number | string) => {
    const data = await fetch(`/api/writings/${Number(page)}`, {
      method: 'GET',
    }).then(res => res.json())
    return data
  }

  const getWritingById = async (id: string) => {
    const { data } = await useFetch<Writing>(`/api/writing/${id}`, {
      method: 'GET',
    })
    return data
  }

  return {
    createWriting,
    getWritings,
    getWritingById,
  }
}
