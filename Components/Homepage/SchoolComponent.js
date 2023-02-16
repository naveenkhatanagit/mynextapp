import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SingleSchoolComponent from './SingleSchoolComponent'
import { SchoolSearchApiautocomplete } from '../../Api/Api'

function SchoolComponent(props) {

    const [searchQuery, setsearchQuery] = useState("");
    const [autocompleteProducts, setautocompleteProducts] = useState([]);
    const [autocompleteErr, setAutocompleteErr] = useState("");
    const [displaySearchList, setdisplaySearchList] = useState("d-none");

    useEffect(() => {

        const concernedElement = document.querySelector(".school-autocomplete");

        document.addEventListener("mousedown", (event) => {
            
          if (concernedElement.contains(event.target)) {
            if(displaySearchList != ''){
                setdisplaySearchList('d-block');
            }
           
          } else {
            setdisplaySearchList('d-none');
          }
        });


    }, [autocompleteProducts])

    const handleSearchSchoolChange = async (e) => {

        if (e.target.value != '') {
            setdisplaySearchList('d-block');
        } else {
            setdisplaySearchList('d-none');
        }

        
        setsearchQuery(e.target.value);


        const res = await SchoolSearchApiautocomplete(searchQuery);
        !autocompleteProducts.includes(e.target.value) &&
            res.data &&
            setautocompleteProducts(res.data.data.map((item) => new Array({ 'school_name': item.name,'school_logo': item.logo_img,'school_id':item.id })));
        res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
    };

    function onproductsearchitemHandle(){
        setdisplaySearchList('d-none');
    }
    
    return (
        <>
            <div className="container school_we_stock_cont">
                <div className="row jcc">
                    <h2 className="sec-title text-center mb-3 mb-sm-4">SCHOOL WE STOCK</h2>

                    <div className="category_card_box school-autocomplete">
                        <form action='/schools-we-stock'  className="d-flex mb-0 mb-sm-4" role="search">
                            <input className="form-control me-2" defaultValue={searchQuery} required autoComplete='off' onChange={handleSearchSchoolChange} name='search_school_query' type="search" placeholder="Search by school" />
                            <button className="btn drak-btn" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                        {autocompleteProducts.length !== 0 ?
                            <div class={"datalist-results-school pt-2 " + displaySearchList}>
                                {autocompleteProducts.map((item, i) => (

                                    <Link className='text-dark text-decoration-none' href={'/'+'school/'+item[0].school_id} onClick={onproductsearchitemHandle}>
                                        <div class="d-flex px-3" key={i}>
                                            <div>
                                                <img src={item[0].school_logo} alt="" class="img-fluid" />
                                            </div>
                                            <p class="w-100">{item[0].school_name}<br /></p>
                                        </div>
                                    </Link>



                                ))}
                            </div> :
                            ''}
                    </div>

                    <div className="category_card_box_row  mt-0 mt-sm-4">
                        {
                            props.schoolList.map((item, key) => (
                                <SingleSchoolComponent school_item={item} school_item_key={key} />

                            ))

                        }
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            <Link href="/schools-we-stock?search_school_query=">
                                <button className="btn btn-light mt-4">VIEW ALL</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SchoolComponent