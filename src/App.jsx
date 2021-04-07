import React from 'react';
import { Button, Container, Typography, CssBaseline, Box } from '@material-ui/core';
import useStyle from './Styles';
import Learn from './Learn'
import Trainees from './Trainees'
import Apply from './Apply';
import Include from './Included';




const App = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className={classes.mainContainer}>
                <Container className={classes.container}>
                    <Container className={classes.innerContainer}>
                        <Typography variant="h3">
                            Course 1- Presentation Skill
                        </Typography>
                        <Typography variant="h5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur facilis eveniet accusantium dicta exercitationem fugiat ullam maiores pariatur voluptatum recusandae voluptate labore nostrum atque totam consequuntur, impedit iusto aliquam!
                        </Typography>
                        <Button variant="contained" className={classes.spotButton}>
                            Secure Your Spot
                        </Button>
                    </Container>
                </Container>
                <Typography variant="h4" className={classes.text1}>
                    What You'll Learn
                </Typography>
                <Learn />
                <Box className = {classes.buttonBox}>
                    <Button variant="contained" className={classes.spotButton2}>
                        Secure Your Spot
                    </Button>
                </Box>
                <Typography variant = "h4" className = {classes.applyText}>
                What our trainees saying about us
                </Typography>
                <Trainees />
                <Apply />
            </Container>
            <Include/>
            <Box className = {classes.buttonBox}>
                <Button variant="contained" className={classes.spotButton2}>
                    Secure Your Spot
                </Button>
            </Box>
        </>
    );
}



export default App;