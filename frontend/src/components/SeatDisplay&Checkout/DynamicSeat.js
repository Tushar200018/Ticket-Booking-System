import { useEffect, useState } from "react"

export default function DynamicSeat({id,erase,add,classValue}){
    const [seatClass,setSeatClass] = useState("");
    const [isSelected,setIsSelected] = useState(false);



    function handleClick(e){
        if(!e.target.classList.contains("occupied")){
            if(isSelected){
                erase(id);
                setSeatClass("na");
            }
            else{
                add(id);
                setSeatClass("selected");
            }
            setIsSelected(prev => !prev);
        }
    }
    return (
        <div className={`seat ${seatClass} ${classValue}`} onClick={handleClick}></div>
    )
}