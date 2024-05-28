import { Container } from '@mui/material';
import {Apply} from "./Apply.tsx";

export const App = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h2>USB機器情報</h2>
      <Apply/>
    </Container>
  );
};