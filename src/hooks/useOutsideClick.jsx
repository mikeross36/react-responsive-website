import React, {useEffect} from "react"

export default function useOutsideClick(ref, func){
    useEffect(function(){
        const listeners = function(e){
            if(!ref.current || ref.current.contains(e.target)){
                return
            }
            else {
                func()
            }
        }
        document.addEventListener("mousedown", listeners)
        document.addEventListener("touchstart", listeners)

        return function(){
            document.removeEventListener("mousedown", listeners)
            document.removeEventListener("touchstart", listeners)
        }
    },[ref, func])
}