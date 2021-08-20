import phone from "../../../images/home/phone.jpeg";
import '../../../style/header/cart/templateForCheckout/productList.scss'
function ProductList(){


    return       <div className="product_list">
        <h4 className="sup_title">
            Buyurtmalar ro'yxati
        </h4>
        <div className="product_list_inner">

            <div className="product_item">
                <img src={phone} alt="Not found!" className={'product_img'}/>
                <div>
                    <p className="product_name">Blender Philips HR2604/80 Daily Collection</p>
                    <p className="product_price">1 dona = 1 072 000 so'm</p>
                </div>
            </div>
            <div className="product_item">
                <img src={phone} alt="Not found!" className={'product_img'}/>
                <div>
                    <p className="product_name">Blender Philips HR2604/80 Daily Collection</p>
                    <p className="product_price">1 dona = 1 072 000 so'm</p>
                </div>
            </div>
            <div className="product_item">
                <img src={phone} alt="Not found!" className={'product_img'}/>
                <div>
                    <p className="product_name">Blender Philips HR2604/80 Daily Collection</p>
                    <p className="product_price">1 dona = 1 072 000 so'm</p>
                </div>
            </div>

        </div>
    </div>


}
export default ProductList