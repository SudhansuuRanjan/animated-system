import { createContext , useEffect , useState } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogProvider = ({children}) => {
  return (
    <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
  )
}


export default BlogContext;