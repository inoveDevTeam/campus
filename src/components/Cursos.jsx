import CircularWithValueLabel from "../utils/CircularProgressWithLabel.jsx";
import { useEffect, useState } from "react";
import CardCursos from "../components/Cards/CardCursos.jsx";
import Divider from "@mui/material/Divider";
import CustomizedDialogs from "../utils/AlerDialogCustomization.jsx";
import CircularColor from "../utils/CircularProgress.jsx";
import CursosImg from "../model/CursosImg.jsx";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { cursosAPI } from "../api/cursosAPI";
import styles from "./Cursos.module.css";

export default function CurrentCourses() {
  const [data, setData] = useState([]);
  const [btnAlertTextDialogs, setBtnAlertTextDialogs] = useState("");
  const [btnAlertTitleDialogs, setBtnAlertTitleDialogs] = useState("");
  const [objChoose, setObjChoose] = useState([]);
  const [isCustomizedDialogs, setIsCustomizedDialogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cursosAPI
      .get()
      .then((response) => {
        setData(response.results);
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
      <h1 className={styles.titleCard}>Mis cursos</h1>
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
                key={element.id}
                style={{ display: "flex", marginLeft: "20px",
              }}
              >
                {
                  <CardCursos
                    key={element.id}
                    title={element.name}
                    imageUrl={
                      element.btn_center != null ? (
                        <CursosImg
                          element={element.btn_center}
                          handleBtn={handleBtnCenter}
                          numero={element.btn_center.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    commission={element.code}
                    date={element.start_date + " al " + element.end_date}
                    days={element.horario_cursada}
                    icon={
                      element.btn_left != null ? (
                        <CursosImg
                          element={element.btn_left}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_left.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    messegeIcon={
                      element.btn_left != null ? element.btn_left.text : null
                    }
                    icon2={
                      element.btn_right != null ? (
                        <CursosImg
                          element={element.btn_right}
                          handleBtn={handleOpenDialog}
                          numero={element.btn_right.type}
                          desafios={element.desafios}
                          proyecto={element.proyecto}
                        />
                      ) : null
                    }
                    messegeIcon2={
                      element.btn_right != null ? element.btn_right.text : null
                    }
                    iconTitle={(() => {
                      let iconComponent;

                      if (!element.disabled) {
                        //Si no esta disable, y desafios y proyecto son false, muestro CircleProgress
                        if (!element.desafios || !element.proyecto) {
                          iconComponent = (
                            <CircularWithValueLabel
                              attendance={element.attendance}
                            />
                          );
                        } else {
                          //Si ambos son true, la copa es dorada, si no gris + presentismo
                          !element.desafios && !element.proyecto
                            ? (iconComponent = (
                                <div className={styles.iconComponent}>
                                  <div style={{ marginRight: "-15px" }}>
                                    <CircularWithValueLabel
                                      attendance={element.attendance}
                                    />
                                  </div>
                                  <div>
                                    <EmojiEventsIcon 
                                      className={styles.emojiEventsIconGold}
                                    />
                                  </div>
                                </div>
                              ))
                            : (iconComponent = (
                                <div className={styles.iconComponent}>
                                  <div style={{ marginRight: "-15px" }}>
                                    <CircularWithValueLabel
                                      attendance={element.attendance}
                                    />
                                  </div>
                                  <div>
                                    <EmojiEventsIcon style={{fontSize: "35px"}}
                                      className={styles.emojiEventsIconGrey}
                                    />
                                  </div>
                                </div>
                              ));
                        }
                      }

                      return iconComponent;
                    })()}
                    classNameMain={
                      element.is_disable || element.disabled
                        ? styles.backgroundCardNotStartedDisable
                        : styles.backgroundCardIACurrentCourses
                    }
                    classNameSecondary={
                      element.id == 20
                        ? styles.imageContainerPI
                        : styles.imageContainer
                    }
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
