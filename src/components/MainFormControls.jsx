import { useContext } from "react";
import { CvStateContext } from "../CvStateContext";

export default function MainFormControls() {
  const CvState = useContext(CvStateContext);
  const buttonText = CvState === "editing" ? "submit" : "edit";
  return (
    <section style={{ display: "flex", gap: "2rem" }}>
      <button
        type="submit"
        aria-label={buttonText}
        aria-description="the original form will change"
      >
        {buttonText}
      </button>
      <button type="reset" onClick={() => window.location.reload()}>
        reset
      </button>
    </section>
  );
}
