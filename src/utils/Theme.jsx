import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import blue from "@mui/material/colors/blue";
import green from "@mui/material/colors/green";
import { grey } from "@mui/material/colors";
import AvertaStdBold from "../assets/fonts/avertaStandard/AvertaStd-Bold.ttf";
import AvertaStdSemibold from "../assets/fonts/avertaStandard/AvertaStd-Semibold.ttf";
import AvertaStdRegular from "../assets/fonts/avertaStandard/AvertaStd-Regular.ttf";

const theme = extendTheme({
  typography: {
    fontFamily:
      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif, AvertaStd-Bold, AvertaStd-Semibold",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'AvertaStd-Bold';
          src: local('AvertaStd-Bold'), url(${AvertaStdBold}) format('truetype');
        }
        @font-face {
          font-family: 'AvertaStd-Semibold';
          src: local('AvertaStd-Semibold'), url(${AvertaStdSemibold}) format('truetype');
        }
        @font-face {
          font-family: 'AvertaStd-Regular';
          src: local('AvertaStd-Regular'), url(${AvertaStdRegular}) format('truetype');
        }
        `,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        action: {
          active: "black",
        },
        primary: {
          main: blue[300],
        },
        text: {
          primary: "black",
        },
        button: {
          pepeButton: red[600],
          bgButton: "black",
        },
        border: {
          border: "10px solid black",
        },
        dividerBar: {
          background: "black",
        },
        textTitle: {
          color: grey[900],
        },
        colorButtonText: {
          color: "white",
          fontSize: "clamp(1.25rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "red",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },
        titleH3: {
          fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCoursesRecommended: {
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCuotas: {
          background:
            "linear-gradient(to right top, #969696, #838383, #717171, #5f5f5f, #4e4e4e);",
          borderRadius: "22px",
          marginTop: "5%",
        },
        backgroundCardNotStarted: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #969696 1.57%, #4E4E4E 98.56%)",
        },
        backgroundCardFinished: {
          borderRadius: "22px",
          background:
            "linear-gradient(38deg, #9EFF9E 0%, #4CAF50 50%, #087f23 100%)",
        },
        middleTitle: {
          color: "black",
        },
        colorIcons: {
          color: "black",
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              maxWidth: "410px",
              background: "#5a5a5a",
              border: "1px solid black",
              flexWrap: "wrap",
              color: "white",
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              color: "white",
            },
            icon: {
              color: "white",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid black",
              width: "40%",
              background: "#00a6fb",
              color: "var(--mui-palette-colorButtonText-color)",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            h1: { fontFamily: "AvertaStd-Bold" },
            h2: {
              color: "white",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "AvertaStd-Bold",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5",
            },
            h3: { fontFamily: "AvertaStd-Semibold" },
            h4: { fontFamily: "AvertaStd-Semibold" },
            h5: { fontFamily: "AvertaStd-Semibold" },
            h6: { fontFamily: "AvertaStd-Semibold" },
            subtitle1: { fontFamily: "AvertaStd-Semibold" },
            subtitle2: { fontFamily: "AvertaStd-Semibold" },
            body1: { fontFamily: "AvertaStd-Semibold" },
            body2: { fontFamily: "AvertaStd-Semibold" },
            button: { fontFamily: "AvertaStd-Semibold" },
            caption: { fontFamily: "AvertaStd-Semibold" },
            overline: { fontFamily: "AvertaStd-Semibold" },
          },
        },
      },
    },
    dark: {
      palette: {
        action: {
          active: "white", // Reemplaza 'tu-color-preferido' con el color deseado
        },
        primary: {
          main: grey[300],
        },
        text: {
          primary: "white",
        },
        button: {
          pepeButton: green[300],
          bgButton: "white",
        },
        textTitle: {
          color: grey[900],
        },
        colorButtonText: {
          color: "black",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "yellow",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },
        titleH3: {
          fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
        },
        background: {
          paper: "black",
        },
        border: {
          border: "10px solid white",
        },
        dividerBar: {
          background: "white",
        },
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCuotas: {
          background:
            "linear-gradient(to right top, #969696, #838383, #717171, #5f5f5f, #4e4e4e);",
          borderRadius: "22px",
          marginTop: "5%",
          border: "0px ",
        },
        backgroundCardCoursesRecommended: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
        },
        backgroundCardNotStarted: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #969696 1.57%, #4E4E4E 98.56%)",
        },
        backgroundCardFinished: {
          borderRadius: "22px",
          background:
            "linear-gradient(38deg, #9EFF9E 0%, #4CAF50 50%, #087f23 100%)",
        },
        middleTitle: {
          color: "var(--mui-palette-text-secondary)",
        },
        colorIcons: {
          color: "white",
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              maxWidth: "410px",
              background: "#5a5a5a",
              border: "1px solid black",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid",
              width: "40%",
              background: "#00a6fb",
              color: "var(--mui-palette-colorButtonText-color)",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            h2: {
              color: "white",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "AvertaStd-Semibold",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5",
            },
          },
        },
      },
    },
  },
});

export default theme;
