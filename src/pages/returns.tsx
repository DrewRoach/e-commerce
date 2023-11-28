import React from "react";

export default function Returns() {
  return (
    <div className="orderForm">
      <h2>Order Return Form</h2>
      <form
        onSubmit={() => {
          alert("Return Form submitted");
        }}
      >
        <label>
          Customer Name:
          <input type="text" name="customerName" required />
        </label>
        <br />
        <label>
          Order Number:
          <input type="text" name="orderNumber" required />
        </label>
        <br />
        <label>
          Reason for Return:
          <select name="reasonForReturn" required>
            <option value="">Select a reason</option>
            <option value="defective">Defective product</option>
            <option value="wrongItem">Received the wrong item</option>
            <option value="changedMind">Changed my mind</option>
          </select>
        </label>
        <br />
        <label>
          Additional Comments:
          <br/>
          <textarea name="additionalComments" rows={4} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
