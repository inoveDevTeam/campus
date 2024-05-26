import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./CardCuotas.module.css";
import classnames from "classnames";
import CuotasIconTitle from "../../model/CuotasIconTitle.jsx";
import Uploader from "../../utils/buttons/UpLoader.jsx";
import DownLoader from "../../utils/buttons/DownLoader.jsx";
import DownloadIcon from '@mui/icons-material/Download';

function CardCuotas(props) {
  const {
    cuota_id,
    title,
    date,
    numero,
    cuota,
    amount,
    messegeIcon,
    status_text,
    status_color,
    icon,
    status,
    btn_right,
    classNameMain,
  } = props;
  const inoveYellow = '#FAF74D';
  const inoveGreen = '#C4F071';
  const inoveRed = '#EE146D';
  const getStatusColor = (statusColor) => {
    return statusColor === 'red' ? inoveRed : statusColor === 'green' ? inoveGreen : statusColor === 'yellow' | statusColor === 'orange' ? inoveYellow : statusColor === 'black' ? 'white' : statusColor
  }
  return (
    <Card sx={{ boxShadow: '-8px 8px 26px -7px rgba(0,0,0,0.57)' }} className={classNameMain}>
      <div className={classnames(styles.centeredContent, styles.titleH2)}>
        <p className={styles.parrafTitle}> {title} </p>
        {<CuotasIconTitle numero={numero} />}
      </div>

      <div>
        <div className={styles.flexContainer}>
          <h2 style={{ color: getStatusColor(status_color) }}>
            <b>{status_text}</b>
          </h2>
        </div>
      </div>
      <CardContent style={{ marginTop: "-20px", color: 'white' }}>
        <div style={{ textAlign: "start" }}>
          <p style={{ marginBottom: "-10px" }}>Pago N°{cuota}</p>
          <p style={{ marginBottom: "-10px" }}>{amount}</p>
          <p style={{
            marginBottom: "15px",
            color: status_text === 'CUOTA VENCIDA' ? 'white' : getStatusColor(status_color),
            background: status_text === 'CUOTA VENCIDA' ? inoveRed : null,
            paddingLeft: status_text === 'CUOTA VENCIDA' ? '10px' : null,
            borderRadius: status_text === 'CUOTA VENCIDA' ? '10px' : null,
          }}>{status_text === 'PAGADO' ? 'Cuota saldada' : status_text === 'CUOTA VENCIDA' ? `Venció el ${date}` : `Vence el ${date}`}</p>
        </div>
        <div className={styles.imageContainerCuotas} >
          {console.log(btn_right == null)}
          <div style={btn_right == null ? { className: styles.imageContainerCuotas } : { marginLeft: "15px", marginRight: "-15px" }}>
            <div className={styles.effectIcon}>{icon}</div>
            {messegeIcon === 'Descargar Recibo' ? ' Recibo' : messegeIcon}

          </div>
          <div className={styles.effectIcon}>
            {(() => {
              if (btn_right == null) { return null }
              switch (btn_right.type) {
                case 19:
                  return (
                    <DownLoader
                      textButton="Ver comprobante"
                      nroCuota={cuota_id}
                    />
                  );
                case 18:
                  return (
                    <Uploader
                      textButton="Subir comprobante"
                      nroCuota={cuota_id}
                    />
                  );
              }
            })()}
          </div>
        </div>
      </CardContent>
    </Card >
  );
}

export default CardCuotas;
