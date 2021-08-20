import {useEffect, useRef, useState} from "react";
import $ from 'jquery'
import '../../style/catalog/catalog.scss'
import svgRoot from '../../svgIcons.svg'
import {editCatalog} from "../../redux/reducers/CatalogVisibleReducer";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/reducers/CategoryReducer";

function Catalog() {


    useEffect(()=>{
        dispatch(getCategories())
    })

    const {categories} = useSelector(({categoryReducer})=>categoryReducer)


    const [currentCatalog, setCurrentCatalog] = useState(1)
    const [catalogSecondInnerVis, setCatalogSecondInnerVis] = useState('')

    const dispatch = useDispatch()
    const {catalog} = useSelector(({catalogVisibleReducer}) => catalogVisibleReducer)

    function windowSizeChange() {
        window.innerWidth > 770 ? setCatalogSecondInnerVis(false) : setCatalogSecondInnerVis(true)
    }

    window.onresize = windowSizeChange


    useEffect(() => {
        $('#grand_1').addClass('active')
        if (window.innerWidth > 771) {
            setCatalogSecondInnerVis(false)
        } else {
            setCatalogSecondInnerVis(true)
            setCurrentCatalog(0)
        }
    }, [])


    useEffect(() => {
        if (currentCatalog !== 0) {
            $('#grand_' + currentCatalog).addClass('active')
        }
    }, [catalogSecondInnerVis])

    function catalogCloseClicked() {
        $('#catalog_btn').toggleClass('click')
        $('body').toggleClass('disabled')
        dispatch(editCatalog(!catalog))
    }

    function parentCatalogClicked(catalogId) {
        if (catalogSecondInnerVis) {
            catalogId === currentCatalog ? ($('#father_catalog').toggleClass('disabled') &&
                $('#grand_' + catalogId).toggleClass('active')) :
                ($('#grand_catalog li').removeClass('active') &&
                    $('#grand_' + catalogId).addClass('active'))
        } else {
            $('#grand_catalog li').removeClass('active')
            $('#grand_' + catalogId).addClass('active')
        }
        setCurrentCatalog(catalogId)
    }

    return <div className={'catalog_comp'} id={'catalog_comp'}>

        {/*  This block works when the width of the screen is greater than 770 px */}
        {!catalogSecondInnerVis ?
            <div className="catalog_inner">

                <div className="catalog_item">

                    <ul className={'grand_catalog'} id={'grand_catalog'}>
                        {categories.map(item => item.parentCategory === null &&
                            <li onClick={() => parentCatalogClicked(item.id)}
                                id={'grand_' + item.id}>{item.name}</li>
                        )}
                    </ul>

                </div>

                <div className="catalog_item">
                    <ul className={'father_catalog'} id={'father_catalog'}>
                        {categories.map(item => item.parentCategory === currentCatalog &&
                            <li>
                                <div>
                                    <p className={'father_catalog_name'}>{item.name}</p>
                                    <ul className={'child_catalog'}>
                                        {categories.map(item2 => item2.parentCategory === item.id &&
                                            <li>{item2.name}</li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        )}
                    </ul>

                </div>
            </div>

            /*  This block works when the width of the screen is smaller than 770 px */
            :
            <div className="catalog_second_inner">
                <div className="title_block">
                    <svg className={'menu_list'}>
                        <use xlinkHref={svgRoot + '#menu_list'}/>
                    </svg>
                    <span>Kategoriyalar</span>
                    <svg className={'close_icon'} onClick={catalogCloseClicked}>
                        <use xlinkHref={svgRoot + '#menu_close'}/>
                    </svg>
                </div>

                <div className="category_block">

                    <ul className={'grand_catalog_second'} id={'grand_catalog'}>
                        {categories.map(item => item.parentCategory === null &&
                            <div>
                                <li onClick={() => parentCatalogClicked(item.id)} className={'grand_catalog_item'}
                                    id={'grand_' + item.id}>{item.name}
                                    <svg className={'open_icon'}>
                                        <use xlinkHref={svgRoot + '#left'}/>
                                    </svg>
                                </li>

                                {item.id === currentCatalog &&
                                <ul className={'father_catalog'} id={'father_catalog'}>
                                    {categories.map(item => item.parentCategory === currentCatalog &&
                                        <li>
                                            <div>
                                                <p className={'father_catalog_name'}>{item.name}</p>
                                                <ul className={'child_catalog'}>
                                                    {categories.map(item2 => item2.parentCategory === item.id &&
                                                        <li>{item2.name}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                                }

                            </div>
                        )}
                    </ul>

                </div>
            </div>
        }
    </div>


}

export default Catalog