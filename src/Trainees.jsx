import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Container, CssBaseline, Typography, Card, Avatar, Box, CardMedia} from '@material-ui/core'


const useStyle = makeStyles(() => ({
    container: {
        padding: "0",
        margin: "3% 0",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    cards: {
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
        position: "relative",
        ['@media (max-width: 650px)']: {
            flexDirection: "column",
        }
    },
    outerBox: {
        height: "250px",
        width: "250px",
        background: "transparent linear-gradient(180deg, #D793DAAB 0%, #1D7FBB 100%) 0% 0% no-repeat padding-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        bottom: "75px",
        left: "30px",
        ['@media (max-width: 650px)']: {
            position: "static",
            minWidth: "100%",
            maxHeight: "100px",
            marginTop: "3px"
        }
    },
    cardMedia: {
        marginRight: "3%",
        position: "relative"
    },
    image: {
       minWidth: "220px",
       minHeight: "220px" ,
       marginRight: "60px",
       ['@media (max-width: 650px)']: {
            marginBottom: "16%",
            minWidth: "150px",
            minHeight: "150px"
        }
    },
    text: {
        color: "white",
        font: "normal normal normal 20px/30px Acumin Pro"
    },
    boxText: {
        color: "white",
        font: "normal normal normal 24px/30px Acumin Pro"
    }
}));

const Trainees = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className = {classes.container}>
                <Card item className = {classes.cards}>
                    <CardMedia item className = {classes.cardMedia}>
                        <Avatar src = "https://source.unsplash.com/random" className = {classes.image}/>
                    </CardMedia>
                    <Box>
                        <Typography className = {classes.text}>
                        I enrolled in the course to get help to transition from Copywriting to UX Writing. I had plenty of experience in the digital field, but a lack of knowledge about the UX Writing processes. So this hands-on methodology worked great with me. Thanks to Yuval and Aaron’s mentorship I felt confident enough to face this change in my career and now I’m a UX Writer. I strongly recommend it!
                        </Typography>
                    </Box>
                </Card>
                <Box className = {classes.outerBox}>
                    <Typography className = {classes.boxText}>
                        Sayma Sultana
                    </Typography>
                    <Typography className = {classes.boxText}>
                        UX Designer
                    </Typography>
                </Box>
            </Container>
        </>
    )
}
export default Trainees;