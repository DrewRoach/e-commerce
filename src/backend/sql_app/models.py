from sqlalchemy import Boolean, Column, Integer, String, Float
from sqlalchemy.orm import relationship


from .database import Base

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    product_name = Column(String, index=True)
    quantity = Column(Integer, index=False)
    price = Column(Float, index=False)