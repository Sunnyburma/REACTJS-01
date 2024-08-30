import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./actions/actions.js";
import Error from "./Error.js";
import Loading from "./loading.js";
import Products from "./Products.js";

const App = () => {
  
  const dispatch = useDispatch();
  const result = useSelector(state=>state.reducer1);
  const {loading, products, error} = result;
  
  useEffect(() => {
    dispatch(actions());
    
  }, []);
  return (
    <>
    {
     //loading?(<div>{JSON.stringify(products)}</div>):(<Loading></Loading>)
    
   //error="network_error"?(<Error></Error>):(loading?(<div>{JSON.stringify(products)}</div>):(<Loading></Loading>))

    error != "" ?(<Error>{error}</Error>):(loading?(<Products products={products}></Products>):(<Loading></Loading>))

    }
    </>
  )
}
export default App;
