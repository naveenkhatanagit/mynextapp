import React from 'react'
import Link from 'next/link'
import { useGetUserDetailsQuery } from '../../app/services/auth/authService'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../Features/auth/authSlice'
import { ProductSearchApi } from '../../Api/Api'


function HeaderComponent() {
    const [searchQuery, setsearchQuery] = useState("");
    const [autocompleteProducts, setautocompleteProducts] = useState([]);
    const [autocompleteErr, setAutocompleteErr] = useState("");
    const [displaySearchList, setdisplaySearchList] = useState("d-none");


    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    // automatically authenticate user if token is found
    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        // pollingInterval: 900000, // 15mins
    })

    useEffect(() => {

        const cartsession = sessionStorage.getItem('cartsession');

        if (cartsession == null) {
            var uniq = 'id' + (new Date()).getTime();
            sessionStorage.setItem('cartsession', uniq);
        }

        const concernedElement = document.querySelector(".header-search-bar");

        document.addEventListener("mousedown", (event) => {
            
          if (concernedElement.contains(event.target)) {
            if(displaySearchList != ''){
                setdisplaySearchList('d-block');
            }
           
          } else {
            setdisplaySearchList('d-none');
          }
        });


        if (data) dispatch(setCredentials(data.data))
    }, [data, dispatch,autocompleteProducts])

    


    const handleProductSearchChange = async (e) => {
        
        if(e.target.value != ''){
            setdisplaySearchList('d-block');
        }else{
            setdisplaySearchList('d-none');
        }
        
    
        setsearchQuery(e.target.value);
        

        const res = await ProductSearchApi(searchQuery);
        !autocompleteProducts.includes(e.target.value) &&
            res.data &&
            setautocompleteProducts(res.data.data.map((item) => new Array ({'school_name':item.school_name,'product_id':item.id,'product_name' : item.product_name, 'selling_price' : 300,'main_image':item.main_image.image})));
        res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
    };
