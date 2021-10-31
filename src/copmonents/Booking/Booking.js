import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const{user} = useAuth();
    const {serviceId} = useParams();
    const [singleService,setSingleService] = useState({});
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
      fetch('https://damp-hollows-28113.herokuapp.com/orders',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      console.log(data)
      reset();
      alert('Your Booking is confirmed.Thank You for trusting Us');
    };

    useEffect(()=>{
        fetch(`https://damp-hollows-28113.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setSingleService(data))
    },[])
    
    return (
        <div className="container mx-auto mt-4 pb-2 booking">
   <div className="mx-3">
   <Card style={{ width: '25rem' }} className="mx-auto p-3">
  <Card.Img variant="top" src={singleService.img}/>
  <Card.Body>
    <Card.Title>{singleService.title}</Card.Title>
    <Card.Text>
      {singleService.description}
    </Card.Text>
    <Card.Text>
      {singleService.price}
    </Card.Text>
    
  </Card.Body>

</Card>
   </div>
        <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input className='w-100 p-2 m-2'  defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} />
                <input className='w-100 p-2 m-2' defaultValue={user?.email} {...register("email")} />
                {singleService?.title && <input defaultValue={singleService.title} className='w-100 p-2 m-2' {...register("destination",{required:true})} />}
                <input className='w-100 p-2 m-2' {...register("address",{required:true})} placeholder="address" />
                <input className='w-100 p-2 m-2' {...register("city",{required:true})} placeholder="city" />
                <input className='w-100 p-2 m-2' type="number" {...register("person", { min: 1, max: 80,required:true})} placeholder="person" />
                <input className='w-100 p-2 m-2 bg-primary border-0 text-white' type="submit" />
            </form>
        </div>
        </div>
    );
};

export default Booking;