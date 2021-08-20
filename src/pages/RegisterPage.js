import ConfirmActivationCode from "../components/access/register/ConfirmActivationCode";
import Register from "../components/access/register/Register";
import {useState} from "react";
import SetPassword from "../components/access/register/SetPassword";

function RegisterPage(){

const [registerVis, setRegisterVis] = useState(true)
const [confirmActivationCodeVis, setConfirmActivationCodeVis] = useState(false)
const [passwordVis, setPasswordVis] = useState(false)

    return <div>

        {registerVis ? <Register props={{setRegisterVis, setConfirmActivationCodeVis}}/> :
            confirmActivationCodeVis ? <ConfirmActivationCode props={{setConfirmActivationCodeVis, setPasswordVis}}/> :
                <SetPassword props={{setRegisterVis, setPasswordVis}}/>
        }


    </div>

}
export default RegisterPage