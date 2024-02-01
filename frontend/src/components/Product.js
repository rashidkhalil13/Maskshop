import React, { useContext, useState, useEffect } from 'react'; // Import useState and useEffect
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Ratings';
import axios from 'axios';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store); // Destructure dispatch from context
  const [isDisableBtn, setIsDisableBtn] = useState(false); // Initialize isDisableBtn state variable

  useEffect(() => {
    const checkStock = async () => {
      const { data } = await axios.get(`/api/products/${product._id}`);
      const existItem = state.cart.cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      if (data.countInStock < quantity) {
        setIsDisableBtn(true);
      }
    };

    checkStock();
  }, [state.cart.cartItems, product._id]);

  const addToCartHandler = async (item) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      // Use ctxDispatch from context
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {isDisableBtn ? ( // Use isDisableBtn to conditionally render the button
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
