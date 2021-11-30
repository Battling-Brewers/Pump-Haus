import React from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../Utils/queries";
import { ADD_TO_CART } from "../../Utils/actions";
import { useStoreContext } from "../../Utils/GlobalState";

const SingleProduct = (item) => {
  const [state, dispatch] = useStoreContext();
  const prodId = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { product: prodId._id },
  });

  const price = data?.product.price;
  const prodImage = data?.product.prodImage; //this also works
  const prodName = data?.product.prodName; //this will  probably work
  const prodDescrip = data?.product.prodDescrip;
  const _id = data?.product._id;
  const quantity = data?.product.quantity;
  const productInCart = {
    price: price,
    prodImage: prodImage,
    prodName: prodName,
    id: _id,
  };
  const { cart } = state;

  const slideImages = [];
  for (let i = 0; i < prodImage?.length; i++) {
    const slideImageObject = {
      url: `/images/${prodImage[i]}`,
      caption: `${prodName} ${i + 1}`,
    };
    slideImages.push(slideImageObject);
  }

  const addToCart = () => {
    console.log(data?.product);
    dispatch({
      type: ADD_TO_CART,
      product: { ...data?.product, purchaseQuantity: 1 },
    });
    console.log(cart);
  };

  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="imgContainerProd col s12 m5">
          <Fade className="fade">
            {slideImages.map((slideImage, index) => (
              <div className="each-fade swig">
                <img className="responsive-img" src={slideImage.url} />
              </div>
            ))}
          </Fade>
        </div>
        <div className="infoContainer col s12 m5">
          <h1>{prodName}</h1>
          <p>{prodDescrip}</p>
          <span>${price}</span>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
