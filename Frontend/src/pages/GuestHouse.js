import React,{useEffect, useState} from "react";
import {Link, link} from 'react-router-dom';
import axios from "axios";
import './StarClass.css';
import GuestImg from '../images/GuestHouseImg.png';


 function GuestHouse(){

    const[GuestHouse,setGuestHouse]= useState([]);

    
    const updateHotel=(id)=>{
    
        sessionStorage.editGuest_id=id;
        window.location = `http://localhost:3000/updateGuestHouse/?${id}`;

    }


    useEffect(()=>{
        function getGuestHouse(){
            axios.get("http://localhost:8070/GuestHouse/Display1/").then((res)=>{
            console.log(res.data);
                setGuestHouse(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
            
        }getGuestHouse();
    },[])
   


    const deleteHotel=async(id)=>{
        let result=await fetch(`http://localhost:8070/GuestHouse/delete/${id}`,{
            method : "Delete"
        });
        result= await result.json();
        if(result){
            alert("Hotel deleted");
        }
    }

    const[searchTerm,setSearchTerm]=useState("");

    return(

       <div className="hfbehbf">
<div className="StarImage">
   <img src ={GuestImg} class="StarMain" alt="Image"/>
   <div class="topic">#Visit Sri Lanka</div>
   <div class="title">Guest Houses</div>
   <a href="http://localhost:3000/AddGuestHouse">
    <button id="addbutton" type="submit" className="btn btn-primary">Add Hotel</button>
   </a>
   < a href="http://localhost:3000/boutiquePDF" id="report"> Report</a>
   <div class= "search">
      <input  type="text"  placeholder="Search By Place" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      
      </div>

   </div>

    <div className="table-class">
  <table class="table">
    <thead></thead>
   <tbody>


   {
    GuestHouse.filter(val=>{
        if(searchTerm===""){
            return val; }
          else if(
            val.Location.toLowerCase().includes(searchTerm.toLowerCase()) )
            {
             return val
             }
            }).map((guesthouses,key)=>(
        <tr key={key}>
            <td>
          <div className ="image-wrapper"  >
            <img src={guesthouses.Image} class="ImageUpload"alt={guesthouses.Name}   />
            </div>
            </td>
            <td>
            <div className="details-wrapper">
            <div className="hotel-name">{guesthouses.Name}</div>
            <div className="hotel-category"> Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; &nbsp; {guesthouses.Category}</div>
            <div className="hotel-location"> Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   :&nbsp;&nbsp;&nbsp;  {guesthouses.Location}</div>
            <div className="hotel-contact">  Contact No&nbsp; :&nbsp;&nbsp;  {guesthouses.Contact}</div>
            <div className="hotel-booking"><a href={guesthouses.Booking}>For Bookings</a></div>
             </div>
        </td>
        <td>{<button id="delete"  className="btn btn-primary" onClick={() => {deleteHotel(guesthouses._id);
                    refreshPage()}}>Delete</button>}{<button id="update" class="button" className="btn btn-primary" onClick={() =>updateHotel(guesthouses._id)}>Update</button>}
                    
        </td>
        </tr>
    ))
   }
   </tbody>
    




  </table>
</div>
</div>
    )
    function refreshPage(){
        window.location.reload(false);
       }
}
export default GuestHouse