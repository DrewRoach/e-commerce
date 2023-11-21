# import os
from typing import List
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
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

class Payment(BaseModel):
    name: str
    card_number: int
    security_code: int
    exp_date: str
    zipcode: int | None = None

@app.post("/payment/")
async def get_payment(payment: Payment):
    if payment:
        return {"message": "payment received"}
    return payment


if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='localhost')