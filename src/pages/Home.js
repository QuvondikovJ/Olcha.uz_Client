import MostTopSlider from "../components/home/MostTopSlider";
import ManySelected from "../components/home/ManySelected";
import NewProducts from "../components/home/NewProducts";
import Category from "../components/home/Category";
import Discounts from "../components/home/Discounts";
import InstallmentPlan from "../components/home/InstallmentPlan";
import MayBeNeededProducts from "../components/home/MayBeNeededProducts";
import News from "../components/home/News";
import History from "../components/home/History";
import About from "../components/home/About";

function Home(props){


    return <div>

        <MostTopSlider/>
        <ManySelected/>
        <NewProducts />
        <Category/>
        <Discounts props={props}/>
        <InstallmentPlan/>
        <MayBeNeededProducts/>
        <News />
        <History />
        <About />

    </div>

}
export default Home