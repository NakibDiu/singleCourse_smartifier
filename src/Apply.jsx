import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Container, CssBaseline } from '@material-ui/core';
import ReactPlayer from 'react-player';

var url = "https://youtu.be/wZRN-rZj3iU"

const useStyle = makeStyles(() => ({
    mainContainer: {
        maxHeight: "650px",
        minHeight: "650px",
        minWidth: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "8%",
    },
    player: {
        position: "relative",
        minWidth: "80%",
        maxHeight: "550px",
        minHeight: "450px",
        backgroundColor: "red",
    },
    
}))


const Apply = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className={classes.mainContainer}>
                <ReactPlayer
                controls url = {url}
                poster = "http://source.unsplash.com/random"
                className = {classes.player}
                />
            </Container>
        </>
    )
};


export default Apply;