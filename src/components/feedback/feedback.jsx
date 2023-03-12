import css from './feedback.module.css';

export const Feedback = () => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <div className={css.buttonWrapper}>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </>
  );
};
