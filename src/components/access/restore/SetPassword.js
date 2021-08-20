import '../../../style/access/restore/setPassword.scss'
import '../../../style/access/template/accessTemplate.scss'
function SetPassword({props}){

function getPassword(event){
    let password = event.target[0].value
    let prePassword = event.target[1].value

    // Bu yerda password va prePassword backenda berib yuboriladi
}


    return <div className={'set_password_restore'}>
        <div className="container">

            <div className="set_password_block">

                <h4 className="title">Parolni tiklash</h4>
                <hr></hr>

                <form action="" id={'getData'} onSubmit={getPassword}>
                    <label htmlFor={'password'}>Parolni o'zgartirish</label>
                    <input type="password" id={'password'} placeholder={'Yangi parol'}/>

                    <label htmlFor={'prePassword'}>Parolni qaytadan kiriting</label>
                    <input type="password" id={'prePassword'} placeholder={'Yangi parol'}/>
                </form>

                <button className="access_btn btn btn-danger" form={'getData'}>
                    Parolni o'zgartirish
                </button>

            </div>

        </div>
    </div>

}
export default SetPassword