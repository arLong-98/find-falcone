import ResetButton from '@/components/ui/ResetButton';

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='hidden tablet:flex tablet:h-[100px] tablet:items-center tablet:justify-between tablet:px-[70px] tablet:py-[27px]'>
      <h1>Finding Falcone</h1>
      <div>
        <ResetButton />
      </div>
    </header>
  );
};

export interface HeaderProps {}

export default Header;
