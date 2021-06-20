<template>
  <div>
    <h1>Berikut adalah daftar tugas kita</h1>
    <ul>
      <li v-for="item in todos" :key="item.id">{{ item.description}}<button @click="hapus(item.id)">X</button></li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambah">Add</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      todos: [],
      myText: ''
    }
  },
  created: function () {
    let username = localStorage.getItem('usr)
    let password = localStorage.getItem('pwd)
    axios.get('http://localhost:3000/todo', {headers: {username, passwords}})
    .then(result => {
      this.todos = result.data   
    })
  },
  methods: {
    tambah: function () {
    let username = localStorage.getItem('usr)
    let password = localStorage.getItem('pwd)
      const newItem = {description: this.myText}
      axios.post('http://localhost:3000/todo', newItem, {headers: {username, passwords}}))
        .then((res) => {
          this.todos.push(newItem)
        });
      this.myText = ''
    },
    hapus: function (id) {
    let username = localStorage.getItem('usr)
    let password = localStorage.getItem('pwd)
      axios.delete(`http://localhost:3000/todo/${id}`,{headers: {username, passwords}})
        .then(() => {
          for(var i = 0; i< this.todos.length; i++){
            if(this.todos[i].id == id) {
              this.todos.splice(i,1)
            }
          }
        })
    }
  }
}
</script>