function onproductsearchitemHandle(){
    setdisplaySearchList('d-none');
}

    return (
        <div>
            {/* <!-- =-=-=-=-=-=-=-=- desktop Header start =-=-=-=-=-=-=-=-=-=-=-= --> */}
            <header id="desk-header">
                {/* <!----------middle-bar-----------------> */}
                <section className="middle-bar p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 logo">
                                <Link href="/">
                                    <img height={55} src={"/" + "assets/images/logo.png"} />
                                </Link>

                            </div>
                            <div className="col-lg-7">
                                <div className="header-search-bar">
                                    <form action='/products' className="d-flex" role="search">
                                        <input className="form-control form-search me-2" type="text" autoComplete='off' onChange={handleProductSearchChange}
                                            defaultValue={searchQuery} name='search_query' placeholder="Search" />


                                        <button className="btn drak-btn" type="submit"><img src={"/" + "assets/images/Search-Icon.png"} alt="" /></button>
                                    </form>
                                    {autocompleteProducts.length !== 0?
                                    <div class={"datalist-results pt-2 "+displaySearchList}>
                                    {autocompleteProducts.map((item, i) => (
                                    
                                    <Link className='text-dark text-decoration-none' href={'/'+'product/'+item[0].product_id} onClick={onproductsearchitemHandle}>
                                            <div class="d-flex px-3" key={i}>
                                                <div>
                                                    <img src={item[0].main_image} alt="" class="img-fluid" />
                                                </div>
                                                <p class="w-100">{item[0].product_name}<br /> <span class='text-orange'>{item[0].school_name}</span></p>
                                            </div>
                                    </Link>
                                            
                                    
                                   
                                     ))}
                                      </div>:
                                      ''}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-between">

                                    <div className="header-login">
                                        {isFetching
                                            ? 'Fetching...'
                                            : userInfo !== null
                                                ? <Link href="/account" className="d-flex">
                                                    <img src={"/" + "assets/images/User.png"} alt="user" /> {userInfo.name} </Link>
                                                : <Link href="/login" className="d-flex">
                                                    <img src={"/" + "assets/images/User.png"} alt="user" /> Sign In </Link>}

                                    </div>
                                    <div className="header-cart">
                                        <Link href="/cart">
                                            <img src={"/" + "assets/images/Shopping-bag.png"} alt="cart" />
                                        </Link>
                                        {/* <!-- <span className="cart-badge">9</span> --> */}
                                    </div>
                                </div>
                                <div className="header-mob text-end pt-1">
                                    <a href="tel:+919999900000">Call: +91 99999-00000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--------------bottom-nav------------------> */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="all-products.html"> All Products </a>
                                    <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img
                                        src={"/" + "assets/images/menu-icon.png"} /></span>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/schools-we-stock?search_school_query="> Schools </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="subscription.html">Bulk Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="subscription.html">Track</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- =-=-=-=-=-=-=-=- desktop Header End =-=-=-=-=-=-=-=-=-=-=-= --> */}
            {/* <!-- =-=-=-=-=-=-=-=- Mobile Header start =-=-=-=-=-=-=-=-=-=-=-= --> */}
            <header id="mob-header">

                <section>
                    <nav className="navbar navbar-expand-lg mobile-bottom-header-bar">
                        <div className="container">
                            <Link className="navbar-brand site-logo" href="/"><img src={"/" + "assets/images/logo.png"} /></Link>
                            <div className="d-flex menu-desktop">
                                <form className="d-flex search-bar">
                                    <input className="form-control me-2" type="search" placeholder="Serach Products..." />
                                    <button className="btn" type="submit"><img src={"/" + "assets/images/search.svg"} alt="serch" /></button>
                                </form>
                                <div className="d-flex justify-content-around">
                                    <div className="header-login">
                                    {isFetching
                                            ? 'Fetching...'
                                            : userInfo !== null
                                                ? <Link href="/account" className="d-flex">
                                                    <img src={"/" + "assets/images/User.png"} alt="user" /> {userInfo.name} </Link>
                                                : <Link href="/login" className="d-flex">
                                                    <img src={"/" + "assets/images/User.png"} alt="user" /> Sign In </Link>}
                                    </div>
                                    <div className="header-cart">
                                        <img src={"/" + "assets/images/Shopping-bag.png"} />
                                        {/* <!-- <span className="cart-badge">9</span> --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex menu-mobile">
                                <div className="phn_menu">
                                    <div><a href="login.html"><img src={"/" + "assets/images/User.png"} className="user-login" alt="login" /></a></div>
                                    <div className="header-cart">
                                        <img src={"/" + "assets/images/Shopping-bag.png"} />
                                        {/* <!-- <span className="cart-badge">9</span> --> */}
                                    </div>
                                    <div><img src={"/" + "assets/images/m-menu.svg"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight" alt="menu" /></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
            {/* <!-- -=-=-=-=-=-=-=-=-=-=- mobile header end =-=-=-=-=-=-=-=-=-=-=-= --> */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
                <div className="offcanvas-header">
                    {/* <a className="site-logo" href="index.html"><img  src={"/"+"assets/images/logo.png"}/></a> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="hemburger_menu">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" />
                            <button className="btn drak-btn" type="submit"><img src={"/" + "assets/images/Search-Icon.png"} alt="" /></button>
                        </form>
                        <ul className="navbar-nav mt-3 me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="all-products.html"> All Products </a>
                                <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img
                                    src={"/" + "assets/images/menu-icon.png"} /></span>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" href="/schools-we-stock?search_school_query="> Schools </Link>
                                <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img
                                    src={"/" + "assets/images/menu-icon.png"} /></span>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Lorem Ipsum</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="subscription.html">Bulk Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="subscription.html">Track</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="subscription.html">Contact Us</a>
                            </li>
                        </ul>
                        <div className="header-social-icon pt-4">
                            <h4>Follow On Social:</h4>
                            <ul className="social-icon list-unstyled ">
                                <li><img src={"/" + "assets/images/insta.png"} alt="" /></li>
                                <li><img src={"/" + "assets/images/fb.png"} alt="" /></li>
                                <li><img src={"/" + "assets/images/tweet.png"} alt="" /></li>
                                <li><img src={"/" + "assets/images/linkdin.png"} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HeaderComponent