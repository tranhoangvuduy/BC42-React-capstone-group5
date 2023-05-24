import axiosClient from './axiosClient'

export const apiSignin = async(values) => {
    const { data } = await axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
    return data;
};

export const apiSignup = async(values) => {

    const { data } = await axiosClient.post("/QuanLyNguoiDung/DangKy", values);
    return data;
}