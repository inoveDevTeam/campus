import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WarningIcon from "@mui/icons-material/Warning";
import { grey, yellow } from "@mui/material/colors";
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';

const CuotasIconTitle = ({ numero }) => {
  const renderContent = () => {
    switch (numero) {
      case 0:
        return (
          <MoneyOffCsredIcon
            style={{
              color: "black",
              fontSize: "50px",
              marginRight: "20px",
            }}
          />
        );
      case 1:
        return (
          <AccessTimeFilledIcon
            style={{
              color: grey[600],
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 2:
        return (
          <CheckCircleOutlineIcon
            style={{
              color: "green",
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 3:
        return (
          <WarningIcon
            style={{
              color: yellow[600],
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 4:
        return (
          <WarningIcon
            style={{
              color: "red",
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      case 5:
        return (
          <CancelIcon
            style={{
              color: "red",
              fontSize: "50px",
              marginRight: "20px"
            }}
          />
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default CuotasIconTitle;
