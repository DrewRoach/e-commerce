import "./viewOrder.css";
import {useNavigate} from 'react-router-dom'
//import {Purchase, order} from './purchase.tsx'
// import order from "./paymentEntry";

const Confirm = () => {
  
  const navigate = useNavigate();
  
  const handleReturn = () => {
    navigate('/');
  }
  let confirmationCode: number = 1;

  return (
    
    <div style={{height: "100vh"}}>
      <h2>Thank you for your purchase!</h2>
      <h3>Your confirmation code is {confirmationCode}</h3>
      <button style={{marginTop:"30vh", marginLeft: "40vw", width:"20%", textAlign:"center"}}className= "button" onClick={handleReturn}>Home</button>
    </div>
  );
};

export default Confirm;
