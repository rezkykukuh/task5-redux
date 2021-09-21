import React, { useState } from "react";
import ToDo from "./components/todo";
import { useDispatch } from "react-redux";
import ToDoList from '../pages/components/todolist';
import { addTodo, updateTodo } from "./redux/todoslice";
import Styles from '../styles/Home.module.scss'


export default function Home() {
  const dispatch = useDispatch()
  const[update, setUpdate] = useState({id:null, status:false});
  const [ form, setForm ] = useState({
    title :"",
    quantity:"",
    price:"",
  });


  function handleChange(e){
    let data = {...form};
    data[e.target.name]= e.target.value;
    setForm(data);
  }  
  
function handleSubmit(e) {
  e.preventDefault();
  if (
    (form.title === "",
    form.quantity === "",
    form.price === "")
  ) {
    return false;
  }

  //pengecekan
  if(update.status){
    dispatch(
    updateTodo({
        id : update.id,
        title : form.title,
        quantity : form.quantity,
        price : form.price,
      }));
      alert("data telah diedit");
    }
    else{
    //menambah data
    dispatch(
      addTodo({
        title: form.title,
        quantity: form.quantity,
        price: form.price,
      })
    );
    alert("penambahan data berhasil");
  }
   setForm({title:"", price: "", quantity:""});
   setUpdate({ id: null, status: false });
  };

  
  const handleEdit = (todo) => {
    setForm({
      title: todo.title,
      quantity: todo.quantity,
      price: todo.price,
    });
    setUpdate({ id: todo.id, status: true });
  };

  return (
   
    <div className='container'>
      <div className={Styles.section}>
        <form onSubmit={handleSubmit}>
        <input name="title" value={form.title}  type="text" onChange={handleChange} placeholder="title"/><br/>
        <input type="number" value={form.quantity} name="quantity" onChange={handleChange} placeholder="quantity"/><br/>
        <input name="price" value={form.price} type="text" onChange={handleChange} placeholder="price"/><br/>
        <input className={Styles.button} type="button" onClick={handleSubmit} placeholder="tambah" value="tambah"/>
        </form>
       
    </div>
    <h2>List</h2>
    <ToDoList todos={ToDo} handleEdit={handleEdit} />
    </div>
   )
 }