import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Container, CssBaseline, IconButton, Typography } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
var url = "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const useStyle = makeStyles(() => ({
    mainContainer: {
        maxHeight: "100%",
        minWidth: "100%",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "8%"
    },
    container: {
        padding: "0",
        minWidth: "70%",
        minHeight: "450px",
        maxHeight: "650px",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center top",
        border: ".05px solid black",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
    },
    iconContainer:{
        position: "relative",
        width: "100%",
        minheight: "50%",
        borderRadius: '0',
        margin: "0 auto",
        zIndex: "1"
    },
    icon: {
        color: "white",
        fontSize: "80px",
        position: "relative",
        backgroundColor: " rgba(0, 160, 255, 0.5)",
    },
    innerBox: {
        position: "absolute",
        bottom: "0",
        backgroundColor: " rgba(0, 160, 255, 0.5)",
    },
    innerText: {
        color: "white",
        fontWeight: "600",
        fontSize: "95px",
        padding: "3.5px",
        paddingLeft: "16px",
        paddingRight: "150px",
    },
    innerText2: {
        color: "white",
        fontWeight: "lighter",
        fontSize: "50px",
        padding: "1px",
        paddingLeft: "16px",
       
    },
    gradient: {
        position: "absolute",
        minWidth: "100%",
        height: "63%",
        background: "transparent linear-gradient(0deg, #966BC2 0%, #437BBE59 80%) 0% 0% no-repeat padding-box",
        bottom: "0"
    }
}))


const Apply = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className={classes.mainContainer}>
                <Box className={classes.container}>
                    <IconButton className = {classes.iconContainer}>
                        <PlayArrowIcon className = {classes.icon} />
                    </IconButton>
                    {/* <Box className = {classes.innerBox}>
                        <Typography variant = "h2" className = {classes.innerText}>
                            Apply today
                        </Typography>
                        <Typography variant = "h4" className = {classes.innerText2}>
                            UX Writing Course
                        </Typography>
                    </Box> */}
                    <Box className = {classes.gradient}></Box>
                </Box>
            </Container>
        </>
    )
};


export default Apply;