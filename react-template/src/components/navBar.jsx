import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

const Nav = (props) => {
    return (
    <Grid container spacing={2}>
        <Grid item>       
            <HomeIcon/>
            <TextField>{props.fileName}</TextField>
        </Grid>
    </Grid>
  );
};
export default Nav;
