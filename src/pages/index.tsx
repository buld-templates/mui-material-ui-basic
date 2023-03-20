import { NextPage } from "next";
import {
  Box,
  Button,
  Typography,
  Checkbox,
  Switch,
  TextField,
  Rating,
  Slider,
  Fab,
  Avatar,
  Chip,
  Divider,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box>
      <Typography variant="h1">Hello from template</Typography>
      <Button variant="contained" size="large" color="error">
        Button
      </Button>
    </Box>
  );
};

export default Home;
