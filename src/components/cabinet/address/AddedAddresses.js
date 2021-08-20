import svgRoot from '../../../svgIcons.svg'
import '../../../style/cabinet/address/addedAddresses.scss'

function AddedAddresses({region, district, street, homeNumber, department, apartment, floor, confirmStandard, id}) {

    function doStandardClicked(id) {
        /* bu yerdan shu id li addressni confirmStandart key ini true qiladigan request backendga yuboriladi */
    }

    function editClicked(id) {
        /* bu yerdan shu id AddressForm ga berib yuboriladi va yerda shu id li addressni malumotlari inputlarga
        * to'ldirib chiqiladi */

        /*  id ni AddressForm ga history.push('address/form/id) qilib berib yuboramiz va u yerdan id ni
        * ushlab olib shu id li address ni backenddan olib kelib inputlarga joylab chiqamiz */
    }

    function deleteClicked(id) {
        /* bu yerdan shu address o'chiriladigan request yuboriladi backend ga */
    }


    return <div className={'added_addresses'}>

        <h6 className={'address_title'}>{region}, {district} tumani, {street}, {homeNumber}</h6>

        <p className={'address_text'}>Qavat : {floor}</p>
        <p className={'address_text'}>Bo'linma : {department}</p>
        <p className={'address_text'}>Xonadon : {apartment}</p>

        <div className="btn_group">
            {confirmStandard ?
                <button className="standard_btn" onClick={() => doStandardClicked(id)}>Standart manzil sifatida
                    o'rnating</button>
                :
                <button className={'standarded_btn btn btn-danger'}>
                    <svg className={'standarded_icon'}>
                        <use xlinkHref={svgRoot + '#check'}></use>
                    </svg>
                    <span>Standart</span>
                </button>
            }
            <button className="edit" onClick={() => editClicked(id)}>
                <svg className={'edit_icon'}>
                    <use xlinkHref={svgRoot + '#edit'}></use>
                </svg>
            </button>
            <button className="delete" onClick={() => deleteClicked(id)}>
                <svg className={'delete_icon'}>
                    <use xlinkHref={svgRoot + '#delete'}></use>
                </svg>
            </button>


        </div>

    </div>

}

export default AddedAddresses