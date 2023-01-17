import { createSlice } from '@reduxjs/toolkit'
import { registerUser,userLogin } from '../../Actions/authActions'
import {SetSessionStorage, GetSessionStorage } from '../../useSessionStorage'





// initialize userToken from local storage
// SetSessionStorage("Naveen")


// console.log(userToken)
// const userToken = sessionStorage.getItem('userToken')
const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMzVjNThmYmFjODIxZjJkMDg1YTgwMjc4MzBkNzE0Y2QxMWIzYjUxNmJhNzE5NDJlOGIyY2I1Y2Q2ZjY2ZWJhNjk3OTJkNjliNWNmYTFiMmUiLCJpYXQiOjE2NzM5MzQyMTcuMTg3NjMxLCJuYmYiOjE2NzM5MzQyMTcuMTg3NjMzLCJleHAiOjE2NzY1MjYyMTcuMTg1NDg1LCJzdWIiOiIxOSIsInNjb3BlcyI6W119.Vp0lMKbwmBXqAhucku8qPw8YhXtXXlNKs_UZClxw0ChkYQJ8R4PbSF4XfVNXSU_cBNO11yxbMzMC9CgH43ytpnBmDmqWqFQHHT9O21yya-vDk38f9JoMGWqAxhm2XcxXYCBKbCS4sVZEwsWWW3uqSDzbUvej3DJ8JD0ZqdVlzncMXk7qenll1JV3zz-mdDfOwxBJ7f1k_L6fbmeY-Y_ZANB2yYYe2lnpNQJXY4t091p4S-hSG3FSl41PT2uA1zz2gJMaol1XKmqVWWc4sJJ_F4_hrh14nuYSWrVENSA1m_i_VPBf8tccsK6yzGcRR5raodZOeE54-wsLOuTtACfSlorEtcjMg7MKq78hQNqE_xu-_PBM65XQqwWZoNQt__B_rhpiCdJ3EAIXo5O-cTJbFoD2Q3rdlqf7qp07imKxg_znx-3qP_OMp-0fxFrsOZRCznTVbEVmk-QmCUDKKFNaY90G2gEzse95oXjNyK3ovfLbOqV6EG2KNgnxF9YibJW-QAUpoboBM6OZjdlG1iqTwbJts86i9870GRqFjzTyjJvIeUd7748DiIFCTgYIOxuPTKGoRpdDogkMeNKJLnjldqWrgXA-w46sYb8Y42eFv0Hf0QsJwBDnVz8fZC5NrmLhFXMHx-IEekx3kt_Sq3pW_zn274lHUw7bO9JQoRDEOoI"

// const new_user_id = sessionStorage.getItem('new_user_id')
const new_user_id = ""


const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  new_user_id,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
        state.userInfo = payload
    }
  },
  extraReducers: {
    // register user reducer...
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user reducer...
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.new_user_id = payload.new_user_id
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    
  },
})

export const { setCredentials } = authSlice.actions
export default authSlice.reducer