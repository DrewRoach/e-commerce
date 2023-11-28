
interface button {
  text: string;
  width: number;
  height: number;
  disabled: boolean;
  onClick?(): void;
}
export const Button = (buttonProps: button) => {
  const { text, width, height, onClick, disabled } = buttonProps;
  return (
    <>
      <button disabled={disabled} onClick={onClick} style={{ width: width, height: height }}>
        {text}
      </button>
    </>
  );
};
