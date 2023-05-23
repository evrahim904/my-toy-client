import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Tiny | ${title}`;
    },[title])
}


export default useTitle;