import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Tiny Speedsters | ${title}`;
    },[title])
}


export default useTitle;