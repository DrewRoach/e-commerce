# import os
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
# dirname = os.path.dirname(__file__)

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

class Shipping(BaseModel):
    first_name: str 
    last_name: str 
    email: str 
    phone_number: str 
    address: str 
    apt_suite_number: str
    city: str
    state: str
    zip_code: int

@app.post("/shipping/")
async def get_shippinh(shipping: Shipping):
    if shipping:
        return {"message": "shipping info received"}
    return Shipping
