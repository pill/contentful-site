import React, { useState } from 'react';

const BlogContext = React.createContext([{}, () => {}]);

const BlogProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <BlogContext.Provider value={[state, setState]}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider };