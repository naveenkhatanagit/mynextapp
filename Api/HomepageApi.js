import axios from "axios"

export async function gettestimonialList() {
    let result = await axios.get('https://awesmatic.vistamatrix.in/api/customer/get_testimonials/list')
    return result;
}