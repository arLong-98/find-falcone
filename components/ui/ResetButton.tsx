'use client';

import Button from '@/components/input/Button';

const ResetButton: React.FC<ResetButtonProps> = () => {
  function resetState() {
    console.log('reset');
  }
  return <Button onClick={resetState}>Reset</Button>;
};

export interface ResetButtonProps {}

export default ResetButton;
