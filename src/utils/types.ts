export default interface ProductType {
    id: number;
    name: string;
    price: number;
    img: string;
  }

export default interface CartType{
    product: ProductType;
    quantity: number;
  }

export default interface ShippingInfoType{
    id: number;
    first_name: string; 
    last_name: string; 
    email: string; 
    phone_number: string; 
    address: string; 
    apt_suite_number: string;
    city: string;
    state: string;
    zip_code: string;
    card_first_name: string;
    card_last_name: string;
    card_number: string;
    card_exp_date: string;
    card_security_code: string;
    card_zip_code: string;
  }