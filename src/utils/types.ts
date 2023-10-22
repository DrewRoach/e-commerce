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