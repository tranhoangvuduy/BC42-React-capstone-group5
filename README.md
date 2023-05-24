### Cấu trúc project
+ Thư Viện/
-routing: reactt-router-dom
- redux: @reduxjs/toolkit, react-redux
- Làm việc với form: react-hook-form hoặc forrmik
- API: Axios
- styles: sass ( npm i -D sass)
- UI: react-bootstrap, material-ui,...
s

+ src /
- components /
- Chứa các presentational component ( các component chỉ thuần về giao diện có thẻ tái sủ dụng ở nhiều nơi trong ứng dụng ). VD: Button, Sidebar, Header, ...
- các components này thường sẽ chỉ có local state và nhận vào props để hiện thị giao diện, thường không chứa logic nghiệp vụ của ứng dụng ( Call API )

+ modules/
-chứa các components đại diện cho 1 chức năng / trang cụ thể trong ứng dụng 
- Các components này thường sẽ có chứa logic nghiệp vụ của ứng dụng ( Call API, redux,...)

+ API/
 - chứa phần setup các phương thức gọi API ( axios)
 - chứa các hàm gọi API