import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data"; // Importing sample products
import { Link } from "react-router-dom";

// This component will display the homepage with a list of products
// It uses Bootstrap's grid system to layout the products in a responsive manner
export default function Homepage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={'/product/' + product.slug}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
            </Link>
        </Col>
      ))}
    </Row>
  )
}
