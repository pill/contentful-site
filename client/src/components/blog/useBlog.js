import { useContext } from 'react'
import { BlogContext } from './blogContext'

const useBlog = () => {
  const [state, setState] = useContext(BlogContext)

    function setPage(page) {
      if (page < 1)
        throw 'Invalid page number'

      setState(state => ( {...state, page } ))
    }

    function setEntryList(entryList) {
      setState(state => ( { ...state, entryList } ))
    }

    function setEntry(entry) {
      setState(state => ( { ...state, entry } ))
    }

    return {
      setPage,
      entry: state.entry,
      setEntry,
      entryList: state.entryList,
      setEntryList,
      section: state.section
    }
}

export default useBlog;