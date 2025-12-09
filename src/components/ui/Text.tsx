import { twMerge } from "tailwind-merge";

interface TextPropTypes {
  children: React.ReactNode;
  className?: string;
  as?: string;

  id?: string;
  onClick?: () => void;
}

const Text: React.FC<TextPropTypes> = (props) => {
  const { className, children, as, onClick, id } = props;

  if (as === "h1") {
    return (
      <h1
        id={id}
        className={twMerge(
          "text-primary text-[24px] leading-[33px] tracking-[-4%] md:text-[72px] md:leading-[76px] font-medium font-mona-sans",
          className
        )}
      >
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2
        id={id}
        className={twMerge(
          "text-primary text-[24px] leading-[33px]  md:text-[72px] md:leading-[76px] font-medium font-mona-sans",

          className
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <p
      className={twMerge(
        "text-primary text-[16px] leading-[22px] font-normal font-mona-sans",
        className
      )}
      onClick={onClick}
      id={id}
    >
      {children}
    </p>
  );
};

export default Text;
