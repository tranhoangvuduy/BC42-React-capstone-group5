import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
import { signin } from '../../../slices/userSlice';
import { Link, Outlet } from 'react-router-dom'

function Signin() {
   const schema = yup.object({
    taikhoan: yup.string().required("*Tài khoản không được để trống"),
    matkhau: yup.string().required("*Mật khẩu không được để trống")
   })

   // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,"mật khẩu ít nhất 8 kí tự, 1 số, 1 chữ hoa"
    const {user, isLoading, error} = useSelector((state) => state.user)
    const dispatch = useDispatch();

     const { register, handleSubmit, formState: { errors}, } = useForm({
        //khai bao gia tri khoi tao input
        defaultValues: {
            taikhoan: "",
            matkhau: "",
        },
        resolver: yupResolver(schema),
     });
   
     const onSubmit = (values) => {
        dispatch(signin(values));
     }

     const onError = (errors) => {
        console.log(errors);
     }

     if(user) {
        return <Navigate to="/" />
      
     }

  return (
    <div>
      <h3 className='text-center'>Loggin</h3>

      <form className='form-group col-sm-10 mx-auto' onSubmit={handleSubmit(onSubmit,onError)}>

        <div className="mb-3 form-group">
          <input className='form-control' type="text" placeholder="Tài Khoản" {...register("taikhoan")} />

           {errors.taikhoan && <p style={{color: 'red'}} >{errors.taikhoan.message}</p> }
        </div>

        <div className="mb-3 form-group">
          <input  className='form-control' type="password" placeholder="Password" {...register("matkhau")} />

           {errors.matkhau && <p style={{color: 'red'}} >{errors.matkhau.message}</p>}
        </div>

        {error && <p> {error} </p>}
        <button disabled = {isLoading}>Submit</button>
      </form>
      <Link className='nav nav-link text-end' to='/Signup'>Đăng kí tại đây</Link>
      
    </div>
  );
}

export default Signin