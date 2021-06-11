import axios from 'axios';

const USER_DOMAIN = 'http://211.38.86.92:8040';
const ADMIN_DOMAIN = 'http://211.38.86.92:8006';

const TARGET_DOMAIN_OBJ = {
    USER: USER_DOMAIN,
    ADMIN: ADMIN_DOMAIN,
};

const TARGET_TOKEN_OBJ = {
    USER: 'token',
    ADMIN: 'adminToken',
};

const TARGET_AUTHORIZATION_OBJ = {
    USER: 'authorization',
    ADMIN: 'Authorization',
};

export const request = (method, url, headers, data, target) => {
    return axios({
        method,
        url: TARGET_DOMAIN_OBJ[target] + url,
        headers,
        data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw new Error(err);
        });
};

export const requestWithAccessToken = (method, url, headers, data, target) => {
    const ACCESS_TOKEN = 'Bearer ' + localStorage.getItem(TARGET_TOKEN_OBJ[target]);
    const ACCESS_TOKEN_NAME = TARGET_AUTHORIZATION_OBJ[target];
    return axios({
        method,
        url: TARGET_DOMAIN_OBJ[target] + url,
        headers: { ...headers, [ACCESS_TOKEN_NAME]: ACCESS_TOKEN },
        data,
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw new Error(err);
        });
};
