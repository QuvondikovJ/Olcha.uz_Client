import {useState} from "react";

function NameForConnection(){

    function getName(){

    }

    const [isUserNotRegistered, setIsUserNotRegistered] = useState(true)

    return  <div className="for_connection">
        <h4 className="sup_title">
            Bog'lanish uchun
        </h4>
        <div className="row">
            <div className="col-md-6">
                <div className="form_block">
                    <label htmlFor={'name'}>Ism</label>
                    <input type="text" id={'name'} onChange={getName}/>
                </div>
            </div>
            {isUserNotRegistered ? '' :
                <div className="col-md-6">
                    <div className="form_block">
                        <label htmlFor={'phoneNumber'}>Telefon raqam</label>
                        <input type="text" id={'phoneNumber'}/>
                    </div>
                </div>
            }
        </div>
    </div>

}
export default NameForConnection