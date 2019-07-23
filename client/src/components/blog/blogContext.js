import React, { useState } from 'react';

const BlogContext = React.createContext([{}, () => {}]);

const BlogProvider = (props) => {
  const [state, setState] = useState({
    entry: null,
    entryList: [],
    page: 1,
    section: null
  });
  return (
    <BlogContext.Provider value={[state, setState]}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider };