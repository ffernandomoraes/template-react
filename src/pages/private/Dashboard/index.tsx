import { useNavigate } from 'react-router-dom';

import { Button, Typography } from 'antd';

import styled, { StyledProp } from '@eduzz/houston-ui/styled';

function Dashboard({ className }: StyledProp) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Typography.Title>Dashboard</Typography.Title>

      <Typography.Paragraph>
        React boilerplate with TypeScript, Ant Design, Emotion, Eslint, Prettier. ❤️
      </Typography.Paragraph>

      <Button type='primary' onClick={() => navigate('/login')}>
        Login page
      </Button>
    </div>
  );
}

export default styled(Dashboard)`
  text-align: center;
`;
