import axios from "axios"

const backendApiUrl = "https://api.novusuniforms.com";

export async function gettestimonialList() {
    let result = await axios.get(backendApiUrl + "/api/customer/get_testimonials/list")
    return result;
}

export async function getFaqList() {
    let result = await axios.get(backendApiUrl + "/api/customer/faq_list")
    return result;
}

export async function getOurPartnerList() {
    let result = await axios.get(backendApiUrl + "/api/customer/our_partner")
    return result;
}

export async function getschoolList() {
    let result = await axios.get(backendApiUrl + "/api/customer/school_list")
    return result;
}

export async function getAllSchoolList() {
    let result = await axios.get(backendApiUrl + "/api/customer/school_list_all")
    return result;
}