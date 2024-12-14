import axios from 'axios'
import { SERVER_URL } from '../components/constants/constants'

const BASE_URL = SERVER_URL

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
})

api.interceptors.response.use(
    (response) => response,
    async error => {
        const original_request = error.config
        if (error.respone?.status === 401 && !original_request._retry) {
            original_request._retry = true;

            try {
                await refresh_token();
                return api(original_request);
            }catch(refreshError)  {
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export const get_user_profile_data = async (username)=>{
    const resonse = await api.get(`/user_data/${username}/`);
    return resonse.data
}

const refresh_token = async (username)=>{
    const resonse = await api.get(`/token/refresh/${username}/`);
    return resonse.data
}

export const login = async (username,password) => {
    const response = await api.post('/token/' ,{username,password});
    return response.data
}

export const register = async (username,email,firstName,lastName,password) => {
    const response = await api.post('/register/' ,{username,email,first_name:firstName,last_name:lastName,password});
    return response.data
}

export const get_auth = async ()=>{
    const response = await api.get(`/authenticated/`);
    return response.data
}

export const toggle_follow = async(username) =>{
    const response = await api.post('/toggle_follow/', {username:username});
    return response.data
}

export const get_users_posts = async (username)=>{
    const response = await api.get(`/posts/${username}/`);
    return response.data
}

export const toggle_like = async (id) =>{
    const response  = await api.post('/toggle_like/' ,{id:id})
    return response.data
}

export const create_post = async (description,media_type,image,video) =>{
    const response = await api.post('/create_post/',{description:description,media_type:media_type,image:image,video:video} ,{ headers : {'Content-Type' : 'multipart/form-data'}})
    return response.data
}

export const get_posts = async (num) =>{
    const response = await api.get(`/get_posts/?page=${num}`)
    return response.data
}

export const search_users = async (search) =>{
    const response = await api.get(`/search/?query=${search}`)
    return response.data
}


export const logout = async() => {
    const response = await api.post('/logout/')
    return response.data
}
 
export const update_user = async (values) =>  {
    const response  =  await api.patch('/update_user/' , values , { headers : {'Content-Type' : 'multipart/form-data'}})
    return response.data
}