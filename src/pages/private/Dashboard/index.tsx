import { useNavigate } from 'react-router-dom';

import { Button, Typography } from 'antd';

import styled, { StyledProp } from '@/styled';

function Dashboard({ className }: StyledProp) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Typography.Title>Dashboard</Typography.Title>

      <Button type='primary' onClick={() => navigate('/')}>
        Go to Welcome page
      </Button>
    </div>
  );
}

export default styled(Dashboard)``;
