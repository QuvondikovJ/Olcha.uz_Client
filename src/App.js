import { Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Footer from "./components/footer/Footer";
import Help from "./components/help/Help";
import DeliveryComp from "./components/delivery/DeliveryComp";
import EmptyCart from "./components/cart/EmptyCart";
import EmptySelectedProducts from "./components/selectedProducts/EmptySelectedProducts";

function App() {

    return <div>

        <Header/>

        <Switch>
            <Route path={'/cart'} component={EmptyCart}/>
            <Route path={'/selectedProducts'} component={EmptySelectedProducts}/>
            <Route path={'/compare'} component={Compare}/>
            <Route path={'/help'} component={Help}/>
            <Route path={'/delivery'} component={DeliveryComp}/>
            <Route path={'/'} component={Home}/>

        </Switch>

        <Footer/>
    </div>

}

export default App;