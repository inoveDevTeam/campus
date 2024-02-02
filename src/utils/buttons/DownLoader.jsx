import React from "react";
import { requestAPI } from "../../api/apiRequest";
import Button from "@mui/material/Button";
import CustomSnackbar from "../SnackBar";

function DownLoader({ textButton, nroCuota }) {
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [successSnackbar, setSuccessSnackbar] = React.useState(false);
  const [errorSnackbarText, setErrorSnackbarText] = React.useState("Error al descargar el archivo.")
  const [successSnackbarText, setSuccessSnackbarText] = React.useState("Archivo descargado con éxito.")

  const handleSnackbarClose = () => {
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  const api = requestAPI;
  // const handleDownload = async () => {
  //   if(api.get(nroCuota)) {
  //     console.log("DIO OK???")
  //     setSuccessSnackbar(true);
  //     return;
  //   }
  //   console.log("DIO ERROR???")
  //   setErrorSnackbarText("Error al descargar el archivo.")
  //   setErrorSnackbar(true);
  //   console.log("Descargar comprobantes")
  // };
  const handleDownload = async () => {
    console.log(nroCuota)
    try {
      const result = await api.get(nroCuota);
      setSuccessSnackbar(true);
      // return result;
    } catch (error) {
      setErrorSnackbarText("No hay archivo para descargar.");
      setErrorSnackbar(true);
    }
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          type="button"
          onClick={handleDownload}
          style={{ width: "130px" }}
        >
          {textButton}
        </Button>
      </div>
      <CustomSnackbar
        open={successSnackbar}
        onClose={handleSnackbarClose}
        message={successSnackbarText}
        severity="success"
        duration={4000}
      />
      <CustomSnackbar
        open={errorSnackbar}
        onClose={handleSnackbarClose}
        message={errorSnackbarText}
        severity="error"
        duration={4000}
      />
    </>
  );
}

export default DownLoader;
