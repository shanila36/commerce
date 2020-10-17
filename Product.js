import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
import {Button} from "antd";
function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    

  };
  return (
    
    
      <div className="product">
          
        <div className="product__info">
            
          <p>{title}</p>
          
          <p className="product__price">
            <small className='taka'>৳</small>
            <strong>{price}</strong>
          </p>
          
        </div>
        <img className='product_image' src={image} alt="" />
        <Button className='button_basket'  type="primary" primary size="medium" onClick={addToBasket}>
        Add to Basket         
        </Button>
        
      </div>
      
      
   
  );
}

export default Product;
