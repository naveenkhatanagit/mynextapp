import React from 'react'

const FaqComponent = () => {
  return (
    <section className="faq-sec ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 text-center">
          <img src="assets/images/erf-1.png" className="w-100 girl-img" alt="" />
        </div>
        <div className="col-lg-6 col-md-6">
          <h2 className="sec-title mb-2">Frequently Asked Questions ?</h2>
          <div className="sep"></div>


          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsefour">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapsefour" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsefive">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapsefive" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo
                  consequat.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a className="collapsed btn" data-bs-toggle="collapse" href="#collapsesix">
                  <img src="assets/images/faq-icon.png" alt="" /> What is one hour production?
                </a>
              </div>
              <div id="collapsesix" className="collapse" data-bs-parent="#accordion" />
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo
                consequat.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
  )
}

export default FaqComponent
