import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { perfilAPI } from "../../api/perfilAPI";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircularColor from "../../utils/CircularProgress";
import { useTheme } from "@mui/material/styles";
import RatingWithValoration from "../../utils/RatingWithValoration";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import { CalendarMonth } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import cuit from "../../assets/cuitx24.png";
import styles from "./CardPerfil.module.css";

function CardPerfil() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { username } = useParams();
  const theme = useTheme();
  const [mediaQueryMatches, setMediaQueryMatches] = useState(false);

  useEffect(() => {
    perfilAPI
      .get(username)
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(`${error.response.status} | ${error.response.data.detail}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 409px)");
    const handleMediaQueryChange = (event) => {
      setMediaQueryMatches(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setMediaQueryMatches(mediaQuery.matches);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularColor />
      ) : data ? (
        <section
          className={`${styles.borderStyle} ${styles.sectionPrincipal} ${
            mediaQueryMatches
              ? styles.containerFullScreen
              : styles.containerResponsiveScreen
          }`}
        >
          <article className={styles.articleMain}>
            <CardHeader
              sx={{ display: "flex", flexDirection: "row" }}
              avatar={
                <Avatar
                  sx={{ width: 72, height: 72, color: "#008588" }}
                  aria-label="recipe"
                >
                  {username[0].toUpperCase()}
                </Avatar>
              }
              title={
                <h2 style={{ textAlign: "start" }}>{`${data.full_name}`}</h2>
              }
              subheader={
                <div
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: "25px",
                  }}
                >
                  <Typography>{data.cargo}</Typography>
                  <Typography>{data.country}</Typography>
                </div>
              }
            />
          </article>
          <Box
            className={styles.box}
            sx={{
              marginTop: mediaQueryMatches ? "-55px" : "0px",
            }}
          >
            <TextField
              id="outlined-read-only-input"
              label="Acerca de"
              multiline
              value={`${
                data.description === ""
                  ? "No hay descripción"
                  : data.description
              }`}
              InputProps={{
                readOnly: true,
                shrink: true,
                className: styles.InputPropsAcercaDe,
              }}
              InputLabelProps={{
                style: {
                  marginTop: "1px",
                  margdescriptioninLeft: "-1px",
                },
              }}
              style={{
                width: "100%",
              }}
              variant="outlined"
            />
          </Box>
          <Box
            className={styles.box}
            sx={{
              marginTop: mediaQueryMatches ? "-45px" : "0px",
              height: mediaQueryMatches ? "330px" : "210px",
            }}
          >
            <TextField
              id="outlined-read-only-input"
              label="Destacado"
              multiline
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: mediaQueryMatches ? "15px" : "0px",
                      marginRight: mediaQueryMatches ? "15px" : "0px",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={1}>
                      <InputAdornment position="start">
                        <SchoolIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        {data.estudiantes == 0
                          ? "No tiene estudiantes"
                          : `${data.estudiantes} estudiantes`}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <InputAdornment position="start">
                        <CalendarMonthIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        Miembro de inove desde {data.miembro_desde}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <InputAdornment position="start">
                        <DiamondIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        {data.desarrollos == null
                          ? "No tiene desarrollos"
                          : data.desarrollos}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <InputAdornment position="start">
                        <StarIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        {data.destacado == null
                          ? "N/A"
                          : "Cuadro de honor: " + data.destacado}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection={"row"}
                      width={"200px"}
                      alignItems="center"
                      flexWrap={"wrap"}
                      mb={1}
                    >
                      <Typography variant="body1">
                        <RatingWithValoration
                          style={{ marginRight: "5px", marginTop: "5px" }}
                          valoracion={4}
                          cantidadOpiniones={400}
                          tamanio={mediaQueryMatches}
                        />
                      </Typography>
                    </Box>
                  </Box>
                ),
                className: styles.boxDestacado,
                style: {
                  maxHeight: mediaQueryMatches ? "330px" : "210px",
                },
              }}
              InputLabelProps={{
                style: {
                  marginTop: "1px",
                  marginLeft: "-1px",
                },
              }}
              style={{
                width: "100%",
              }}
              variant="outlined"
            />
          </Box>
          <Box className={styles.box}>
            <TextField
              id="outlined-read-only-input"
              label="Actividad"
              multiline
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "-35px",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={1}>
                      <InputAdornment position="start">
                        <SchoolIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        {" "}
                        {`Cursando: ${
                          data.cursando == null ? "Ningun curso" : data.cursando
                        }`}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1}>
                      <InputAdornment position="start">
                        <LoginIcon style={{ marginRight: "5px" }} />
                      </InputAdornment>
                      <Typography variant="body1">
                        {" "}
                        {`Ultimo login: ${
                          data.last_login == null ? "Nunca" : data.last_login
                        }`}
                      </Typography>
                    </Box>
                  </Box>
                ),
                className: styles.startAdornmentBoxActividad,
              }}
              InputLabelProps={{
                style: {
                  marginTop: "1px",
                  marginLeft: "-1px",
                },
              }}
              style={{
                width: "100%",
                marginTop: mediaQueryMatches ? "-40px" : "0px",
              }}
              variant="outlined"
            />
          </Box>
          {!data.readonly ? (
            <Box
              className={styles.boxDatosSobreTi}
              sx={{
                marginTop: mediaQueryMatches ? "-45px" : "0px",
                height: mediaQueryMatches ? "400px" : "275px",
              }}
            >
              <TextField
                id="outlined-read-only-input"
                label="Datos (solo para ti)"
                multiline
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: mediaQueryMatches ? "15px" : "35px",
                      }}
                    >
                      <Box display="flex" alignItems="center" mb={1}>
                        <InputAdornment position="start">
                          <BadgeIcon style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography variant="body1">
                          {" "}
                          {`Dni: ${
                            data.dni == null
                              ? "No tiene dni agregado"
                              : data.dni
                          }`}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        marginTop={"-0px"}
                        alignItems="center"
                        mb={1}
                      >
                        <InputAdornment position="start">
                          <PhoneIcon style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography variant="body1">
                          {" "}
                          {`Contacto: ${
                            data.phone == null
                              ? "No hay telefono registrado"
                              : data.phone
                          }`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" flexWrap="wrap">
                        <InputAdornment
                          position="start"
                          style={{ marginRight: "5px", flexShrink: 0 }}
                        >
                          <CalendarMonth style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography
                          variant="body1"
                          style={{
                            wordWrap: "break-word",
                            maxWidth: mediaQueryMatches
                              ? "calc(80% - 50px)"
                              : "calc(100% - 50px)",
                            flex: 1,
                            minWidth: 0,
                            marginTop: "10px",
                          }}
                        >
                          {" "}
                          {`Fecha de nacimiento: ${
                            data.birth == null
                              ? "No hay fecha registrada"
                              : data.birth
                          }`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <InputAdornment position="start">
                          <LocationOnIcon style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography variant="body1">
                          {" "}
                          {`Dirección: ${
                            data.address == null
                              ? "No registrada"
                              : data.address
                          }`}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginTop={"10px"}
                      >
                        <InputAdornment position="start">
                          <GpsFixedIcon style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography variant="body1">
                          {" "}
                          {`Ciudad: ${
                            data.city == null ? "No registrada" : data.city
                          }`}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginTop={"10px"}
                      >
                        <InputAdornment position="start">
                          <img
                            src={cuit}
                            alt="cuit"
                            style={{ background: "white" }}
                          />
                        </InputAdornment>
                        <Typography variant="body1">
                          {" "}
                          {`Cuit: ${
                            data.cuit == null ? "No registrado" : data.cuit
                          }`}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" flexWrap="wrap">
                        <InputAdornment
                          position="start"
                          style={{ marginRight: "5px", flexShrink: 0 }}
                        >
                          <AssignmentIndIcon style={{ marginRight: "5px" }} />
                        </InputAdornment>
                        <Typography
                          variant="body1"
                          style={{
                            wordWrap: "break-word",
                            maxWidth: mediaQueryMatches
                              ? "calc(80% - 50px)"
                              : "calc(100% - 50px)",
                            flex: 1,
                            minWidth: 0,
                            marginTop: "10px",
                          }}
                        >
                          {`${
                            data.linkedin == null
                              ? "Linkedin no registrado"
                              : data.linkedin
                          }`}
                        </Typography>
                      </Box>
                    </Box>
                  ),
                  style: {
                    maxHeight: mediaQueryMatches ? "401px" : "275px",
                    fontSize: "16px",
                    width: "100%",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "normal",
                  },
                }}
                InputLabelProps={{
                  style: {
                    marginTop: "1px",
                    marginLeft: "-1px",
                  },
                }}
                style={{
                  width: "100%",
                }}
                variant="outlined"
              />
            </Box>
          ) : null}
        </section>
      ) : null}
    </>
  );
}

export default CardPerfil;
