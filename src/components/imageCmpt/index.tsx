interface image {
  title?: string;
  src: string;
  className?: string;
  width?: string;
  height?: string;
  href?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Image: React.FC<image> = ({
  title,
  src,
  className,
  width,
  height,
  href,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  return (
    <>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img
          src={src}
          alt={title}
          className={className}
          width={width}
          height={height}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...rest}
        />
      </a>
    </>
  );
};

export default Image;
