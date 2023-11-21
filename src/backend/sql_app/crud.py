from sqlalchemy.orm import Session
from sqlalchemy import update
from typing import List
from . import models, schemas
import uuid
# Item Methods
def get_items(db:Session, skip: int=0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()

def get_item_by_name(db:Session, product_name: str):
    return db.query(models.Item).filter(models.Item.product_name == product_name)

def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


def create_order(db: Session, ordered_items: schemas.OrderList):
    order_id = uuid.uuid1()
    order = []
    for i in ordered_items.data:
        quantity=i.quantity
        prod_id = i.product_id
        
        db.query(models.Item).filter_by(item_id = prod_id).update({'quantity': models.Item.quantity - quantity})
        order.append(models.Order(id=str(order_id), product_id=prod_id, quantity=quantity))
        
    db.add_all(order)
    db.commit()
    
        

# Shipping Methods

def create_shipping_info(db: Session, shipping_info: schemas.ShippingInfoCreate):
    db_shipping_info = models.ShippingInfo(**shipping_info.dict())
    db.add(db_shipping_info)
    db.commit()
    db.refresh(db_shipping_info)
    return db_shipping_info