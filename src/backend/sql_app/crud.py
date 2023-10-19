from sqlalchemy.orm import Session

from . import models, schemas

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