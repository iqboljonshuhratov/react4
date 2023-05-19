import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <main className="pt-2">
        <header className="d-flex justify-content-between align-items-center">
            <ul className="d-flex align-items-center">
                <li><p className="fs-4 mt-3">Start Bootstrap</p></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
            <div className="btn">
                <button className="btn btn-dark">Cart</button>

            </div>
        </header>

        {/* <!-- title qismi  --> */}

        <div className="title text-center d-flex justify-content-center">
            <h1>Shop in style</h1>
            <p className="fs-4">With this shop hompeage template</p>
        </div>

        {/* <!-- Card  --> */}

        <div className="container pt-5 mb-5 pb-5">
            <div className="row justify-content-between">
                <div className=" col-3 border mt-5 ">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5 ">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5 ">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
                <div className=" col-3 border mt-5">
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                    <div className="text text-center p-4">
                        <p className="fw-bold fs-3">Fancy Product</p>
                        <p className="fs-5">$40.00 - $80.00</p>
                        <button className="btn btn-outline-dark">View options</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- futter --> */}

        <div className="futter fs-5">
            Copyright © Your Website 2022
        </div>
      

    </main>
    </div>
  );
}

export default App;
