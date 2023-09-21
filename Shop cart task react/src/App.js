import './App.css';
import Cart from './Components/Cart/ShoupCart';
import React, { useState} from 'react';

const product = [{
  name : "Cave V2 Walking Shoes For Men  (Blue)",
  price : "2211.00",
  img : "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/o/a/-original-imagqe2zfg5fvzfy.jpeg?q=70",
  sale : true,
  added : false
},
{
  name : "Rapido III TT Football Shoes For Men  (Black)",
price : "1559.00",
img : "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/4/f/-original-imagqe3fweufnrte.jpeg?q=70",
sale : true,
added : false
},
{
  name : "Wired Cage Sneakers For Men  (Blue)",
price : "1504.00",
img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/f/g/-original-imaghrbykbbwutph.jpeg?q=70",
sale : true,
added : false
},
{
  name : "Grandeur Running Shoes For Men  (Grey)",
price : "2199.00",
img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/u/1/q/-original-imagg6ezkrjtff2p.jpeg?q=70",
sale : false,
added : false
},
{
  name : "Rideal X 1DER Sneakers For Men  (White)",
price : "2849.00",
img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/g/j/-original-imagqe3yg9hzrvpk.jpeg?q=70",
sale : false,
added : false
},
{
  name : "Axelion Refresh Running Shoes For Men  (White)",
price : "3639.00",
img : "	https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/t/m/-original-imagqe3yshyvp3wc.jpeg?q=70",
sale : true,
added : false
},
{
  name : "Solarsmash RCT Tennis Shoes For Men  (White)",
price : "3899.00",
img : "	https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/6/p/-original-imagpw3jzevpjsdz.jpeg?q=70",
sale : true,
added : false
},
{
  name : "cell phase running shoes for men(grey)",
price : "2759.00",
img : "	https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/q/x/-original-imaghvbdyzqg8rhk.jpeg?q=70",
sale : true,
added : false
}
];

function App() {

  const [count,setCount] = useState(0);

  const handleClick = (e) => {
      if(e.target.innerHTML === 'Add to Cart'){
            setCount(count+1);
            e.target.innerHTML = "Remove From Cart";
            e.target.className = "btn btn-outline-danger";

      }
      else if(e.target.innerHTML === 'Remove From Cart')
      {
            setCount(count-1);
            e.target.innerHTML = "Add to Cart";
            e.target.className = "btn btn-outline-success";
      }
}


  return (
    <div className="App">
    <div className="stat">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <img width={50} height={50
          } className='me-1' src='https://i.pinimg.com/736x/78/8f/07/788f07f326352a02460c6fe7d69f418f.jpg' alt='icon'/>
            <a className="navbar-brand" href="#!">PUMA ®️</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">All Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-dark d-flex align-items-center" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="19" 
                    height="19" 
                    fill="currentColor" 
                    className="bi bi-cart-fill me-1" 
                    viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    </div>

    <header className="sach py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">PUMA OUTLET</h1>
                <p className="lead fw-normal text-white-70 mb-0">ESCAPE THE ORDINARY</p>
            </div>
        </div>
    </header>
   
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {product.map((d, i) => (
          <Cart
          handleClick={handleClick}
            data={d}
            key={`${i}`}
          />
        ))}
      

      </div>
            </div>
        </section>
      
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; shoupcart.in 2023</p></div>
        </footer>
    </div>
  );
}

export default App;
