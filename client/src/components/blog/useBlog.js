import { useContext } from 'react'
import { BlogContext } from './blogContext'

/**
 * Helper with state values and to set state
 */
const useBlog = () => {
  const [state, setState] = useContext(BlogContext)

  function setPage(page) {
    if (page < 1)
      throw 'Invalid page number'

    setState(state => ({...state, page } ))
  }

  function setEntry(entry) {
    setState(state => ({ ...state, entry }))
  }

  return {
    setPage,
    totalPages: state.totalPages,
    entry: state.entry,
    setEntry,
    entryList: state.entryList,
    state,
    setState
  }
}

export default useBlog