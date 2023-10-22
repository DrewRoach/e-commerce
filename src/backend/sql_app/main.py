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

d = [
    {
        "item_id": 1,
        "name": "Glasses 1",
        "price": 999.0,
        "img": url,
    },
    {
        "item_id": 2,
        "name": "Glasses 2",
        "price": 1999.0,
        "img": url,
    },
    {
        "item_id": 3,
        "name": "Glasses 3",
        "price": 540.0,
        "img": url,
    },
    {
        "item_id": 4,
        "name": "Glasses 4",
        "price": 1.0,
        "img": url,
    },
    {
        "item_id": 5,
        "name": "Glasses 5",
        "price": 10000,
        "img": url,
    },
    {
        "item_id": 6,
        "name": "Glasses 6",
        "price": 500,
        "img": url
    }
]

@app.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate, db:Session=Depends(get_db)):
    return crud.create_item(db=db, item=item)
@app.get("/items/")
def read_items():
    #items = crud.get_items(db, skip=skip, limit=limit)
    return d

