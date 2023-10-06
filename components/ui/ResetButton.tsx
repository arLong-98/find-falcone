'use client';

import Button from '../input/Button';

export interface ResetButtonProps {}

const ResetButton: React.FC<ResetButtonProps> = () => {
  function resetState() {
    console.log('reset');
  }
  return <Button onClick={resetState}>Reset</Button>;
};

export default ResetButton;
