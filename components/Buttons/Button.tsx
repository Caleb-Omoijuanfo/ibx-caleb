interface IButton {
  text: string;
  backgroundColor: string;
  textColor?: string;
}

export default function Button({
  text,
  backgroundColor,
  textColor = "#ffffff",
}: IButton) {
  return (
    <button
      type="button"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`btn`}
    >
      {text}
    </button>
  );
}
