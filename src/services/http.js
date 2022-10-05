const BASE_URL = "https://strapi-production-2e1d.up.railway.app/api/"
const passToken = "Bearer ba91f6b4cd8f997abcbaace485b005e7bf74c2b239ee6dba830d5bb2bac7c9fe8674d4d147e6640091728f63ab9a3fe3e30366af166dbd9fab3b15305ef0450bfea8f979ab479ddc7b0e796d5e40d2c9cee9ca2e6192848c3e255f8b83c33056e0a06c9e3644587f6bc4780eded792ef4e9557b4446f0f6fa526e6802e13308c"
import qs from 'qs'



const getProducts = async (linea) => {

    const queryGetProducts = qs.stringify({
        fields: ['linea', 'categoria', 'nombre'],
        sort: ['linea', 'categoria', 'nombre'],
        filters: linea && {
            linea
        },
        pagination: {
            pageSize: 100
        }
      }, {
        encodeValuesOnly: true, // prettify URL
      });

    const response = await 
    fetch(BASE_URL + "productos?" + queryGetProducts ,{
        headers: {
            "Authorization": passToken
        }
    })
    const { data } = await response.json()
    return data
}

const getProduct = async (idProducto) => {

    const queryGetProduct = qs.stringify({
        populate: "imagenes"
      }, {
        encodeValuesOnly: true, // prettify URL
      });

    const response = await 
    fetch(BASE_URL + "productos/" + idProducto + "?" + queryGetProduct,{
        headers: {
            "Authorization": passToken
        }
    })
    const { data } = await response.json()
    return data
}

export { getProducts, getProduct }