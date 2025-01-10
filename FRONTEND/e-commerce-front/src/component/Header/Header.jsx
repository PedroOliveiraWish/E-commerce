import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { BsCart, BsPerson } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1E1E1E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "#FF6FAE",
              fontWeight: "bold",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            ✨ BeautyStore
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/payment")}
              sx={{
                color: "#FFFFFF",
                borderColor: "#FF6FAE",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "#FF6FAE", color: "#FFFFFF" },
              }}
              variant="outlined"
            >
              <BsPerson /> Payment
            </Button>
            <Button
              onClick={() => navigate("/")}
              sx={{
                color: "#FFFFFF",
                borderColor: "#FF6FAE",
                marginX: 2,
                "&:hover": { backgroundColor: "#FF6FAE", color: "#FFFFFF" },
              }}
              variant="outlined"
            >
              <BsPerson />  Login
            </Button>
            <Button
              onClick={() => navigate("/cart")}
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#FF6FAE",
                "&:hover": { backgroundColor: "#D4609E" },
              }}
            >
              <BsCart /> Cart
            </Button>
          </Box>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#FFFFFF" }}
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#1E1E1E",
            height: "100%",
            color: "#FFFFFF",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem button onClick={() => navigate("/payment")} style={{cursor: 'pointer'}}>
              <BsPerson style={{ marginRight: 8 }} />
              <ListItemText primary="Payment" />
            </ListItem>
            <ListItem button onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
              <BsPerson style={{ marginRight: 8 }} />
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => navigate("/cart")} style={{cursor: 'pointer'}}>
              <BsCart style={{ marginRight: 8 }} />
              <ListItemText primary="Cart" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "url(https://wallpapers.com/images/hd/makeup-brush-powder-art-q4e4bg9wujkivnvk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#FF6FAE",
              textShadow: "2px 2px #4E1182",
            }}
          >
            Discover Your True Beauty ✨
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#CCCCCC", marginTop: 2 }}
          >
            Exclusive deals on the best beauty and skincare products.
          </Typography>
        </Box>
      </motion.div>
    </>
  );
}

export default Header;
