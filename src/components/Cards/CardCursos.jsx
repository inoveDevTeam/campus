import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import styles from "./CardCursos.module.css";
import "../../App.css";

function CardCursos(props) {

  const {
    title,
    imageUrl,
    commission,
    date,
    days,
    info,
    messegeIcon,
    messegeIcon2,
    icon,
    icon2,
    iconTitle,
    classNameMain,
    classNameSecondary,
  } = props;

  return (
    <Card sx={{ boxShadow: '-8px 8px 26px -7px rgba(0,0,0,0.57)'}} className={classNameMain}>
      <div
        style={{ marginLeft: "15px", marginRight: "10px", lineHeight: "22px" }}
        className={classnames(styles.centeredContent, styles.titleH2)}
      >

        <p className={styles.parrafTitle}> {title} </p>

        {iconTitle}
      </div>

      <div style={{ background: "#191A26" }} className={styles.effectIcon}>
        {imageUrl}
      </div>
      <CardContent>
          <div className={styles.titleH3}>
            Comisión: {commission}
            <br />
            Del {date}
            <br />
            {days}
            <br />
            {info}
          </div>
        <div className={styles.contentIcons}>
          <div className={classnames(styles.effectIcon, styles.effectLeftIcon)} >
            {icon}
            <p className={styles.message}>{messegeIcon}</p>
          </div>
          <div className={classnames(styles.effectRightIcon, styles.effectRightIcon, messegeIcon2 === 'Certificado' ? styles.effectRightIconWithGap : styles.effectRightIconWithOutGap)}>
            {icon2}
            <p className={classnames(styles.message)}>{messegeIcon2}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardCursos;
