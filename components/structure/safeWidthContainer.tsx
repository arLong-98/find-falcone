import clsx from 'clsx';

export interface SafeWidthContainerProps {
  children: React.ReactNode;
  className?: string | Array<string>;
}

const SafeWidthContainer: React.FC<SafeWidthContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        ['mx-auto max-w-[1440px] px-[30px] tablet:px-[70px]'],
        className
      )}
    >
      {children}
    </div>
  );
};

export default SafeWidthContainer;
