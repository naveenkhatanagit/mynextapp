
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const backendURL = 'https://awesmatic.vistamatrix.in/api'
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const { data } = await axios.post(
        `${backendURL}/customer/login`,
        { email, password },
        config
      )
      // store user's token in local storage

        sessionStorage.setItem('userToken', data.access_token)
        
        toast.success("Login Successfully", {
          position: "top-right",
          classNameName: "app_toast",
          autoClose: 1000,
        })
        
        
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email,phone, password,refer_code }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/customer/register`,
        { name, email,phone, password,refer_code },
        config
      )

       sessionStorage.setItem('new_user_id', data.id)
      //  window.location.href = "/login";
      return data
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)