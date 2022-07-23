import { prettyDOM } from '@testing-library/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

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
          //call api
          //axios.get('https://upskill-ecommerce-app.herokuapp.com/api/addproduct').then()
        //  axios.post('https://upskill-ecommerce-app.herokuapp.com/api/addproduct',data).then()
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true })} placeholder="First name" />
          {errors.firstName && <span>Invalid first name</span>}
          <input {...register("lastName", { minLength: 5 })} placeholder="Last name" />
          {errors.lastName && <span>Invalid last name</span>}
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
         {/* <img src={prettyDOM.ImgUrl}></img> */}
          <input type="submit" />
        </form>
      );
}

export default UseFormHooks;