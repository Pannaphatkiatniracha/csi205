import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Carts.css";

function Carts({ carts, setCarts }) {
  const removeFromCart = (indexToRemove) => {
    setCarts(carts.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart, index) => (
          <Card className="cart-card" key={index}>
            <Card.Img
              variant="top"
              src={cart.thumbnailUrl || "https://via.placeholder.com/150"}
            />
            <Card.Body className="card-body">
              <Card.Title className="cart-title">{cart.title}</Card.Title>
              <Card.Text className="cart-price">
                <b>${cart.price.toFixed(2)}</b>
              </Card.Text>
              <Button
                variant="danger"
                className="delete-btn"
                onClick={() => removeFromCart(index)}
              >
                Delete from Carts
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {carts.length > 0 && (
        <>
          <div className="checkout-summary">
            <span className="cart-text">
              Products:
              <span className="cart-count"> {carts.length} items</span> - Total
              price:
              <span className="total-price"> ${totalPrice.toFixed(2)}</span>
            </span>
          </div>

          <div className="checkout-btn-container">
            <Button className="checkout-btn">Checkout </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carts;
