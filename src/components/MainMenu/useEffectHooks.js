import { React, useState, useEffect } from "react";
import axios from "axios";

const apiurl = `https://fakestoreapi.com/products`;

export default (props) => {
  var [products, setStateProducts] = useState([]);

  //API CALLS by HOOKS
  useEffect(() => {
    axios.get(apiurl).then((result) =>setStateProducts(result.data));
  }, []);

  return (
    <>
      <div className="container p-5">
        <h1 className="text-center h4 text-primary">React UseEffect Hooks for API CALLS</h1>

        <div className="row">
          {products.map((res, i) => {
            return (
              <div className="col-lg-3" key={i}>
                <div class="card">
                  <img src={res.image} class="card-img-top w-50 mx-auto my-2" style={{height:'200px'}} />
                  <div class="card-body">
                    <h5 class="card-title">{res.title}</h5>
                    <h3 class="card-title">{res.price}</h3>
                    <p class="card-text">
                      {res.description.slice(0, 50)}
                    </p>
                    <a href="#" class="btn btn-primary">
                     BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
