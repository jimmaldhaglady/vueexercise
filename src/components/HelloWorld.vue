
<template>
 <div class="hello">
  <ul>
     <li v-for="(user, index) in users" :key="'index'"><h1><p v-on:click="getPosts(user.id)">{{user.name}}</p></h1>
     <p>User Id:{{user.id}}</p></br>
     <p>Email:{{user.email}}</p></br>
     <p>Address:</br>Street:{{user.address.street}}
     Suite:{{user.address.suite}}
     City:{{user.address.city}}
     ZipCode:{{user.address.zipcode}}</p></br>
     <p>Geo Location:</br>Latitude:{{user.lat}}
     Longitude:{{user.lng}}</p>
     <p>Phone:{{user.phone}}</p>
     <p>Website:{{user.website}}</p>
     <p>Company:</br>name:{{user.company.name}}
     Catch Phrase:{{user.company.catchPhrase}}
     BS:{{user.company.bs}}</p>
      </li>
   </ul>

 </div>
</template>

<script>
import WebService from '@/services/WebService'

export default {
 name: 'HelloWorld',
 data () {
   return {
     users:{},
     posts:[]
       }
 },
 mounted() {
   WebService.getCall('users').then((response)=>{
     this.users=response.data
   })
   WebService.getCall('posts').then((response)=>{
     this.posts=response.data
     alert(this.posts)
   })
 },
 methods: {
   getPosts (id) {
     alert(id)
    this.posts.map(function (value, key) {
         alert(key)
     })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
 font-weight: normal;
}
ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
a {
 color: #42b983;
}
</style>
<template>
<div class="hello">
 <ul>
    <li v-for="(user, index) in users" :key="'index'"><h1><p v-on:click="getPosts(user.id)">{{user.name}}</p></h1>
    <p>User Id:{{user.id}}</p></br>
    <p>Email:{{user.email}}</p></br>
    <p>Address:</br>Street:{{user.address.street}}
    Suite:{{user.address.suite}}
    City:{{user.address.city}}
    ZipCode:{{user.address.zipcode}}</p></br>
    <p>Geo Location:</br>Latitude:{{user.lat}}
    Longitude:{{user.lng}}</p>
    <p>Phone:{{user.phone}}</p>
    <p>Website:{{user.website}}</p>
    <p>Company:</br>name:{{user.company.name}}
    Catch Phrase:{{user.company.catchPhrase}}
    BS:{{user.company.bs}}</p>
     </li>
  </ul>

</div>
</template>

<script>
import WebService from '@/services/WebService'

export default {
 name: 'HelloWorld',
 data () {
   return {
     users: {},
     posts: {}
   }
 },
 mounted() {
   WebService.getCall('users').then((response)=>{
     this.users=response.data
   })
   WebService.getCall('posts').then((response)=>{
     this.posts = response.data.posts
   })
 },
 methods: {
   getPosts (id) {
     alert(this.posts)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>


