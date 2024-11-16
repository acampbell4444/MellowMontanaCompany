import { FC, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer.tsx";
// import "@fontsource/quicksand";

type Item = {
  id: number;
  title: string;
  images: string[];
  description: string[]; // Change to array of strings for bullet points
  price: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Hydraulic Pump",
    images: ["/pump1.jpg", "/pump2.jpg"],
    description: [
      "Delta Q LTD. Houston, TX. #77070",
      "Customer part number: CCT121850709S",
      "Ocean Pro friendly",
      "Rated pressure: 4000",
      "Setting: 2300/400",
      "Made in USA",
    ],
    price: "$1000", //TODO: check price
  },
  {
    id: 2,
    title: "CWS Levelwind + Pawl",
    images: ["/levelwind1.jpg"],
    description: [
      "Brand new",
      `CWSLG Levelwind Bar Ocean Pro Type (19")`,
      `CWS Directional Pawl Ocean Pro`,
    ],
    price: "$500", //695 ORIGINALLY
  },
  {
    id: 3,
    title: "CWS swivel",
    images: ["/swivel1.jpg", "/swivel2.jpg"],
    description: [
      "Brand new",
      "CWSSV CWS Swivel",
      "CWS Ocean Pro",
    ],
    price: "$600",
  },
  {
    id: 4,
    title: "Harnesses",
    images: ["/harness1.jpg", "/harness2.jpg"],
    description: [
      "Sold as a lot",
      "10 Custom Chutes Harnesses",
      "3 Sports Chutes Harnesses",
      "2 old pieces of Crap",
    ],
    price: "$1500",
  },
  {
    id: 5,
    title: "Triples Bar",
    images: ["/trip1.jpg", "/trip2.jpg"],
    description: [
      "Great condition",
      "Solid",
    ],
    price: "$500",
  },
  {
    id: 6,
    title: "Chutes",
    images: ["/37-1.jpg", "/37-2.jpg", "39-1.jpg", "39-2.jpg"],
    description: [
      "Used, sold as a lot",
      "37' Sports Chute- American Flag",
      `39' Sports Chute, White, Says "I \u2665 Havasu"`,
      "Used, no major rips/tears",
      "Great for training",
      "Do not use commercially unless inspected and, if necessary, repaired",
    ],
    price: "$800 total",
  },
];

const theme = createTheme({
  palette: {
    primary: { main: "#FF7043" },
    secondary: { main: "#FFCC80" },
  },
  typography: {
    h4: { fontFamily: "quicksand, sans-serif" },
    h5: { fontFamily: "quicksand, sans-serif" },
    button: { fontWeight: 600 },
  },
});

const Gallery: FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleOpen = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: "#2E2E2E" }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, textAlign: "center", color: "#fff" }}
          >
            Sky-High Deals on Parasail Gear
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                sx={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(50px)",
                  transition: `all 0.6s ease ${index * 0.2}s`,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    bgcolor: "#2E2E2E",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.images[0]}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" color="white">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleOpen(item)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />

      <Dialog
        open={Boolean(selectedItem)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ "& .MuiPaper-root": { borderRadius: 3, overflow: "hidden" } }}
      >
        {selectedItem
          ? (
            <>
              <AppBar position="relative" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                  <Typography
                    variant="h5"
                    sx={{
                      flexGrow: 1,
                      color: "#fff",
                      fontFamily: "quicksand, sans-serif",
                    }}
                  >
                    {selectedItem.title}
                  </Typography>
                  <IconButton edge="end" color="inherit" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <DialogContent>
                <ImageList
                  cols={1}
                  gap={8}
                  sx={{ maxHeight: "50vh", overflowY: "auto" }}
                >
                  {selectedItem.images.map((image, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={image}
                        alt={`${selectedItem.title} - ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <Box sx={{ p: 1 }}>
                  <Typography variant="body1" color="text.primary">
                    Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedItem.description.map((point, index) => (
                      <Typography
                        component="li"
                        key={index}
                        variant="body2"
                        color="text.secondary"
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    variant="h6"
                    color="secondary"
                    sx={{ mt: 2, color: "#2E2E2E" }}
                  >
                    {selectedItem.price}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, color: "#2E2E2E" }}>
                    Interested? Email to buy:{"  "}
                    <a
                      href="mailto:alancampbell4444@gmail.com"
                      style={{
                        color: "#FF7043",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      alancampbell4444@gmail.com
                    </a>
                  </Typography>
                </Box>
              </DialogContent>
            </>
          )
          : null}
      </Dialog>
    </ThemeProvider>
  );
};

export default Gallery;
