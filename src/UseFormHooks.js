import React from 'react';
import { useForm } from 'react-hook-form';

function UseFormHooks(props) {
    const { register, handleSubmit ,formState: { errors }} = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          email:'',
          category: '',
          checkbox: [],
          radio: ''
        }
      });
      function onSubmit(data){
          console.log("data",data)
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First name" />
    
          <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />
          <input
    placeholder="Email"
    {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    })}
    type="email"
    required
    className="input"
/>
{errors.email && <span>Invalid mail id</span>}
          <select {...register("category")}>
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
          
          <input {...register("checkbox")} type="checkbox" value="A" />
          <input {...register("checkbox")} type="checkbox" value="B" />
          <input {...register("checkbox")} type="checkbox" value="C" />
          
          <input {...register("radio")} type="radio" value="A" />
          <input {...register("radio")} type="radio" value="B" />
          <input {...register("radio")} type="radio" value="C" />
          {errors.lastName && <span>Invalid last name</span>}
          <input type="submit" />
        </form>
      );
}

export default UseFormHooks;