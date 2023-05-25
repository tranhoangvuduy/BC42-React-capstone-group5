import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from '../../../slices/userSignup';

function Signup() {

  const schema = yup.object({
    taikhoan: yup.string().required("Tài khoản không được để trống"),
    matkhau: yup.string().required("Mật khẩu không được để trống"),
    hovaten: yup.string().required("không được để trống"),
    email: yup.string().email().required("Email không được để trống"),
    sdt: yup.string().required("không được để trống")
  })

  // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,"mật khẩu ít nhất 8 kí tự, 1 số, 1 chữ hoa"),

  const { user,isLoading, error} = useSelector((state) => state.user)
  const dispatch = useDispatch();


  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      maNhom: "GP05",
      maLoaiNguoiDung: "KhachHang",
      soDt: "",
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (value) => {
    dispatch(signup(value));
  }

  const onError = (errors) => {
    console.log(errors);
  }

  // if(user){
  //   return <Navigate to="/Signin" />
  // }

  return (
    <div>
      <h3 className='text-center'> Đăng ký </h3>

      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <div>
          <h6>Tài Khoản</h6>
          <input className='form-control' type="text" {...register('taikhoan')} />

          {errors.taikhoan && <p style={{color: 'red'}}>{errors.taikhoan.message}</p>}
        </div>
        <div>
          <h6>Mật khẩu</h6>
          <input className='form-control' type="password" {...register('matkhau')} />

          {errors.matkhau && <p style={{color: 'red'}}>{errors.matkhau.message}</p>}
        </div>
        <div>
          <h6>Họ và tên</h6>
          <input className='form-control' type="text" {...register('hovaten')}/>
          
          {errors.hovaten && <p style={{color: 'red'}}>{errors.hovaten.message}</p>}
        </div>
        <div>
          <h6>Email</h6>
          <input className='form-control' type="email" {...register('email')} />

          {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
        </div>
        <div>
          <h6>Số Điện Thoại</h6>
          <input className='form-control' type="number" {...register('sdt')} />

          {errors.sdt && <p style={{color: 'red'}}>{errors.sdt.message}</p>}
        </div>

        {error && <p> {error} </p>}
        <button disabled={isLoading}> Đăng ký </button>
      </form>
    </div>
  )
}

export default Signup