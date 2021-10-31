import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data => {
    fetch('https://damp-hollows-28113.herokuapp.com/addservice',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    console.log(data)
    reset();
  };
    return (
        <div>
            <h2 className="text-center">Add Service</h2>
            <div className="mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="booking d-flex flex-column">
                <input className='w-25 p-2 m-2' {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input className='w-25 p-2 m-2' {...register("description")} placeholder="description" />
                <input className='w-25 p-2 m-2' {...register("img")} placeholder="image"/>
                <input className='w-25 p-2 m-2' type="number" {...register("price", { min: 18, max: 99 })} placeholder="price" />
                <input className='bg-primary border border-0 px-2 py-2 m-2 text-white' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddService;