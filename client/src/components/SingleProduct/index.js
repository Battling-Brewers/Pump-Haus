import React from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../Utils/queries";

const SingleProduct = (item) => {
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
  console.log(prodImage);
  const slideImages = [];
  for (let i = 0; i < prodImage?.length; i++) {
    const slideImageObject = {
      url: `/images/${prodImage[i]}`,
      caption: `${prodName} ${i + 1}`,
    };
    slideImages.push(slideImageObject);
  }
  console.log(slideImages);
  // const slideImages = [
  //     {
  //       url: 'images/slide_2.jpg',
  //       caption: 'Slide 1'
  //     },
  //     {
  //       url: 'images/slide_3.jpg',
  //       caption: 'Slide 2'
  //     },
  //     {
  //       url: 'images/slide_4.jpg',
  //       caption: 'Slide 3'
  //     },
  //   ];

  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="imgContainerProd col s12 m5">
          <Fade>
            {slideImages.map((slideImage, index) => (
              <div className="each-fade">
                <img className="responsive-img" src={slideImage.url} />
              </div>
            ))}
          </Fade>
        </div>
        <div className="infoContainer col s12 m5">
          <h1>{prodName}</h1>
          <p>{prodDescrip}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
