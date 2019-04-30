import axios from 'axios'


export const Tables = () => {
    return axios
    .get('/opsconfig/tables')
    .then(res => {
        // console.log(res)
        return res
        // console.log(res)
        // localStorage.setItem('usertoken', res.data.token)
    })
    .catch(error =>{
        console.log(error)
    })
}

export const login = user => {

    
    return axios
    .post('/user/login', {
        username: user.username,
        password: user.password
    })
    .then(res => {
        // console.log(res)
        return res
        // console.log(res)
        // localStorage.setItem('usertoken', res.data.token)
    })
    .catch(error =>{
        console.log(error)
    })
}


export const FetchTable = (table_name_ops) => {
    // let url = `/api/v1/${table_name_ops}`
    let url = `/api/v1/${table_name_ops}`

    
    return axios
    .get(url)
    .then(res => {
        // console.log(res)
        return res
        // console.log(res)
        // localStorage.setItem('usertoken', res.data.token)
    })
    .catch(error =>{
        console.log(error)
    })
}

