import { toast } from "react-toastify";
import type { ToastOptions, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

/* -------------------- Types -------------------- */

type ToastType = "success" | "error" | "info" | "warning";
type ToastPositionType = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface ShowToastOptions {
  type?: ToastType;
  message: string;
  duration?: number;
  position?: ToastPositionType;
}

/* -------------------- Config -------------------- */

// Map string positions to ToastPosition
const toastPositions: Record<ToastPositionType, ToastPosition> = {
  "top-right": "top-right",
  "top-left": "top-left",
  "bottom-right": "bottom-right",
  "bottom-left": "bottom-left",
};

// Map toast type to color and icon
const toastConfig: Record<
  ToastType,
  { color: string; icon: any }
> = {
  success: { color: "green", icon: <FaCheckCircle /> },
  error: { color: "#ff4d4f", icon: <FaExclamationCircle /> },
  info: { color: "skyblue", icon: <FaInfoCircle /> },
  warning: { color: "#f59e0b", icon: <FaExclamationTriangle /> },
};

/* -------------------- Function -------------------- */

export const showToast = ({
  type = "info",
  message,
  duration = 3000,
  position = "top-right",
}: ShowToastOptions): void => {
  const config = toastConfig[type];

  const options: ToastOptions = {
    position: toastPositions[position],
    autoClose: duration,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    icon: config.icon,
    style: {
      borderRadius: "8px",
      padding: "12px 16px",
      fontWeight: 500,
      fontSize: "14px",
      color: config.color,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
  }
};
