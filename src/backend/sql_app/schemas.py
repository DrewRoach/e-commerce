from pydantic import BaseModel
from typing import List
# Item Schema
class ItemBase(BaseModel):
    product_name: str
    quantity: int
    price: float
    img: str

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    item_id: int
    class Config:
        orm_mode = True


class OrderBase(BaseModel):
    quantity: int
    product_id: int
    
class OrderCreate(OrderBase):
    pass

class Order(OrderBase):
    id: str
    class Config:
        orm_mode = True

class OrderList(BaseModel):
    data: List[OrderBase]        
# Shipping Schema
class ShippingInfoBase(BaseModel):
    first_name: str 
    last_name: str 
    email: str 
    phone_number: str 
    address: str 
    apt_suite_number: str
    city: str
    state: str
    zip_code: int
    card_first_name: str
    card_last_name: str
    card_number: int
    card_exp_date: str
    card_security_code: int
    card_zip_code: int

class ShippingInfoCreate(ShippingInfoBase):
    pass

class ShippingInfo(ShippingInfoBase):
    shipping_id: int

    class Config:
        orm_mode = True