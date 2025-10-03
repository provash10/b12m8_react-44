import React, { useState } from 'react';


const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('')

    const handleProductSubmit = (e) =>{
    e.preventDefault();
    // console.log(e.target)

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    if(name.length === 0){
        setError("Please Probide Product Name");
        return;
    }
    else if(price.length === 0){
        setError("Please Probide Product Price");
        return;
    }
    else if(price < 0){
        setError("Price Can Not Be Negative");
        return;
    }
    else if(quantity.length === 0){
        setError("Please Probide Product Quantity");
        return;
    }
    else{
        setError("");
    }

    const newProduct = {
        name,
        price,
        quantity
    }
    // console.log(newProduct);
    // use return
    handleAddProduct(newProduct);  
    // if(!error){
    //     handleAddProduct(newProduct);
    // }

}

    return (
        <div>
            <h3>Add A Product</h3>
            <form onSubmit={handleProductSubmit} action="">
                <input type="text" name="name" placeholder="Product Name" /> <br />
                <input type="text" name="price" placeholder="Product Price" /> <br />
                <input type="text" name="quantity" placeholder="Product Quantity" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:"red"}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;