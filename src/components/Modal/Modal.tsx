import { useForm } from "react-hook-form";
import styles from "./Modal.module.scss";

interface ModalPropsInterface {
  onModalClose: any;
  isOpened: boolean;
}

const Modal: React.FC<ModalPropsInterface> = ({ onModalClose, isOpened }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={`${styles.modalWrapper} ${isOpened ? "open" : "closed"}`}>
      <div className={styles.modalBody}>
        <div className={styles.close} onClick={onModalClose}>
          close
        </div>
        <h2>Please fill the form</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            {" "}
            Name:
            <input
              {...register("name", { required: "please enter your name" })}
            />
          </label>
          <div>{errors?.name && <p>{errors?.name?.message || "Error"}</p>}</div>

          <label>
            Adress:
            <input
              {...register("adress", { required: "please enter your adress" })}
            />
          </label>
          <div>
            {errors?.adress && <p>{errors?.adress?.message || "Error"}</p>}
          </div>

          <label>
            Phone number:
            <input
              {...register("phone", { required: "please enter your phone number" })}
            />
          </label>
          <div>
            {errors?.adress && <p>{errors?.adress?.message || "Error"}</p>}
          </div>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Modal;
