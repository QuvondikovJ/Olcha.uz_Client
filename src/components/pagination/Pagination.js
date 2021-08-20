import svgRoot from "../../svgIcons.svg";
import '../../style/pagination/pagination.scss'
import $ from "jquery";
import {useEffect} from "react";

function Pagination({currentPage, setCurrentPage, amountPage}) {

    let arr = Array(amountPage < 6 && amountPage).fill(0)

    useEffect(() => {
        let leftIcon = $('#left')
        currentPage === 1 ? leftIcon.addClass('disabled') : leftIcon.removeClass('disabled')

        $('#btn_1').addClass('active')
    }, [])

    function renderedProductsFunction(page) {
        setCurrentPage(page)

        setTimeout(() => {
            $('#pagination button').removeClass('active')
            $('#btn_' + page).addClass('active')
        }, 100)

        let leftIcon = $('#left')
        let rightIcon = $('#right')

        page === 1 ? leftIcon.addClass('disabled') : leftIcon.removeClass('disabled')
        page === amountPage ? rightIcon.addClass('disabled') : rightIcon.removeClass('disabled')

    }


    return amountPage < 6 ?
        <div className="pagination" id={'pagination'}>
            <button className="pagination_btn left" id={'left'}
                    onClick={() => renderedProductsFunction(currentPage > 1 && currentPage - 1)}>
                <svg className={'left_icon'}>
                    <use xlinkHref={svgRoot + '#left'}></use>
                </svg>
            </button>

            {arr.map((item, index) =>
                <button className="pagination_btn" id={'btn_' + (index + 1)}
                        onClick={() => renderedProductsFunction(index + 1)}>{index + 1}
                </button>
            )}


            <button className="pagination_btn right" id={'right'}
                    onClick={() => renderedProductsFunction(currentPage + 1)}>
                <svg className={'right_icon'}>
                    <use xlinkHref={svgRoot + '#right'}></use>
                </svg>
            </button>

        </div>
        :
        <div className="pagination" id={'pagination'}>
            <button className="pagination_btn left" id={'left'}
                    onClick={() => renderedProductsFunction(currentPage > 1 && currentPage - 1)}>
                <svg className={'left_icon'}>
                    <use xlinkHref={svgRoot + '#left'}></use>
                </svg>
            </button>


            <button className="pagination_btn" id={'btn_1'}
                    onClick={() => renderedProductsFunction(1)}>1
            </button>

            {
                currentPage <= 3 &&
                <div>
                    <button className="pagination_btn" id={'btn_2'}
                            onClick={() => renderedProductsFunction(2)}>2
                    </button>
                    <button className="pagination_btn" id={'btn_3'}
                            onClick={() => renderedProductsFunction(3)}>3
                    </button>
                    <button className="pagination_btn" id={'btn_4'}
                            onClick={() => renderedProductsFunction(4)}>4
                    </button>

                </div>
            }

            {
                currentPage > 3 && amountPage > 5 &&
                <button className="pagination_btn disabled">...</button>
            }

            {
                currentPage > 3 && amountPage > 5 && currentPage < amountPage - 2 &&
                <div>
                    <button className="pagination_btn" id={'btn_' + (currentPage - 1)}
                            onClick={() => renderedProductsFunction(currentPage - 1)}>{currentPage - 1}</button>
                    <button className="pagination_btn" id={'btn_' + currentPage}
                            onClick={() => renderedProductsFunction(currentPage)}>{currentPage}</button>
                    <button className="pagination_btn" id={'btn_' + (currentPage + 1)}
                            onClick={() => renderedProductsFunction(currentPage + 1)}>{currentPage + 1}</button>
                </div>
            }

            {
                amountPage > 5 && currentPage <= amountPage - 3 &&
                <button className="pagination_btn disabled">...</button>
            }

            {
                currentPage > amountPage - 3 &&
                <div>
                    <button className="pagination_btn" id={'btn_' + (amountPage - 3)}
                            onClick={() => renderedProductsFunction(amountPage - 3)}>{amountPage - 3}
                    </button>
                    <button className="pagination_btn" id={'btn_' + (amountPage - 2)}
                            onClick={() => renderedProductsFunction(amountPage - 2)}>{amountPage - 2}
                    </button>
                    <button className="pagination_btn" id={'btn_' + (amountPage - 1)}
                            onClick={() => renderedProductsFunction(amountPage - 1)}>{amountPage - 1}
                    </button>

                </div>
            }


            <button className="pagination_btn" id={'btn_' + amountPage}
                    onClick={() => renderedProductsFunction(amountPage)}>{amountPage}</button>


            <button className="pagination_btn right" id={'right'}
                    onClick={() => renderedProductsFunction(currentPage + 1)}>
                <svg className={'right_icon'}>
                    <use xlinkHref={svgRoot + '#right'}></use>
                </svg>
            </button>
        </div>


}

export default Pagination