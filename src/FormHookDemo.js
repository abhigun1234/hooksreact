import React from 'react';
import { useForm } from 'react-hook-form';

function FormHookDemo(props) {
    const { register, handleSubmit ,formState: { errors }} = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',

        }
      });
      function onSubmit(data){
            console.log("data",data)

      }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} placeholder="First name" />
  
        <input {...register} placeholder="Last name" />
   

     
       
        <input type="submit" />
      </form>
    );
}

export default FormHookDemo;