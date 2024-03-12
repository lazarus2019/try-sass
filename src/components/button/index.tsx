import classNames from './styles.module.scss';
export const Button = () => {
  return (
    <button className={classNames.button}>
      <p className={classNames.paragraph}>Click me</p>
    </button>
  );
};
