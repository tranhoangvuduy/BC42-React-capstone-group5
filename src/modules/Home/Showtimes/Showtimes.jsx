import React, { useState, useEffect } from "react";
import styles from "./Showtimes.module.scss";
import {
  apiGetHeThongRap,
  apiGetCumRap,
  apiGetLichChieuRap,
  apiGetLichChieuPhim,
} from "../../../apis/cinemaAPI";
import { Tabs } from "antd";
import moment from "moment";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Showtimes() {
  const { TabPane } = Tabs;
  const [heThongRap, setHeThongRap] = useState([]);
  const [cumRap, setCumRap] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabPosition, setTabPosition] = useState("left");
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  // const [maLichChieuPhim, setMaLichChieuPhim] = useState;
  const navigate = useNavigate();

  const getHeThongRap = async () => {
    try {
      const data = await apiGetHeThongRap();
      setHeThongRap(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const getLichChieuRap = async () => {
    try {
      const data = await apiGetLichChieuRap(maHeThongRap);
      console.log(data.content);
      setCumRap(data.content);
      return data.content;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeThongRap();
    getLichChieuRap();
  }, [maHeThongRap]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const handleChangeTabPosition = (value, e) => {
    setTabPosition(value);
  };
  return (
    <>
      <div id="cumrap" dir="left" className={styles.container}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap.map((heThong, index) => {
            return (
              <TabPane
                style={{ height: "580px" }}
                key={index}
                tab={
                  <img
                    style={{ height: "50px" }}
                    src={heThong.logo}
                    alt="logo"
                    onClick={() => setMaHeThongRap(heThong.maHeThongRap)}
                  />
                }
              >
                <Tabs tabPosition={tabPosition}>
                  {cumRap[0]?.lstCumRap?.slice(0, 6).map((cumRap, subIndex) => {
                    return (
                      <TabPane
                        className={styles.cinemaTabPanel}
                        key={subIndex}
                        tab={
                          <>
                            <h1
                              style={{
                                fontSize: "large",
                                textAlign: "justify",
                                width: "500px",
                              }}
                            >
                              {cumRap.tenCumRap}
                            </h1>
                            <p style={{ textAlign: "justify", width: "500px" }}>
                              {cumRap.diaChi}
                            </p>
                          </>
                        }
                      >
                        {cumRap?.danhSachPhim.map((phim, index) => {
                          return (
                            <div className={styles.movie}>
                              <div>
                                <img
                                  src={phim.hinhAnh}
                                  style={{
                                    width: "145px",
                                    height: "150px",
                                  }}
                                  alt="img"
                                />
                              </div>
                              <div style={{ marginLeft: "5px" }}>
                                <p
                                  style={{
                                    fontSize: "large",
                                    textAlign: "justify",
                                    fontWeight: "700",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {phim.tenPhim}
                                </p>
                                <div>
                                  <Container style={{ width: "345px" }}>
                                    <Row>
                                      {phim?.lstLichChieuTheoPhim
                                        .slice(0, 4)
                                        ?.map((lich, index) => {
                                          return (
                                            <Col
                                              xs={6}
                                              md={6}
                                              onClick={() =>
                                                navigate(
                                                  `/booking/${lich.maLichChieu}`
                                                )
                                              }
                                            >
                                              <p
                                                className={styles.lichChieu}
                                                key={index}
                                                style={{
                                                  textAlign: "center",
                                                  border: "1px solid rgb(255, 127, 155) ",
                                                  borderRadius: "4px",
                                                  margin: "6px 0",
                                                }}
                                              >
                                                {moment(
                                                  lich.ngayChieuGioChieu
                                                ).format("DD/MM ~ hh:mm A")}
                                              </p>
                                            </Col>
                                          );
                                        })}
                                    </Row>
                                  </Container>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </>
  );
}

export default Showtimes;