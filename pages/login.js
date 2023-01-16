import React from 'react'
import Link from 'next/link'

function login() {
    return (
        <>
            <section class="Breadcrub_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                   
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    
                                    <li class="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="signin_register_sec">
    <div class="container max-container">
      <div class="row">
        <div class="col-lg-12">
            <div class="signin_card">
              <p>Welcome back! 👋</p>
              <h4>Sign in to your account</h4>
              <form>
                <div class="mb-3">
                  <label for="email-l" class="form-label">Email address <span>*</span></label>
                  <div class="input-group">
                    <img src="assets/images/email-f.svg" alt="email"/>
                    <input type="email" class="form-control" id="email-l" placeholder="" required=""/>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password-l" class="form-label">Password <span>*</span></label>
                  <div class="input-group">
                    <img src="assets/images/lock.svg" alt="email"/>
                    <input type="password" class="form-control" id="password-l" placeholder="" required=""/>
                    <span toggle="#password-l" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                </div>

                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="remerber_me"/>
                  <label class="form-check-label" for="remerber_me">Remember me</label>
                </div>
                 <button type="submit" class="btn form_submit">SIGN IN</button>
              </form>
              <a href="#" class="forget_password">Forget your password?</a>
            </div>
        </div>


      </div>
    </div>
  </section>  
        </>
    )
}

export default login