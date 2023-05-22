import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { signin } from "../../../slices/userSlice";

// Định nghĩa các xác thực cho từng input
const schema = yup.object({
  taiKhoan: yup.string().required("Tài khoản không được để trống"),
  matKhau: yup.string().required("Mật khẩu không được để trống").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số"),
});

function Signin() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
    // khai báo schema validation bằng yup
    resolver: yupResolver(schema),
  });

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchParams, setSearchPrams] = useSearchParams();
  console.log(searchParams.get("redirectUrl"));

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  const onError = (errors) => {
    console.log(errors);
  };
  //  kiểm tra nếu có thông tin user => đã đăng nhập => điều hướng về trang Home
  if (user) {
    const url = searchParams.get("redirectUrl") || "/";
    return <Navigate to={url} />;
  }

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input type="text" placeholder='Tài khoản' {...register("taiKhoan")} />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div>
          <input type="password" placeholder='Mật khẩu' {...register("matKhau")} />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>
        {/* hiển thị lỗi servert trả về. VD: trường hợp sai tài khoản mật khẩu */}
        {error && <p>{error}</p>}

        <button disabled={isLoading}>Đăng nhập</button>

      </form>


    </div>
  )
}
// {...register("matKhau", {
//   required: {
//     value: true,
//     message: "Mật khẩu không được để trống",
//   },
//   pattern: {
//     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//     message: "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số",
//   }
// })}

export default Signin