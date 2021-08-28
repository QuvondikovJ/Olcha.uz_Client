import {Route, Switch} from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Footer from "./components/footer/Footer";
import Help from "./components/help/Help";
import DeliveryComp from "./components/delivery/DeliveryComp";
import EmptySelectedProducts from "./components/selectedProducts/EmptySelectedProducts";
import Authorization from "./components/access/Authorization";
import RegisterPage from "./pages/RegisterPage";
import RestorePasswordPage from './pages/RestorePasswordPage'
import Cabinet from "./components/cabinet/Cabinet";
import Profile from "./components/cabinet/profile/Profile";
import ProfileEdit from "./components/cabinet/profile/ProfileEdit";
import Orders from "./components/cabinet/order/Orders";
import Address from "./components/cabinet/address/Address";
import AddressForm from "./components/cabinet/address/AddressForm";
import Favourite from "./components/cabinet/favourite/Favourite";
import Notification from "./components/cabinet/notification/Notification";
import Cart from "./pages/Cart";
import Checkout from "./components/cart/Checkout";
import Catalog from "./components/catalog/Catalog";
import {useSelector} from "react-redux";
import GrandCategory from "./components/catalog/GrandCategory";
import FatherCategory from "./components/catalog/FatherCategory";
import ChildCategoryIsBrand from "./components/catalog/ChildCategoryIsBrand";
import Product from "./components/catalog/product/Product";
import Comment from "./components/catalog/product/Comment";
import GoToBasket from "./components/catalog/product/GoToBasket";
import InstallmentPlanAndDiscount from "./components/installmentPlanAndDiscount/InstallmentPlanAndDiscount";
import ReturnAndExchange from "./components/whyCherryUz/ReturnAndExchange";
import InstallmentTerms from "./components/whyCherryUz/InstallmentTerms";
import EcoFriendly from "./components/whyCherryUz/EcoFriendly";
import AboutUs from "./components/whyCherryUz/AboutUs";
import PublicOffer from "./components/whyCherryUz/PublicOffer";
import News from "./components/news/News";
import Error from "./components/error404/Error";

function App() {

    const {catalogVisibleReducer, goToBasketReducer} = useSelector((state) => state)
    /* GrandCategory uchun yo'lni bittalab xar safar yangi grand(eng ota) category kiritganda
    * u uchun front end da yangi yo'l yozib o'tirmaslik uchun, grand category kiritayotganda
    * bu category qaysi url yozilganda ochilishini xam backendga saqlab qo'yamiz */


    return <div>


        <Header/>
        {/*{console.log(goToBasketReducer)}*/}
        {catalogVisibleReducer.catalog && <Catalog/>}
        {goToBasketReducer.goToBasket && <GoToBasket/>}

        <Switch>
            <Route path={'/error'} component={Error}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/public-offer'} component={PublicOffer}/>
            <Route path={'/about-us'} component={AboutUs}/>
            <Route path={'/eco-friendly'} component={EcoFriendly}/>
            <Route path={'/installment-terms'} component={InstallmentTerms}/>
            <Route path={'/return-and-exchange'} component={ReturnAndExchange}/>
            <Route path={'/discount'} component={InstallmentPlanAndDiscount}/>
            <Route path={'/installment-plan'} component={InstallmentPlanAndDiscount}/>
            <Route path={'/product'} component={Product}/>
            <Route path={'/child_category'} component={ChildCategoryIsBrand}/>
            <Route path={'/father_category'} component={FatherCategory}/>
            <Route path={'/grandCategory'} component={GrandCategory}/>
            <Route path={'/checkout'} component={Checkout}/>
            <Route path={'/cabinet/notification'} component={Notification}/>
            <Route path={'/cabinet/favourite'} component={Favourite}/>
            <Route path={'/cabinet/location/form'} component={AddressForm}/>
            <Route path={'/cabinet/location'} component={Address}/>
            <Route path={'/cabinet/orders'} component={Orders}/>
            <Route path={'/cabinet/profile/edit'} component={ProfileEdit}/>
            <Route path={'/cabinet/profile'} component={Profile}/>
            <Route path={'/cabinet'} component={Cabinet}/>
            <Route path={'/restorePassword'} component={RestorePasswordPage}/>
            <Route path={'/authorization'} component={Authorization}/>
            <Route path={'/register'} component={RegisterPage}/>
            <Route path={'/cart'} component={Cart}/>
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