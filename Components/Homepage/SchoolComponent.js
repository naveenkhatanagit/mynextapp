import React from 'react'
import Link from 'next/link'
import SingleSchoolComponent from './SingleSchoolComponent'

function SchoolComponent(props) {
 
    
    return (
        <>
            <div className="container school_we_stock_cont">
                <div className="row jcc">
                    <h2 className="sec-title text-center mb-3 mb-sm-4">SCHOOL WE STOCK</h2>

                    <div className="category_card_box mb-0 mb-sm-4">
                        <form action='/schools-we-stock' className="d-flex mb-0 mb-sm-4" role="search">
                            <input className="form-control me-2" autoComplete='off' name='search_school_query' type="search" placeholder="Search by school" />
                            <button className="btn drak-btn" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>

                    <div className="category_card_box_row">
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