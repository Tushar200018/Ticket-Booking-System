import axios from "axios"
import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Checkout({selectedSeats,seatsCount,showName}){

    const [msg,setMsg] = useState("");
    const [isError,setIsError] = useState(false);
    const [isShow,setIsShow] = useState(false);

    function toggle(){
        setIsShow(prev=>!prev);
        if(isShow) window.location.reload();
    }

    async function handleClick(){
        try{
            const result = await axios.post(`http://localhost:3001/show/${showName}`,selectedSeats)
            setMsg(result.data.msg)
            result.data.status==="error" ? setIsError(true) : setIsError(false);
            toggle()
        }
        catch(e){
            setMsg("Internal Server Error")
            setIsError(true);
            console.log(e);
            toggle();
        }
        
    }

    return(
        <div className="mt-5 d-flex justify-content-center flex-column align-items-center">
            <p className="costPara">You have selected {seatsCount} seats for a price of ${seatsCount*10}</p>
            <button type="button" className="btn btn-outline-primary w-100" onClick={handleClick}>Buy</button>
         
            <Modal isOpen={isShow} toggle={toggle}>
            <ModalHeader toggle={toggle}>{isError ? "Sorry" : "Congratulations"}</ModalHeader>
            <ModalBody>
                <p className={`${isError ? "text-danger" : "text-success"} mt-3`}>{msg}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}