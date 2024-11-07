import "./Spinner.css";
import { CircularProgress } from "@mui/material";

export default function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress size={40} />
    </div>
  );
}
