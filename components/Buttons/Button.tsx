interface IButton {
  text?: string;
  backgroundColor: string;
  textColor?: string;
  onClick: () => void;
  isIcon?: boolean;
  isIconAndText?: boolean;
  Icon?: any;
  customStyle?: {};
}

export default function Button({
  text,
  backgroundColor,
  textColor = "#ffffff",
  onClick,
  isIcon,
  isIconAndText,
  Icon,
  customStyle,
}: IButton) {
  if (isIcon) {
    return (
      <button
        type="button"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          ...customStyle,
        }}
        className={`btn`}
        onClick={onClick}
      >
        {Icon}
      </button>
    );
  }
  if (isIconAndText) {
    return (
      <button
        type="button"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          ...customStyle,
        }}
        className={`btn`}
        onClick={onClick}
      >
        {Icon} {text}
      </button>
    );
  }
  return (
    <button
      type="button"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        ...customStyle,
      }}
      className={`btn`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
