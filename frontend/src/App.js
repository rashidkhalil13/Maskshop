import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Makshop</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="Products">
          {data.products.map((product) => (
            <div className="Product" key={product.slug}>
              <a href={`/Product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>

              <div className="Product-info">
                <a href={`/Product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>

                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
