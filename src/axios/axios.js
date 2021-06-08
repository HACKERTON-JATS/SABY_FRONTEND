import axios from "axios";

const DOMAIN = "http://211.38.86.92:8040";

export const request = (method, url, headers, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        headers: headers,
        data: data
    })

        .then((res) => { return res.data })
        .catch((err) => { throw new Error(err) })
}