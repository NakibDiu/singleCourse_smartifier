import React from 'react';
import {Button, Container, Typography, CssBaseline, Box } from '@material-ui/core';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import useStyle from './Styles'

const Learn = () => {
    const classes = useStyle();
    return (
        <>
            <CssBaseline />
            <Container className={classes.boxContainer}>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Introduction
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
                <Box className={classes.ShortBoxes}>
                    <Button className = {classes.navButton}>
                        <NavigateNextOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Typography className={classes.sBoxText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                </Box>
                <Box className={classes.bigBoxes}>
                    <Button className = {classes.navButton}>
                        <ExpandMoreOutlinedIcon className={classes.nextIcon} />
                    </Button>
                    <Box>
                        <Typography className={classes.sBoxText}>
                            Introduction
                            </Typography>
                        <Typography className={classes.sBoxText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima? Eum illo at nostrum et laborum, quod hic quas, molestiae quisquam iure odio vitae nesciunt quo, repudiandae nemo. Veniam, voluptate?
                            </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Learn;