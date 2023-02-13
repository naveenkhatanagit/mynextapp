import React, { useState } from 'react';
import axios from "axios"
import { AddToCartItemBulk } from "../../../Api/Api"
import { toast } from "react-toastify"
import Router from 'next/router';
import { useSelector } from 'react-redux'

const backendApiUrl = "https://api.novusuniforms.com";

function BulkAddToCart(props) {
  const { userInfo } = useSelector((state) => state.auth)
  const packageDetail = props.packageDetail.data;

  const boys_product_ids_array = [];
  const girls_product_ids_array = [];
  packageDetail.school_packages.forEach(packagefunction);

  function packagefunction(packages, packages_index) {
    if (packages.type == "Boys") {

      packages.products.forEach(productfunction);
      function productfunction(products, products_index) {
        boys_product_ids_array.push(products.id);
      }
    } else {
      packages.products.forEach(productfunction);
      function productfunction(products, products_index) {
        girls_product_ids_array.push(products.id);
      }
    }


  }


  const [boysProductids, setboysProductids] = useState(boys_product_ids_array);
  const [girlsProductids, setgirlsProductids] = useState(girls_product_ids_array);


  function boysCheckboxHandler(event) {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      boysProductids.push(value);
      var filterids = [];
      boysProductids.forEach(filteridsarray);
      function filteridsarray(products, products_index) {
        filterids.push(parseInt(products));
      }


      setboysProductids(filterids);
    } else {

      for (var i = 0; i < boysProductids.length; i++) {

        if (boysProductids[i] == value) {

          boysProductids.splice(i, 1);
        }

      }
      var filterids = [];
      boysProductids.forEach(filteridsarray);
      function filteridsarray(products, products_index) {
        filterids.push(products);
      }


      setboysProductids(filterids);



    }

  }

  // girlhandler
  function girlsCheckboxHandler(event) {
    const target = event.target;
    var value = target.value;

    if (target.checked) {
      girlsProductids.push(value);
      var filterids = [];
      girlsProductids.forEach(filteridsarray);
      function filteridsarray(products, products_index) {
        filterids.push(parseInt(products));
      }


      setgirlsProductids(filterids);
    } else {

      for (var i = 0; i < girlsProductids.length; i++) {

        if (girlsProductids[i] == value) {

          girlsProductids.splice(i, 1);
        }

      }
      var filterids = [];
      girlsProductids.forEach(filteridsarray);
      function filteridsarray(products, products_index) {
        filterids.push(products);
      }


      setgirlsProductids(filterids);



    }

  }


  const handleBulkAddToCartSubmit = async (event) => {
    event.preventDefault()
    const button_type = event.target.button_type.value;

    if (button_type == "boys_button") {
      var product_ids = boysProductids;
    } else {
      var product_ids = girlsProductids;
    }

    var formdata = new FormData();
    var customerId = null;
    if(userInfo !== null){
      customerId = userInfo.id;
      formdata.append('customer_id', customerId);
 }else{
  const session_id = sessionStorage.getItem('cartsession');
  formdata.append('session_id', session_id);
 }

    product_ids.forEach(myFunction);


    function myFunction(item, index) {
      formdata.append('product_id' + '[' + index + ']', item);
    }


    AddToCartItemBulk(formdata).then((response) => {
      toast.success("Item added to cart successfully", {
        position: "top-right",
        classNameName: "app_toast",
        autoClose: 1000,
      })
      Router.push('/cart');

    }).catch((error) => {
      toast.error("something went wrong", {
        position: "top-right",
        classNameName: "app_toast",
        autoClose: 1000,
      })
    })

    // console.log(data)

  }

  return (
    <>
      {/* <!-- -=-=-=-=-=-=-=-=-=-=- mobile header end =-=-=-=-=-=-=-=-=-=-=-= --> */}
      <section className="Breadcrub_sec" id="bundle_selection_banner" style={{ backgroundImage: `url(${packageDetail.package_type.featured_image})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item" aria-current="page">Schools</li>
                  <li className="breadcrumb-item" aria-current="page">{packageDetail.name}</li>
                  <li className="breadcrumb-item active" aria-current="page">{packageDetail.package_type.name}</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row banner_text">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-start">
              {packageDetail.package_type.content}
            </div>
          </div>
        </div>
      </section>
      {/* <!------------------------------------------------------------------------> */}

      <section className="bundle_tab_sec bg_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-boys-tab" data-bs-toggle="pill" data-bs-target="#pills-boys"
                    type="button" role="tab" aria-controls="pills-boys" aria-selected="true">Boys</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-girls-tab" data-bs-toggle="pill" data-bs-target="#pills-girls"
                    type="button" role="tab" aria-controls="pills-girls" aria-selected="false">Girls</button>
                </li>
              </ul>

              {/* <!------------tabs-content-----------> */}
              <div className="tab-content" id="pills-tabContent">
                {/* <!---------boys-tabs-content--------> */}
                <div className="tab-pane fade show active" id="pills-boys" role="tabpanel" aria-labelledby="pills-boys-tab"
                  tabindex="0">
                  <form onSubmit={handleBulkAddToCartSubmit}>
                    {
                      packageDetail.school_packages.map((item, key) => (


                        <>


                          {item.type == 'Boys' ?
                            <>
                              <div className="row">
                                <div className="col-lg-12">
                                  <h2 className="sec-title mb-2 text-start">{item.name}</h2>

                                  <div className="product_list_head">
                                    <p>Item</p>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                    <p>Size</p>
                                    <p></p>
                                    <p>Total</p>
                                  </div>
                                </div>
                              </div>


                              <div className="row products_list">

                                <div className="col-lg-12">
                                  {
                                    item.products.map((product, productkey) => (


                                      <div className="products_list_card bg_orange">
                                        <div className="Products_check"><input name="product_ids" className="form-check-input mt-0" onChange={boysCheckboxHandler} type="checkbox" value={product.id}
                                          aria-label="Checkbox for following text input" checked={boysProductids.includes(product.id) ? true : false} /></div>
                                        <div className="item_thumb"><a href="#"><img src={product.main_image.image} alt="" /></a></div>
                                        <div className="item_name pt-3 pt-md-0">
                                          <h4>{product.product_name}</h4>
                                          <a href="#">Size Chart</a>
                                        </div>
                                        <div className="price pt-3 pt-md-0"><b>Rs. {product.selling_price}/-</b> <br /> <del>Rs. {product.mrp}/-</del></div>

                                        <div className="size pt-3 pt-md-0">
                                          <p className="mb-0 pe-2 d-block d-md-none">Size: </p>
                                          <input className="form-control" value={product.variation_combination.size} disabled />
                                        </div>
                                        <div className="qty pt-3 pt-md-0">

                                        </div>
                                        <div className="total_price pt-3 pt-md-0">
                                          <p className="mb-0 pe-2 d-inline d-md-none">Total: </p>
                                          <b>  {product.selling_price}/-</b>
                                        </div>

                                      </div>



                                    ))

                                  }






                                </div>

                              </div>
                            </>

                            : ''
                          }







                        </>



                      ))

                    }


                    {boysProductids.length !== 0 ? <div class="row shopping_cart">
                      <div class="col-lg-12">
                        <div class="total text-end p-0">
                          <button name="button_type" value="boys_button" type="submit" class="btn checkout">ADD All TO CART</button>
                        </div>
                      </div>
                    </div> : ""}

                  </form>











                </div>
                {/* <!---------end-boys-tabs-content--------> */}
                {/* <!---------girls-tabs-content--------> */}
                <div className="tab-pane fade" id="pills-girls" role="tabpanel" aria-labelledby="pills-girls-tab" tabindex="0">
                  <form onSubmit={handleBulkAddToCartSubmit}>
                    {
                      packageDetail.school_packages.map((item, key) => (


                        <>

                          {item.type == 'Girls' ?
                            <>
                              <div className="row">
                                <div className="col-lg-12">
                                  <h2 className="sec-title mb-2 text-start">{item.name}</h2>

                                  <div className="product_list_head">
                                    <p>Item</p>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                    <p>Size</p>
                                    <p>Qty.</p>
                                    <p>Total</p>
                                  </div>
                                </div>
                              </div>


                              <div className="row products_list">

                                <div className="col-lg-12">
                                  {
                                    item.products.map((product, productkey) => (


                                      <div className="products_list_card bg_orange">
                                        <div className="Products_check"><input name="product_ids" className="form-check-input mt-0" onChange={girlsCheckboxHandler} type="checkbox" value={product.id}
                                          aria-label="Checkbox for following text input" checked={girlsProductids.includes(product.id) ? true : false} /></div>
                                        <div className="item_thumb"><a href="#"><img src={product.main_image.image} alt="" /></a></div>
                                        <div className="item_name pt-3 pt-md-0">
                                          <h4>{product.product_name}</h4>
                                          <a href="#">Size Chart</a>
                                        </div>
                                        <div className="price pt-3 pt-md-0"><b>Rs. {product.selling_price}/-</b> <br /> <del>Rs. {product.mrp}/-</del></div>

                                        <div className="size pt-3 pt-md-0">
                                          <p className="mb-0 pe-2 d-block d-md-none">Size: </p>
                                          <input classNameName="form-control" value={product.variation_combination.size} disabled />
                                        </div>
                                        <div className="qty pt-3 pt-md-0">
                                          <p className="mb-0 pe-2 d-block d-md-none">Quantity: </p>
                                          <select className="form-select" aria-label="Default select example">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                          </select>
                                        </div>
                                        <div className="total_price pt-3 pt-md-0">
                                          <p className="mb-0 pe-2 d-inline d-md-none">Total: </p>
                                          <b> Rs. {product.selling_price}/-</b>
                                        </div>

                                      </div>



                                    ))

                                  }






                                </div>

                              </div>

                            </>

                            : ''
                          }



                        </>



                      ))

                    }

                    {girlsProductids.length !== 0 ? <div class="row shopping_cart">
                      <div class="col-lg-12">
                        <div class="total text-end p-0">
                          <button name="button_type" value="girl_button" type="submit" class="btn checkout">ADD All TO CART</button>
                        </div>
                      </div>
                    </div> : ""}
                  </form>










                </div>
                {/* <!---------end-grils-tabs-content--------> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BulkAddToCart

export async function getServerSideProps(context) {

  const school_id = context.query.school_id_package_type_id[0];
  const package_type_id = context.query.school_id_package_type_id[1];

  let packageDetails = await axios.get(backendApiUrl + "/api/customer/get_school_package_detail/" + school_id + '/' + package_type_id);

  const packageDetail = packageDetails.data;

  return {
    props: { packageDetail: packageDetail }, // will be passed to the page component as props
  }

}