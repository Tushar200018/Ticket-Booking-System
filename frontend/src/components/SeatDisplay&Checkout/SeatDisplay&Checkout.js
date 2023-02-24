import { useState } from "react";
import Checkout from "./Checkout";
import DynamicSeat from "./DynamicSeat";

export default function SeatDisplayAndCheckout({occupiedSeats,showName}){
    const [selectedIds,setSelectedIds] = useState({});
    const erase = (id)=>{
        setSelectedIds(prev => {
            const newIds = {...prev};
            delete newIds[`${id}`];
            return newIds;
        });
    }
    const add = (id)=>{
        setSelectedIds(prev=>({...prev,[id]:true}));
    }

    let i;
    let colSet1 = [];
    let colSet2 = [];
    let colSet3 = [];

    for(i=0;i<12;i++){
        colSet1.push(<DynamicSeat 
            key={i}
            id={i}
            erase ={erase}
            add={add}
            classValue={occupiedSeats[`${i}`] ? "occupied" : "na"}
        />)
    }
    for(i=12;i<36;i++){
        colSet2.push(<DynamicSeat 
            key={i}
            id={i}
            erase ={erase}
            add={add}
            classValue={occupiedSeats[`${i}`] ? "occupied" : "na"}
        />)
    }
    for(i=36;i<48;i++){
        colSet3.push(<DynamicSeat
            key={i} 
            id={i}
            erase ={erase}
            add={add}
            classValue={occupiedSeats[`${i}`] ? "occupied" : "na"}
        />)
    }

    return(
        <>
            <div className="seatDisplayContainer">
                <div className="seatColumns twoCol">
                    {colSet1}
                </div>
                <div className="seatColumns fourCol">
                    {colSet2}
                </div>
                <div className="seatColumns twoCol">
                    {colSet3}
                </div>
            </div>
            <Checkout 
                selectedSeats={selectedIds}
                seatsCount={Object.keys(selectedIds).length}
                showName={showName}
            />
        </>
        
    )
     
}