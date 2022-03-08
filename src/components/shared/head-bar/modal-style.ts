import Modal from "react-modal";

export const switchStylesDefault: Modal.Styles = {
  overlay: {
    backgroundColor: "0",
    top: "15vw",
  },
  content: {
    overflow: "hidden",
    position: "absolute",
    inset: "0 0 0 64vw",
    width: "30vw",
    height: "6vh",
    padding: "0",
    borderRadius: "16px",
    border: "none",
    boxShadow:
      " 0 4px 4px 0 rgba(0, 0, 0, 0.2),  0 4px 10px 0 rgba(0, 0, 0, 0.10)",
  },
};

export const switchStylesComplex: Modal.Styles = {
  overlay: {
    backgroundColor: "0",
    top: "15vw",
  },
  content: {
    overflow: "hidden",
    position: "absolute",
    inset: "0 0 0 64vw",
    width: "30vw",
    height: "12vh",
    padding: "0",
    borderRadius: "16px",
    border: "none",
    boxShadow:
      " 0 4px 4px 0 rgba(0, 0, 0, 0.2),  0 4px 10px 0 rgba(0, 0, 0, 0.10)",
  },
};

export const customCenterStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0 ,0, 0.6 )",
  },
  content: {
    position: "absolute",
    inset: "30vh 0 0 5vw",
    width: "80vw",
    height: "15vh",
    border: "none",
    borderRadius: "20px",
    boxShadow:
      " 0 4px 4px 0 rgba(0, 0, 0, 0.2),  0 4px 10px 0 rgba(0, 0, 0, 0.10)",
  },
};
