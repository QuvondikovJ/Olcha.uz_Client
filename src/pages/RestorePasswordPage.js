import RestorePassword from "../components/access/restore/RestorePassword";
import SetPassword from "../components/access/restore/SetPassword";
import ConfirmActivationCode from "../components/access/register/ConfirmActivationCode";
import {useState} from "react";

function RestorePasswordPage() {


    const [restoreVis, setRestoreVis] = useState(true)
    const [confirmActivationCodeVis, setConfirmActivationCodeVis] = useState(false)
    const [passwordVis, setPasswordVis] = useState(false)


    return <div>

        {/*{*/}
        {/*    restoreVis ? <RestorePassword props={{setRestoreVis, setConfirmActivationCodeVis}}/>*/}
        {/*        : confirmActivationCodeVis ?*/}
        {/*        <ConfirmActivationCode props={{setConfirmActivationCodeVis, setPasswordVis}}/>*/}
        {/*        : <SetPassword props={{setRestoreVis,setPasswordVis}}/>*/}
                 <SetPassword props={{setRestoreVis,setPasswordVis}}/>
        {/*}*/}

    </div>

}

export default RestorePasswordPage