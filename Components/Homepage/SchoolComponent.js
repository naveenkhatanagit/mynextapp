import React from 'react'
import Link from 'next/link'

function SchoolComponent(props) {

    
    return (
        <>
            <div className="container school_we_stock_cont">
                <div className="row jcc">
                    <h2 className="sec-title text-center mb-3 mb-sm-4">SCHOOL WE STOCK</h2>

                    <div className="category_card_box mb-0 mb-sm-4">
                        <form className="d-flex mb-0 mb-sm-4" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search by school" />
                            <button className="btn drak-btn" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>

                    <div className="category_card_box_row">
                        {
                            props.schoolList.map((item, key) => (
                                <div className="category_card_box" key={key}>
                                    <div className="school-card text-center">
                                        <div className="img"><a href="#"><img src={item.logo_img} className="w-100" alt="" /></a></div>
                                        <a href="#" className="text-dark text-decoration-none">
                                            <h4>{item.name}</h4>
                                        </a>
                                        <a href="#">VIEW PRODUCTS</a>
                                    </div>
                                </div>

                            ))

                        }
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12 text-center">
                            <Link href="schools-we-stock">
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