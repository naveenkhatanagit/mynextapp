import React from 'react'
import SingleSchoolComponent from '@/Components/Homepage/SingleSchoolComponent';
import axios from "axios"


const backendApiUrl = "https://api.novusuniforms.com";

function schoolsWEstock(props) {

    const schoolAllList = props.schoolList.data.data;



    return (
        <>
            <section class="Breadcrub_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Schools we stock</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="all_school_list bg_gray">
                <div class="container school_we_stock_cont">
                    <div class="row jcc">
                        <div class="category_card_box mb-0 mb-sm-4">
                            <form class="d-flex mb-0 mb-sm-4" role="search">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>City</option>
                                    <option value="1">Patiala</option>
                                    <option value="2">Chd</option>
                                    <option value="3">Zirakpur</option>
                                </select>
                                <input class="form-control" type="search" placeholder="Search by school" />
                                <button class="btn drak-btn" type="submit"><i class="fas fa-search"></i></button>
                            </form>
                        </div>

                        <div class="category_card_box_row">
                            {
                                schoolAllList.map((item, key) => (
                                    <SingleSchoolComponent school_item={item} school_item_key={key} />
                                    
                                ))

                            }

                        </div>


                        {/* <!-------pagination---------------------> */}
                        <div class="PageNation_card">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><img src="images/left-nav.png" alt="" /> Prev</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link active" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">Next <img src="images/right-nav.png" alt="" /></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-------pagination---------------------> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default schoolsWEstock

export async function getServerSideProps(context) {

    let school = await axios.get(backendApiUrl + "/api/customer/school_list_all")
    const getSchoolList = school.data;
  
    return {
      props: { schoolList: getSchoolList}, // will be passed to the page component as props
    }
  
  }