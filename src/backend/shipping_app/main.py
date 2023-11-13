# import os
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

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
    apt_suite_number: str | None = None
    city: str
    state: str
    zip_code: int

@app.post("/")
async def get_shipping(shipping: Shipping):
    # if shipping:
    #     return {"message": "shipping info received"}
    return shipping

if __name__ == '__main__':
    uvicorn.run(app, port=8090, host='127.0.0.1')
