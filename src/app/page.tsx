import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import NextLink from "next/link";

const Home = () => {
    return (
        <Container sx={{ marginTop: '5rem' }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h1">My new Website</Typography>
                <Typography variant="h4">Under Construction</Typography>
                <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                    We are working hard to bring you something amazing. Stay tuned!
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Button variant="contained" size="large" color="primary">
                        Notify Me
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
