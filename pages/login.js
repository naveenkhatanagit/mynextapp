import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../Actions/authActions'
import { useEffect,useState } from 'react'
import {SetSessionStorage, GetSessionStorage } from '../useSessionStorage'
import Router from 'next/router';

function login() {
  

  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()


  useEffect(() => {
    if (userInfo) {
      Router.push('/')
    }
  }, [userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

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
              
              <form onSubmit={handleSubmit(submitForm)}>
                <div class="mb-3">
                  <label for="email-l" class="form-label">Email address <span>*</span></label>
                  <div class="input-group">
                    <img src="assets/images/email-f.svg" alt="email"/>
                    <input type="email" class="form-control" id="email-l" placeholder="" {...register('email')} required=""/>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password-l" class="form-label">Password <span>*</span></label>
                  <div class="input-group">
                    <img src="assets/images/lock.svg" alt="email"/>
                    <input type="password" class="form-control" id="password-l" {...register('password')} placeholder="" required=""/>
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