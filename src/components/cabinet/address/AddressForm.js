import DepartmentsInCabinet from "../cabinetTemplate/DepartmentsInCabinet";
import '../../../style/cabinet/address/addressForm.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";

function AddressForm() {

    const [region, setRegion] = useState('')
    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [homeNumber, setHomeNumber] = useState('')
    const [floor, setFloor] = useState('')
    const [department, setDepartment] = useState('')
    const [apartment, setApartment] = useState('')
    const [confirm, setConfirm] = useState(false)

    function getData(event, inputId) {
        let data = event.target.value
        switch (inputId) {
            case 1 :
                setRegion(data);
                break;
            case 2 :
                setDistrict(data);
                break;
            case 3 :
                setStreet(data);
                break;
            case 4 :
                setHomeNumber(data);
                break;
            case 5 :
                setFloor(data);
                break;
            case 6 :
                setDepartment(data);
                break;
            case 7 :
                setApartment(data);
                break;
            case 8 :
                setConfirm(event.target.checked);
                break;
        }
    }

    function btnClicked() {
        // console.log(region)
        // console.log(district)
        // console.log(street)
        // console.log(homeNumber)
        // console.log(floor)
        // console.log(department)
        // console.log(apartment)
        // console.log(confirm)

        /* Bu data lar backend ga jo'natilishi kerak! */

        if (street.length && homeNumber && district && region){
            toast.success('Yangi manzil muvaffaqiyati saqlandi.')
            /* /cabinet/location yo'liga otib yuborishi kerak */

        }else {
            toast.warning('Iltimos, ma\'lumotlarni to\'liq kiriting!')
        }
    }

    return <div className={'address_form'}>

        <div className="container">


            <div className="path">
                <Link to={'/'}>Bosh sahifa </Link>
                <span>/</span>
                <Link to={'/cabinet'}>Kabinet</Link>
                <span>/</span>
                <Link to={'/cabinet/location'}>Manzillar</Link>
                <span>/</span>
                <Link to={'/cabinet/location/form'}>Form</Link>
            </div>

            <div className="address_inner">


                <div className="address_item">
                    <DepartmentsInCabinet/>
                </div>

                <div className="address_item">

                    <h1 className={'title'}>Manzil qo'shish</h1>
                        <div className="row">

                            <div className="col-md-6">
                                <label htmlFor="street">Ko'cha</label>
                                <input type="text" id={'street'} onChange={(event) => getData(event, 3)}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="home_number">Uy raqami</label>
                                <input type="number" id={'home_number'} onChange={(event) => getData(event, 4)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="floor">Qavat</label>
                                <input type="text" id={'floor'} onChange={(event) => getData(event, 5)}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="department">Bo'linma</label>
                                <input type="text" id={'department'} onChange={(event) => getData(event, 6)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="apartment">Xonadon</label>
                                <input type="text" id={'apartment'} onChange={(event) => getData(event, 7)}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region">Viloyat</label>
                                <select onChange={(event) => getData(event, 1)} id={'region'}>
                                    <option value={'bukhara'}>Bukhara</option>
                                    <option value={'tashkent'}>Tashkent</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="district">Tuman</label>
                                <select onChange={(event) => getData(event, 2)} id={'district'}>
                                    <option value={'Chilonzor'}>chilonzor</option>
                                    <option value={'yunusobod'}>Yunusobod</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="confirm">
                                    <input type="checkbox" id={'confirm'} className={'check_confirm'}
                                           onChange={(event) => getData(event, 8)}/>
                                    <label htmlFor={'confirm'}> Standart manzil sifatida o’rnating</label>
                                </div>
                            </div>
                        </div>

                    <button className="add_btn btn btn-danger" onClick={btnClicked}>Manzil qo'shish</button>
                </div>

            </div>
        </div>


    </div>

}

export default AddressForm