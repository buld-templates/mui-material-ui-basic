import * as Mui from '@mui/material';
import Image from 'next/image';
import theme from './theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import PlausibleProvider from 'next-plausible';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: 'Buld template',
  description: 'This is a basic Buld template with Material UI',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="" />
      </head>
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Mui.ScopedCssBaseline>{children}</Mui.ScopedCssBaseline>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
