from sqlalchemy import Boolean, Column, Integer, String, Float
from sqlalchemy.orm import relationship


from .database import Base

class Item(Base):
    __tablename__ = "items"

    item_id = Column(Integer, primary_key=True, index=True)
    product_name = Column(String, index=True)
    quantity = Column(Integer, index=False)
    price = Column(Float, index=False)

class ShippingInfo(Base):
    __tablename__ = "shipping"

    shipping_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)
    address = Column(String, index=True)
    apt_suite_number = Column(String, index=False)
    city = Column(String, index=False)
    state = Column(String, index=False)
    zip_code = Column(String, index=False)
    card_first_name = Column(String, index=False)
    card_last_name = Column(String, index=False)
    card_number = Column(String, index=False)
    card_exp_date = Column(String, index=False)
    card_security_code = Column(String, index=False)
    card_zip_code = Column(String, index=False)



