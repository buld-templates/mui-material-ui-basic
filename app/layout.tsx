import * as Mui from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import PlausibleProvider from 'next-plausible';

export const metadata = {
  title: 'Buld template',
  description: 'This is a basic Buld template with Material UI',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
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
