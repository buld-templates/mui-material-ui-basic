import * as Mui from '@mui/material';
import Image from 'next/image';

export const metadata = {};

const Home = () => {
  return (
    <Mui.Container sx={{ marginTop: '5rem' }}>
      <Mui.Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Mui.Typography variant="h1">My new Website</Mui.Typography>
        <Mui.Typography variant="h4">Under Construction</Mui.Typography>
        <Mui.Typography variant="body1" align="center" sx={{ mt: 2 }}>
          We are working hard to bring you something amazing. Stay tuned!
        </Mui.Typography>
        <Mui.Box sx={{ mt: 3 }}>
          <Mui.Button variant="contained" size="large" color="primary">
            Notify Me
          </Mui.Button>
        </Mui.Box>
      </Mui.Box>
    </Mui.Container>
  );
};

export default Home;
