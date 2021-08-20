function ForDeliveryTypeTemp(){

    return <div>
        <div className="row">
            <div className="col-md-6">
                <div className="form_block">
                    <label htmlFor={'region'}>Shaharni tanlang</label>
                    <select id={'region'}>
                        <option> Tashkent</option>
                        <option> Bukhara</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form_block">
                    <label htmlFor={'district'}>Tumanni tanlang</label>
                    <select id={'district'}>
                        <option> Chilonzor</option>
                        <option> Karakul</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="form_block">
                    <label htmlFor={'street'}>Ko'cha</label>
                    <input type="text" id={'street'}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form_block">
                    <label htmlFor={'homeNumber'}>Uy raqami</label>
                    <input type="text" id={'homeNumber'}/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="form_block">
                    <label htmlFor='apartment'>Xonadon</label>
                    <input type="text" id={'apartment'}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form_block">
                    <label htmlFor={'podyezd'}>Podyezd</label>
                    <input type="text" id={'podyezd'}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form_block">
                    <label htmlFor={'floor'}>Qavat</label>
                    <input type="text" id={'floor'}/>
                </div>
            </div>
        </div>

    </div>

}
export default ForDeliveryTypeTemp