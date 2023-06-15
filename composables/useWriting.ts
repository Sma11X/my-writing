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

  return {
    createWriting,
    getWritings,
  }
}
