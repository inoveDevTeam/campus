import "../App.css";
import { useEffect, useState } from "react";
import CardCuotas from "../components/Cards/CardCuotas.jsx";
import Divider from "@mui/material/Divider";
import CustomizedDialogs from "../utils/AlerDialogCustomization.jsx";
import CircularColor from "../utils/CircularProgress.jsx";
import CuotasImg from "../model/CuotasImg.jsx";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { cuotasAPI } from "../api/cuotasAPI";
import styles from "./Cuotas.module.css";

export default function Cuotas() {
  const [data, setData] = useState([]);
  const [btnAlertTextDialogs, setBtnAlertTextDialogs] = useState("");
  const [btnAlertTitleDialogs, setBtnAlertTitleDialogs] = useState("");
  const [objChoose, setObjChoose] = useState([]);
  const [isCustomizedDialogs, setIsCustomizedDialogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cuotasAPI
      .get()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(`${error.response.status} | ${error.response.data.detail}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOpenDialog = (dialog, title, btn) => {
    setBtnAlertTextDialogs(dialog);
    setBtnAlertTitleDialogs(title);
    setIsCustomizedDialogs(true);
    setObjChoose(btn);
  };

  const handleBtnCenter = (dialog, title, btn) => {
    setBtnAlertTextDialogs(dialog);
    setBtnAlertTitleDialogs(title);
    setObjChoose(btn);
    setIsCustomizedDialogs(true);
  };

  const handleCloseCustomizedDialogs = () => {
    setIsCustomizedDialogs(false);
  };

  return (
    <>
      <h1 className={styles.titleCard}>Mis pagos</h1>
      <Divider
        variant="middle"
        color="white"
        style={{
          marginBottom: "15px",
        }}
      />
      {isLoading ? (
        <CircularColor />
      ) : data ? (
        <section className={styles.containerCard}>
          {data.map((element, index) => {
            return (
              <article
                key={index}
                className={styles.articleCard}
              >
                {
                  <CardCuotas
                    key={element.id}
                    cuota_id={element.id}
                    title={element.name}
                    numero={element.status}
                    imageUrl={
                      element.btn_center != null ? (
                        <CuotasImg
                          element={element.btn_center}
                          handleBtn={handleBtnCenter}
                          numero={element.btn_center.type}
                        />
                      ) : null
                    }
                    icon={
                      element.btn_left != null ? (
                        <CuotasImg
                          element={element.btn_left}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_left.type}
                        />
                      ) : null
                    }
                    messegeIcon={
                      element.btn_left != null ? element.btn_left.text : null
                    }
                    status_text={element.status_text}
                    status_color={element.status_color}
                    cuota={element.cuota}
                    amount={element.amount}
                    date={element.expiration_date}
                    status={element.status}
                    btn_right={
                      element.btn_right != null ? element.btn_right : null
                    }
                    classNameMain={styles.backgroundCardCuotas}
                  />
                }
                <CustomizedDialogs
                  open={isCustomizedDialogs}
                  handleClose={handleCloseCustomizedDialogs}
                  text={btnAlertTextDialogs}
                  title={btnAlertTitleDialogs}
                  btn={objChoose}
                />
              </article>
            );
          })}
        </section>
      ) : null}
    </>
  );
}
