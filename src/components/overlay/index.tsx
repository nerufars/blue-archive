interface Props {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

const Overlay = ({ children, className, style, ...rest }: Props) => {
  return (
    <>
      <section className={className} style={style} {...rest}>
        {children}
      </section>
    </>
  );
};

export default Overlay;
