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
        .catch((err) => { return err })
}

// export const signupRequest = (method, url, headers, data) => {
//     return axios({
//         method: "post",
//         url: "" + "/signup",
//         headers: {},
//         data: data
//     }).then((res) => {
//         console.log(res.data);
//         return res.data;
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// export const copySignupRequest = (method, url, headers, data) => {
//     return axios({
//         method: "post",
//         url: "" + "/signup",
//         headers: {
//             "Conent-type": "application/json"
//         },
//         data: data
//     }).then((res) => {
//         console.log(res.data);
//         return res.data;
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// export const signinRequest = (method, url, headers, data) => {
//     return axios({
//         method: "post",
//         url: "" + "/login",
//         headers: {
//             "Content-type": "application/json"
//         },
//         data: data
//     }).then((res) => {
//         console.log(res.data);
//         return res.data;
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// export const reservationRequest = (method, url, headers, data) => {
//     return axios({
//         method: "post",
//         url: "" + "/reservation",
//         headers: {
//             authorization: "" + window.localStorage.getItem("token"),
//             "Content-type": "application/json"
//         },
//         data: data
//     }).then((res) => {
//         console.log(res.data);
//         return res.data;
//     }).catch((err) => {
//         console.log(err);
//     })
// }