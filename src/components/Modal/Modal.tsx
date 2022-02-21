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
        <div className={styles.form_header}>
          <h4>Please fill the form</h4>
          <button className={styles.close_button} onClick={onModalClose}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.modalForm}>
          <div className={styles.formFieldWrapper}>
            <input
              placeholder="Name"
              {...register("name", { required: "please enter your name" })}
            />

            <div className={styles.errors}>
              {errors?.name && <p>{errors?.name?.message || "Error"}</p>}
            </div>
          </div>

          <div className={styles.formFieldWrapper}>
            <input
              placeholder="Address"
              {...register("address", {
                required: "please enter your address",
              })}
            />

            <div className={styles.errors}>
              {errors?.address && <p>{errors?.address?.message || "Error"}</p>}
            </div>
          </div>

          <div className={styles.formFieldWrapper}>
            <input
              placeholder="Phone"
              {...register("phone", {
                required: "please enter your phone number",
              })}
            />

            <div className={styles.errors}>
              {errors?.phone && <p>{errors?.phone?.message || "Error"}</p>}
            </div>
          </div>

          <div className={styles.formFieldWrapper}>
            <input
              placeholder="Credit card"
              {...register("card", {
                required: "please enter your credit card number",
                pattern:
                  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
              })}
            />

            <div className={styles.errors}>
              {errors?.card && <p>enter 16 digits of your card</p>}
            </div>
          </div>

          <input type="submit" value="Submit" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
