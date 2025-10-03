import React from 'react';

const handleProductSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target)

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);

    const newProduct = {
        name,
        price,
        quantity
    }
    console.log(newProduct);

}

const ProductForm = () => {
    return (
        <div>
            <h3>Add A Product</h3>
            <form onSubmit={handleProductSubmit} action="">
                <input type="text" name="name" placeholder="Product Name" /> <br />
                <input type="text" name="price" placeholder="Product Price" /> <br />
                <input type="text" name="quantity" placeholder="Product Quantity" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;