import axios from 'axios'
import { ElMessageBox as MessageBox, ElMessage as Message } from 'element-plus'
import { envirLogin } from '@/api/environment'
let flag = true;
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// service.interceptors.request.use(
//   config => {
//     config.headers['Token'] = getToken()
//     return config
//   },
//   error => {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )


service.interceptors.response.use(

  response => {

    const res = response.data


    if (res.code !== 1000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if ((res.code === 401 || res.code === 2000 || res.code === 500) && flag) {
        flag = false;
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          envirLogin().then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      Message({
        message: res.message || 'Success',
        type: 'success',
        duration: 5 * 1000
      })
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
