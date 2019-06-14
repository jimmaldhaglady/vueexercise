import Api, { HTTP, FileUp } from '@/services/Api'
export default {
  postCall (link, params) {
    // return HTTP.post(link, params)
    return HTTP.post(link, params).catch((error) => {
      switch (error.response.status) {
        case 400:
          alert(error.response.data.message)
          this.$emit('authenticated', false)
          localStorage.setItem('accessToken', '')
          localStorage.setItem('loggedIn', false)
          this.setToken()
          this.$router.push('/')
          break
        case 401:
        case 403:
          this.$emit('authenticated', false)
          localStorage.setItem('accessToken', '')
          localStorage.setItem('loggedIn', false)
          this.setToken()
          this.$emit.logout()
          this.$router.replace({ name: 'Login' })
          this.$router.push('/')
          break
        case 500:
          alert('Server Error Try again latter')
          this.$router.replace({ name: 'Login' })
          this.$router.push('/')
      }
    })
  },
  getCall (link, params) {
    return HTTP.get(link, params).catch((error) => {
      switch (error.response.status) {
        case 400:
          alert(error.response.data.message)
          this.$emit('authenticated', false)
          localStorage.setItem('accessToken', '')
          localStorage.setItem('loggedIn', false)
          this.setToken()
          this.$router.push('/')
          break
        case 401:
        case 403:
          this.$emit('authenticated', false)
          localStorage.setItem('accessToken', '')
          localStorage.setItem('loggedIn', false)
          this.setToken()
          this.$emit.logout()
          this.$router.replace({ name: 'Login' })
          this.$router.push('/')
          break
        case 500:
          alert('Server Error Try again latter')
          this.$router.replace({ name: 'Login' })
          this.$router.push('/')
      }
    })
  },

}