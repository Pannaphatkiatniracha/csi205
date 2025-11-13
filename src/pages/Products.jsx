import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";

function Products({ products, carts, setCarts }) {
  const [clickedIds, setClickedIds] = useState([]);

  const addToCart = (product) => {
    setCarts([...carts, product]); // เพิ่มสินค้าลงตะกร้า
    setClickedIds([...clickedIds, product.id]); // ทำเครื่องหมายว่าสินค้านี้ถูกกดแล้ว
  };

  return (
    <div className="products-container">
      <div className="products-items-container">
        {products.map((product) => {
          const isClicked = clickedIds.includes(product.id);
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <b>${product.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant={isClicked ? "danger" : "primary"} 
                  onClick={() => addToCart(product)}
                >
                  {isClicked ? "Add to Carts" : "Add to Carts"}{" "}
                  {/* ข้อความใหม่ */}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
