import {BrowserRouter as Router,
    Routes,
    Route,
    Link    
} from 'react-router-dom';
import Home from '../pages/home/Home'
import Header from '../components/header/Header'
import AboutUs from '../pages/productListing/ProductListing'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import DashBoard from '../pages/dashBoard/DashBoard'
import PrivateRoute  from './PrivateRoute';
import Loader from '../components/loader/Loader';
import useFetchData from '../hooks/useFetchData';
import ProductListing from '../pages/productListing/ProductListing';
import CartItems from '../pages/cartItems/CartItems';

const AppRoutes=()=>{
    const isUserAuthenticated=false;
    const {data: categories, error , isLoading} = useFetchData('https://fakestoreapi.com/products/categories',[]);
    

    return(
      <>
        <Router>

             {/* <Loader/> */}
            <Header categories={categories} isLoading={isLoading}/>
            <Routes>
            <Route path='*' element ={<ProductListing/>}></Route>
                <Route path='*' element ={<PageNotFound/>}></Route>
                <Route path='/cart' element ={<CartItems/>}></Route>
                 <Route path={'products/:categoryName'} element={<ProductListing/> } />
                {/*Public Route*/}
                {/*<Route path='/' element ={<Home/>}></Route>
                <Route path='/about-us' element ={<AboutUs/>}></Route> */}
                {/* Private route */}
                {/* <Route path='/dashboard' element={<PrivateRoute element={<DashBoard/>} isUserAuthenticated={isUserAuthenticated} /> } ></Route> */}
            </Routes>
        </Router>

      </>
    )
  }
  export default AppRoutes;