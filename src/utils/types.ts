export default interface ProductType {
    item_id: number;
    product_name: string;
    price: number;
    img: string;
    quantity: number;
  }

export default interface CartType{
    product: ProductType;
    order_quantity: number;
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
    zip_code: number;
    card_first_name: string;
    card_last_name: string;
    card_number: number;
    card_exp_date: string;
    card_security_code: number;
    card_zip_code: number;
  }