import { useEffect } from "react"

export default function MovieSelector({names,handleSelectChange,showName}){

    return( 
    <div className="d-flex mb-5">
        <div className="movieLabel">Pick a movie:</div>
        <div className="ms-3">
            <select value={showName} onChange={(e)=>handleSelectChange(e.target.value)}>
                {names.map((name,index)=>
                    <option key={index}>{name}</option>
                )}
            </select>
        </div>
    </div>
    )
}