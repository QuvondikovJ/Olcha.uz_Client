import svgRoot from '../../../svgIcons.svg'
import '../../../style/catalog/product/comment.scss'
import {useState} from "react";
import ModalForComment from "./ModalForComment";

function Comment() {

    const stars = 5
    const commentCount = 5

    const [modalVis, setModalVis] = useState(false)
    const [starCount, setStarCount] = useState(5)

    function modalVisible() {
        setModalVis(!modalVis)
    }

    return <div className={'comment_comp'}>

            <div className="comment_inner">
                <div className="title_block">
                    <h3 className="title">Sharhlar</h3>
                    <button className="comment_btn" onClick={modalVisible}>
                        <svg className={'edit_icon'}>
                            <use xlinkHref={svgRoot + '#edit'}/>
                        </svg>
                        <span>Sharh qoldirish</span>
                    </button>
                </div>

                {/*  If no comment so this block works  */}
                <div className="empty_comment_block">
                    <svg className={'comment_icon'}>
                        <use xlinkHref={svgRoot + '#comment'}/>
                    </svg>
                    <p>Bu mahsulot uchun hozircha sharhlar mavjud emas.</p>
                </div>

                {/*  If there are comment so this block works  */}

                {/*<div className="comment_block">*/}

                {/*    <div className="rating_block">*/}
                {/*        <svg className={'star_icon'}>*/}
                {/*            <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*        </svg>*/}
                {/*        <svg className={'star_icon'}>*/}
                {/*            <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*        </svg>*/}
                {/*        <svg className={'star_icon'}>*/}
                {/*            <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*        </svg>*/}
                {/*        <svg className={'star_icon'}>*/}
                {/*            <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*        </svg>*/}
                {/*        <svg className={'star_icon'}>*/}
                {/*            <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*        </svg>*/}
                {/*        <span className={'star_count'}>{stars}</span>*/}
                {/*        <span className={'line'}></span>*/}
                {/*        <span className={'comment_count'}>{commentCount} ta sharh</span>*/}
                {/*    </div>*/}


                {/*    <div className="comment_item">*/}
                {/*        <div className="sup_title_block">*/}
                {/*            <p className="user_name">Aziz</p>*/}
                {/*            <span className={'comment_date'}>3 August, 2021</span>*/}
                {/*        </div>*/}

                {/*        <div className="icon_block">*/}
                {/*            <svg className={'star_icon'}>*/}
                {/*                <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*            </svg>*/}
                {/*            <svg className={'star_icon'}>*/}
                {/*                <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*            </svg>*/}
                {/*            <svg className={'star_icon'}>*/}
                {/*                <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*            </svg>*/}
                {/*            <svg className={'star_icon'}>*/}
                {/*                <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*            </svg>*/}
                {/*            <svg className={'star_icon'}>*/}
                {/*                <use xlinkHref={svgRoot + '#star'}/>*/}
                {/*            </svg>*/}
                {/*        </div>*/}

                {/*        <p className="comment_text">*/}
                {/*            Olcha.uz ga katta rahmat, juda puxta yo??lga qo??yilgan onlayn internet magazin ekan, muhimi*/}
                {/*            ishonchli va sifatli. 2 kunga bormay tovarni qo??limga olib kelib berishdi. Olgan tovarim Mi*/}
                {/*            band 5 dan ko??nglim to??ldi. Hammasi a??lo darajada, Olcha.uz barcha o??zbekistonliklarga*/}
                {/*            tavsiya qilaman, olcha.uz ???1 O??zbekistonda????????????*/}
                {/*        </p>*/}

                {/*    </div>*/}
                {/*</div>*/}

                <ModalForComment isOpen={modalVis} toggle={modalVisible} starCount={starCount}
                setStarCount={setStarCount}/>
            </div>


    </div>

}

export default Comment