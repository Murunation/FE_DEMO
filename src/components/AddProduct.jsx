import React from "react";

export default function AddProduct() {
  function submitHandler(e) {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
    };

    const productFrom = new FormData();
    productFrom.append("file", e.target.image.files[0]);
    productFrom.append("details", JSON.stringify(product));

    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      mode: "cors",
      body: productFrom,
    });

    console.log(e.target.image.files[0]);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" name="image" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="text" name="stock" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
