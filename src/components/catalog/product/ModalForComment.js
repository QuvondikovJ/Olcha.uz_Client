import svgRoot from '../../../svgIcons.svg'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../../../style/catalog/product/ModalForComment.scss'
import $ from 'jquery'
import {useEffect} from "react";
import useForceUpdate from 'use-force-update';


function ModalForComment({isOpen, toggle, setStarCount, starCount}) {


    const forceUpdate = useForceUpdate()

    let arrStar = Array(5).fill(0)

    useEffect(() => {
        setTimeout(() => {
            forceUpdate()
            starClicked(starCount)
        }, 50)
    }, [isOpen])

    /* Bu yerda star lani qaysi biri hover bo'lsa shu star dan oldnigi starlar sariq ga bo'yalyapti,
    * hover bo'lgan stardan keyingi stalar kulrangga bo'yalyapti  */
    for (let i = 1; i < 6; i++) {
        $('#star_' + i).mousemove(function () {
            for (let j = i; j < 6; j++) {
                let starIcon = $('#star_' + (j + 1))
                starIcon.addClass('disabled_color')
                starIcon.removeClass('active_color')
            }
            for (let j = 1; j <= i; j++) {
                let starIcon = $('#star_' + j)
                starIcon.addClass('active_color')
                starIcon.removeClass('disabled_color')
            }

        })
    }
/* Bu metod ishlaydi, qachonki mishka starlarni ustidan olib qochilsa  */
    $('#rating_icon').mouseleave(function () {
        if (starCount === '') {
            for (let i = 1; i < 6; i++) {
                let starIcon = $('#star_' + i)
                starIcon.addClass('active_color')
                starIcon.removeClass('disabled_color')
            }
        }else {
            for (let k = 1; k < 6; k++) {
                let starItem = $('#star_' + k)
                starItem.removeClass('active_color')
                starItem.removeClass('disabled_color')
            }
        }
    })


    /*  Bu yerda textarea ga focus qilinyapti */
    function labelClicked() {
        document.querySelector('.textarea').focus()
    }

    /* Biror star click qilinsa shu funksiya ishlab ketadi */
    function starClicked(starId) {
        setStarCount(starId)

        for (let j = starId; j < 6; j++) {
            let starIcon = $('#star_' + (j + 1))
            starIcon.addClass('disabled')
            starIcon.removeClass('active')
        }
        for (let j = 1; j <= starId; j++) {
            let starIcon = $('#star_' + j)
            starIcon.addClass('active')
            starIcon.removeClass('disabled')
        }
    }

    return <div className={'modal_comment_comp'}>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader><span className={'modal_title'}>Sharh qoldirish</span>
                <svg className={'close_icon'} onClick={toggle}>
                    <use xlinkHref={svgRoot + '#menu_close'}/>
                </svg>
            </ModalHeader>
            <ModalBody>

                <p className={'rating_title'}>Sizning bahongiz :</p>
                <div className={'rating_icon'} id={'rating_icon'}>
                    {arrStar.map((item, index) =>
                        <svg className={'star_icon'} id={'star_' + (index + 1)} onClick={() => starClicked(index + 1)}>
                            <use xlinkHref={svgRoot + '#star'}/>
                        </svg>
                    )}
                </div>

                <p className={'input_title'} onClick={labelClicked}>Sharh</p>
                <textarea typeof={'text'} className={'textarea'}/>


            </ModalBody>
            <ModalFooter>
                <button className={'btn btn-danger modal_btn'} onClick={forceUpdate}>Sharh qoldirish</button>
            </ModalFooter>
        </Modal>
    </div>
}

export default ModalForComment