// Import necessary libraries
import React from 'react';
import "./filterProducts.css"
// Define the FilterForm component
const FilterForm = () => {
  return (
    <div className="row p-2">
      {/* Items Filter */}
      <div className="col-12 col-sm-4 col-lg-3">
        <div className="card">
          <form method="post" className="p-1">
            {/* Category Filter */}
            <section>
              <span className="text-muted font-weight-bold">Category</span>
              <div className="col-12">
                {/* Category A */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="categorya" />
                  <label className="form-check-label" htmlFor="categorya">
                    Category A
                  </label>
                </div>
                {/* Category B */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="categoryb" />
                  <label className="form-check-label" htmlFor="categoryb">
                    Category B
                  </label>
                </div>
                {/* Category C */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="categoryc" />
                  <label className="form-check-label" htmlFor="categoryc">
                    Category C
                  </label>
                </div>
              </div>
            </section>

            {/* Customer Ratings Filter */}
            <section className="mt-2">
              <span className="text-muted font-weight-bold">Customer Ratings</span>
              <div className="col-12">
                {/* Radio buttons for ratings */}
                {/* Add onChange and value attributes as needed */}
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">
                    4 * & up
                  </label>
                </div>
                {/* Add similar blocks for other radio buttons */}
              </div>
            </section>

            {/* Price Range Filter */}
            <section className="mt-2">
              <span className="text-muted font-weight-bold">Price Range</span>
              <div className="d-flex-block">
                <input type="number" name="min" className="form-control mb-2" placeholder="min $" />
                <input type="number" name="max" className="form-control" placeholder="max $" />
              </div>
            </section>

            {/* Apply Button */}
            <section className="mt-2">
              <button className="btn btn-primary btn-sm btn-block">Apply</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
