from pydantic import BaseModel

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