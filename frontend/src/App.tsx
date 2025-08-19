// import { useState } from "react"
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { sampleProducts } from "./data"; // Importing sample products

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <header>TS Amazona</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved. Amazona 2025</footer>
    </div>
  );
}

export default App;
