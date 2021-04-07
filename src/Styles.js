import {makeStyles} from '@material-ui/styles';

var url = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80";
const useStyle = makeStyles(() => ({
    container: {
        minWidth: "100%",
        minHeight: "760px",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: "60px",
    },
    innerContainer: {
        position: "absolute",
        minWidth: "100%",
        minHeight: "760px",
        background: "transparent linear-gradient(180deg, #966FC3C4 0%, #4B3862 100%) 0% 0% no-repeat padding-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10%",
        color: "white"
    },
    spotButton: {
        maxWidth: "50%",
        background: "#0380A7 0% 0% no-repeat padding-box",
        borderRadius: "50px",
        padding: "16px",
        color: "white",
        fontSize: "1.4em",
        fontWeight: "lighter",
        '&:hover': {
            color: "black"
        },
        ['@media (max-width: 200px)']: {
            maxWidth: "80%"
        }
    },
    text1: {
        color: "#737373",
        marginBottom: "50px"
    },
    boxContainer: {
        minWidth: "100%",
        minHeight: "100px",
        padding: "0"
    },
    ShortBoxes: {
        display: "flex",
        border: "2px solid gray",
        padding: "16px",
        margin: "8px 0 8px 0",
        alignItems: "center"
    },
    nextIcon: {
        fontSize: "32px",
        color: "gray"
    },
    sBoxText: {
        font: "normal normal normal 27px Montserrat",
        color: "#737373",
        fontWeight: "300"
    },
    bigBoxes: {
        display: "flex",
        border: "2px solid gray",
        padding: "16px",
        margin: "8px 0 8px 0"
    },
    navButton: {
        maxHeight: "32px",
        maxWidth: "32px"
    },
    buttonBox: {
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3% 0"
    },
    spotButton2: {
        maxWidth: "70%",        
        background: "#0380A7 0% 0% no-repeat padding-box",
        borderRadius: "50px",
        padding: "16px",
        color: "white",
        fontSize: "1.4em",
        fontWeight: "lighter",
        '&:hover': {
            color: "black"
        },
        ['@media (max-width: 200px)']: {
            maxWidth: "80%"
        },
        margin: "2% 0"
    },
    applyText: {
        color: "#737373",
        
    }

}));

export default useStyle;