from pydantic import BaseModel

# Item Schema
class ItemBase(BaseModel):
    product_name: str
    quantity: int
    price: float

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    item_id: int

    class Config:
        orm_mode = True

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
    zip_code: str
    card_first_name: str
    card_last_name: str
    card_number: str
    card_exp_date: str
    card_security_code: str
    card_zip_code: str

class ShippingInfoCreate(ShippingInfoBase):
    pass

class ShippingInfo(ShippingInfoBase):
    shipping_id: int

    class Config:
        orm_mode = True