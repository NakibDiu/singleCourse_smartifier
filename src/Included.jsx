import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Container, CssBaseline, Typography, Card, Avatar, Link, CardMedia} from '@material-ui/core';


const useStyle = makeStyles(() => ({
    mainContainer: {
        marginBottom: "5%"
    },
    heading: {
        color: "#737373",
        fontWeight: "500",
        fontSize: "42px",
        marginBottom: '1.5%',
        
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0",
        margin: "0",
        ['@media (max-width: 500px)']: {
            flexDirection: "column"
        }
    },
    items: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "16px",
        marginRight: "2%",
        marginLeft: "2%",
        background: "transparent linear-gradient(180deg, #966BC2DB 0%, #A5BBDE 100%) 0% 0% no-repeat padding-box",
        borderRadius: "30px",
        ['@media (max-width: 500px)']: {
            padding: '0',
            borderRadius: "8px",
            marginBottom: "16px"
        }
        
    },
    image: {
        minHeight: "121px",
        minWidth: "121px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "8%",
        ['@media (max-width: 500px)']: {
            minWidth: "100%",
            paddingTop: "56.25%"
        }
    },
    title: {
        fontWeight: "600",
        fontSize: "22px",
        color: "#45385E",
        '&:hover': {
            cursor: "pointer",
        },
        ['@media (max-width: 500px)']: {
            padding: "16px"
        },
        marginBottom: "2%",

    },
    description: {
        textAlign: "center",
        fontSize: "16px",
        color: "#45385E",
        fontWeight: "500",
        ['@media (max-width: 500px)']: {
            padding: "16px",
            paddingTop: "0"
        }
    }
}))


const Include = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className = {classes.mainContainer}>
                <Typography variant = "h4" className = {classes.heading}>
                What’s Included 👇👇👇 
                </Typography>
                <Container className = {classes.container}>
                    <Card items className = {classes.items}>
                        <CardMedia image = "https://source.unsplash.com/random" variant = "square" className = {classes.image}/>
                        <Link variant = "h5" className = {classes.title}>
                            Take the Quizzes
                        </Link>
                        <Typography variant = "body1" className = {classes.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Card>

                    <Card items className = {classes.items}>
                        <CardMedia image = "https://source.unsplash.com/random" variant = "square" className = {classes.image}/>
                        <Link variant = "h5" className = {classes.title}>
                            View Resutls
                        </Link>
                        <Typography variant = "body1" className = {classes.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Card>

                    <Card items className = {classes.items}>
                        <CardMedia image = "https://source.unsplash.com/random" variant = "square" className = {classes.image}/>
                        <Link variant = "h5" className = {classes.title}>
                            All Courses
                        </Link>
                        <Typography variant = "body1" className = {classes.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </Card>
                </Container>
            </Container>
        </>
    )
}

export default Include;