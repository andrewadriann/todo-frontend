<template>
<div>
<div>Selamat Datang {{myText}}</div>
<ul>
      <li v-for="(item,idx) in todos" :key="item.id">{{idx+1}} - {{item.deskripsi}}<button @click="hapus(item.id)">X</button> </li>
</ul>
<input v-model="myText">
<button @click="tambah">Add</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data:function(){
    return{
      todos:[],
      myText: ''
    } 
    },
    created: () => {
      axios.get(http://localhost/3000/todo)
      .then(result=>{
        this.todos = result.data
      })
    },
    methods: { 
    tambah: function(){      
      const newItem = {deskripsi :this.myText}
      axios.post('http://localhost:3000/todo',newItem)
      this.todos.push(newItem)
      this.myText=""
      
    },
    hapus:function(id){
      axios.delete('http://localhost:3000/todo/delete/${id}').then(()=>{
        for (var i=0;i<this.newItem.length;i++) {
          if(this.newItem[i].id==id)
              this.newItem.splice(i,1)
          
        }})
    } 
  }
}