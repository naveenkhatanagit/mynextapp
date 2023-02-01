import React from 'react'
import axios from "axios"

const backendApiUrl = "https://api.novusuniforms.com";


function ProductPage(props) {
    const productDetail = props.productDetail.data;



    return (
        <>
            <section class="Breadcrub_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item" aria-current="page">Boys Uniforms</li>
                                    <li class="breadcrumb-item active" aria-current="page">{productDetail.product_name}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="single_product_details bg_gray">
                <div class="container bg-white">
                    <div class="row">
                        <div class="col-lg-7">
                            {/* <!------------------------> */}
                            <div class="single_product_slider">

                                <div id="single_products_main" class="carousel slide">

                                    <div class="Thumbs_indicator">



                                        {
                                            productDetail.images.map((item, key) => (
                                                <div data-bs-target="#single_products_main" data-bs-slide-to={key} class="" aria-current="true"
                                                    aria-label="Slide 1">
                                                    <img src={item.image} />
                                                </div>

                                            ))

                                        }

                                    </div>

                                    <div class="carousel-inner main_featured_thumb">
                                        {
                                            productDetail.images.map((item, key) => (
                                                <div class={key == 0 ? 'active carousel-item' : 'carousel-item'}>
                                                    <img src={item.image} class="d-block w-100" alt="..." />
                                                </div>

                                            ))

                                        }


                                    </div>
                                </div>
                            </div>
                            {/* <!------------------------> */}
                        </div>
                        <div class="col-lg-5">
                            <div class="product_detail_info">
                                <h4 class="product_title">{productDetail.product_name} </h4>

                                <div class="rating">
                                    <div class="star-img"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                    </div>
                                    <p class="mb-0"> 250 Reviews</p>
                                </div>

                                <div class="product_price">
                                    <p class="regular_price">Rs {productDetail.selling_price}</p>
                                    <p class=""><del>Rs {productDetail.mrp}</del></p>
                                </div>

                                <div class="product_attributes">

                                    {
                                        productDetail.variations_types.map((item, key) => (
                                            <div class="size_attribute d-flex">
                                                <div class="input-group">
                                                    <label><span>*</span>{item.name}</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        {
                                                            item.variation_value.map((variation_value, index) => (
                                                                <option value={variation_value.id}>{variation_value.value}</option>

                                                            ))

                                                        }
                                                    </select>
                                                </div>

                                            </div>

                                        ))

                                    }




                                </div>



                                <div class="add_to_cart_btn">
                                    <button class="btn cart_btn">ADD TO CART</button>
                                    <button class="btn buy_now">BUY IT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--------descprition-tabs------> */}

                    <div class="row descprition_tabs">
                        <div class="col-lg-12">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="11-tab" data-bs-toggle="tab" data-bs-target="#11" type="button"
                                        role="tab" aria-controls="11-tab-pane" aria-selected="true">Description 1</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="12-tab" data-bs-toggle="tab" data-bs-target="#12-tab-pane" type="button"
                                        role="tab" aria-controls="12-tab-pane" aria-selected="false">Description 2</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="13-tab" data-bs-toggle="tab" data-bs-target="#13-tab-pane" type="button"
                                        role="tab" aria-controls="13-tab-pane" aria-selected="false">Item Measurements</button>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="11" role="tabpanel" aria-labelledby="11-tab" tabindex="0">
                                    <div>
                                        This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will
                                        quickly become your favorite

                                        <p>T-shirt. Soft, comfortable, and durable, this is a definite must-own.</p>
                                        <ul>
                                            <li>Brand: Novus India</li>
                                            <li>100% cotton | Fabric Weight: s</li>
                                            <li>240 GSM</li>
                                            <li>Wide range of sizes from S-3XL</li>
                                            <li>Fairly produced, certified, and double bio-washed.</li>
                                            <li>Double-stitched reinforced seams at shoulder, sleeve, collar, and waist</li>
                                        </ul>

                                        <ul>
                                            <li>Pique Fabric With Super feel Finish</li>
                                            <li>Optimized for beautiful brilliance across all printing methods including Logo or Name Embroidery
                                            </li>
                                            <li>Made in India</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="12-tab-pane" role="tabpanel" aria-labelledby="12-tab" tabindex="0">
                                    <div>
                                        Please add text here
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="13-tab-pane" role="tabpanel" aria-labelledby="13-tab" tabindex="0">
                                    <div>
                                        Please add text here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-------end-tabs----------->
      <!-------recommends-products--------> */}

                    <div class="row pt-0 pt-md-5 recommends_products">
                        <div class="col-lg-12">
                            <h2 class="sec-title mb-2 text-center">RECOMMENDED PRODUCTS</h2>
                        </div>

                        <div class="row pt-2 pt-md-5">

                            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div class="product-card">
                                    <a href="#"><img src="images/s-dress1.png" class="w-100" alt="" /></a>
                                    <div class="product-detail text-center">
                                        <a href="#">
                                            <p class="product-name mb-0">Class Name Here</p>
                                        </a>
                                        <p class="price mb-2"><b>Rs. 500/-</b> <del>Rs. 699/-</del></p>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ProductPage

export async function getServerSideProps(context) {

    const { product_id } = context.query;

    let productDetails = await axios.get(backendApiUrl + "/api/customer/get_product_details/" + product_id);

    const productDetail = productDetails.data;

    return {
        props: { productDetail: productDetail }, // will be passed to the page component as props
    }

}