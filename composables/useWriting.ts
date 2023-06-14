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

  return {
    createWriting,
  }
}
