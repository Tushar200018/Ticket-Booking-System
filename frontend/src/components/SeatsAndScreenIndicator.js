import Seat from "./Seat";

export default function SeatsAndScreenIndicator(){
    return (
        <div className="w-100">
            <div className="seatsContainer">
                <div className="d-flex seatGroup align-items-center">
                    <Seat seatClass="na"/>
                    <div className="seatTitle ms-3">N/A</div>
                </div>
                <div className="d-flex seatGroup align-items-center">
                    <Seat seatClass="selected"/>
                    <div className="seatTitle ms-3">Selected</div>
                </div>
                <div className="d-flex seatGroup align-items-center">
                    <Seat seatClass="occupied"/>
                    <div className="seatTitle ms-3">Occupied</div>
                </div>
            </div>
            <div className="screen"></div>
        </div>
           
    )
}