import Reach from "react";
// will import helpers and actions later

const styles = {
    imageContainer: {
        height: "70%",
        textAlign: "center",
        backgroundColor: "#ffffff"
    },
    image: {
        width: "90%",
        padding: 10,
    },
    card: {
        height: 500,
        width: 400,
        position: "relative"
    },
    text: {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    }
}

function productCard(item) {
    const {
        image,
        name,
        _id,
        price,
        description,
        quantity
    } = item;


    return (
        <div className="card m-3 border-dark" style={styles.card}>
          <Link to={`/products/${_id}`}>
            <img
              alt={name}
              src={`/images/${image}`}
            />
            <p>{name}</p>
          </Link>
          <div>
            <div>{quantity} {pluralize("item", quantity)} in stock</div>
            <span>${price}</span>
          </div>
          <div style={styles.text}>
              <p>
                  {description}
              </p>
          </div>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      );
}
export default productCard;