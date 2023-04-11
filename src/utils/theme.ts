import { createTheme } from "@mui/material/styles";
import type { LinkProps } from "@mui/material";
import { LinkBehaviour } from "./Link";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      paper: "#999",
      default: "#DDD",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      } as LinkProps,
    },
  },
});

export default theme;
