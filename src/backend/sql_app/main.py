# import os
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from . import crud, models, schemas
from .database import SessionLocal, engine

# dirname = os.path.dirname(__file__)

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "http://localhost:5173/",
    "http://localhost:5173",
    "http://192.168.1.127:5173",
    "http://localhost"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()

# url = os.path.join(dirname, '../../assets/GLASSES-DWEEB.jpeg')
url = '/Users/drew/Desktop/Apps/5234/e-commerce/src/assets/GLASSES-DWEEB.jpeg'


@app.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate, db:Session=Depends(get_db)):
    return crud.create_item(db=db, item=item)
@app.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items


@app.post("/orders/create")
async def new_order(order_list: schemas.OrderList, db:Session=Depends(get_db)):
    crud.create_order(db=db, ordered_items=order_list)
    

@app.post("/shipping_info/", response_model=schemas.ShippingInfo)
def create_shipping_info(shipping_info: schemas.ShippingInfoCreate, db:Session=Depends(get_db)):
    return crud.create_shipping_info(db=db, shipping_info=shipping_info)