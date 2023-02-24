import { useEffect, useState } from "react";
import MovieSelector from "./components/MovieSelector";
import axios from "axios";
import SeatsAndScreenIndicator from "./components/SeatsAndScreenIndicator";
import SeatDisplayAndCheckout from "./components/SeatDisplay&Checkout/SeatDisplay&Checkout";

export default function TicketBookPage(){

    const [showsCollection, setShowsCollection] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [occupiedSeats,setOccupiedSeats] = useState({});
    const [showName,setShowName] = useState("");
    
    useEffect(()=>{
        async function fetchData(){
            try{
                setIsLoading(true);
                const result = await axios.get("http://localhost:3001/shows");
                setShowsCollection(result.data);
                setIsLoading(false);
            }catch(e){
                console.log(e);
                alert("Internal Server Error");
            }
        }

        fetchData();
    }
    ,[])

    useEffect(()=>{
        showsCollection.length>0 && setShowName(showsCollection[0].name);
    },[showsCollection])

    useEffect(()=>{
        const updateOccupied = (name)=>{
            for(let i=0;i<showsCollection.length;i++){
                let show = showsCollection[i];
                if(show.name===name){
                    setOccupiedSeats(show.occupiedIndices ? show.occupiedIndices : {});
                    break;
                }
            }
        }
        updateOccupied(showName);
    },[showName])

    const showNames = showsCollection.map(show=>show.name);

    const handleSelectChange = (name)=>{
        setShowName(name);
    }

    return <div className="customContainer">
        {isLoading
        ? 
        <h1>Loading...</h1>
        :
        <>
            <MovieSelector 
            names={showNames}
            handleSelectChange={handleSelectChange}
            showName={showName}
            />
            <SeatsAndScreenIndicator />
            <SeatDisplayAndCheckout occupiedSeats={occupiedSeats} showName={showName} />
        </>
        }  
    </div>
}