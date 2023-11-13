import "./viewOrder.css";
import {useNavigate} from 'react-router-dom'
//import {Purchase, order} from './purchase.tsx'
// import order from "./paymentEntry";
import "./confirmation.css"

const Confirm = () => {
  
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    // alert(order.card_holder_name)
    navigate('/order');
  }

  let confirmationCode: number = 1;

  return (
    
    <div className="confirm-container">
      <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: '#f3f3f3' }}>
      <tr style={{ textAlign: 'center' }}>
        <td>
          <table style={{ width: '635px', backgroundColor: '#ffffff' }}>
            <tr>
              <td align="center">
                <table style={{ width: '400px' }}>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                      <p style={{ color: '#666666', fontFamily: 'FuturaBQ-Book, Arial, sans-serif', fontWeight: 'normal', textAlign: 'left', lineHeight: '1.5', fontSize: '16px', letterSpacing: '1px', margin: '0', padding: '0' }}>
                        <span style={{ color: '#525352', fontFamily: 'FuturaBQ-Book, Arial, sans-serif', fontWeight: 'normal', textAlign: 'left', lineHeight: '1.64', fontSize: '22px', letterSpacing: '1.5px', margin: '0', padding: '0' }}>Estimated Delivery Times</span>
                        <br />
                        <br />Orders are processed within 2-3 days of being received.
                        <br />Most orders will arrive between 2-5 working days from dispatch.
                        <br />Rural delivery or remote locations can take just a little longer, so please allow an additional 2 working days.
                        <br />Please Note: Orders will be processed Monday - Friday.
                      </p>
                      <p>&nbsp;</p>
                      <p style={{ color: '#666666', fontFamily: 'FuturaBQ-Book, Arial, sans-serif', fontWeight: 'normal', textAlign: 'left', lineHeight: '1.5', fontSize: '16px', letterSpacing: '1px', margin: '0', padding: '0' }}>
                        <span style={{ color: '#525352', fontFamily: 'FuturaBQ-Book, Arial, sans-serif', fontWeight: 'normal', textAlign: 'left', lineHeight: '1.64', fontSize: '22px', letterSpacing: '1.5px', margin: '0', padding: '0' }}>Can I return or exchange a product?</span>
                        <br />
                        <br />If for any reason you are not completely satisfied with your online purchase, you will be able to exchange this for an alternative product or request a full refund (excluding freight). All we ask is that you do this within 60 days of receiving your order and that the product is in an “as sold” condition. To do this, please complete the exchange form provided.
                        <br />Purchases made with Afterpay can be returned. If you’ve made a purchase using Afterpay that isn’t quite right, returns can be processed via our webstore. For exchanges, we will issue a refund and you can place a new order for its replacement.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ lineHeight: '44px', fontSize: '1px' }}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table>
                        <tr>
                          <td style={{ backgroundColor: '#ffffff', textAlign: 'left' }}>
                            <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                              <tr>
                                <td style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
                                  <table border= {0} cellSpacing={0} cellPadding={0}>
                                    <tr>
                                      <td align="center" style={{ borderRadius: '1px', backgroundColor: '#F15322' }}>
                                        <a href="#" onClick={handleSubmit}  style={{ fontSize: '16px', fontFamily: 'FuturaBQ-Book, Arial, sans-serif', color: '#ffffff', textDecoration: 'none', padding: '11px 52px', letterSpacing: '2px', textAlign: 'center', borderRadius: '1px', border: '1px solid #F15322', display: 'inline-block' }}>
                                          VIEW MY ORDER
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    </div>
  );
};

export default Confirm;
