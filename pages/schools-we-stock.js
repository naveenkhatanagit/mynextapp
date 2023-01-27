import React from 'react'
import { getAllSchoolList } from "../Api/HomepageApi"
import { useState, useEffect } from 'react'
import SchoolComponent from '@/Components/Homepage/SchoolComponent';

function schoolsWEstock() {

    const [schoolAllList, setAllSchoolList] = useState([]);

    useEffect(() => {

        getAllSchoolList().then((response) => {
            let res = response.data;
            if (res) {
                setAllSchoolList(res.data.data);
            }

        }).catch((error) => {
            toast.error("something went wrong", {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        })

    }, [])


  return (
    <>
     <SchoolComponent schoolList={schoolAllList} />
    </>
  )
}

export default schoolsWEstock