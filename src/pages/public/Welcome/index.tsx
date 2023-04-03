import { Button, Typography } from 'antd';

import styled, { StyledProp } from '@/styled';

function Welcome({ ...rest }: StyledProp) {
  return (
    <div {...rest}>
      <Typography.Title>Welcome</Typography.Title>

      <Typography.Paragraph>
        React boilerplate with TypeScript, Ant Design, Emotion, Vite, Eslint, Prettier. ❤️
      </Typography.Paragraph>

      <Button type='primary'>React with Typescript</Button>
    </div>
  );
}

export default styled(Welcome)`
  text-align: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
