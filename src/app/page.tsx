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
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AppBar,
    Toolbar,
    Breadcrumbs,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
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
