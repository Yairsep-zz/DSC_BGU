import React from 'react';
import "../css/Technologies.css"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


function Technologies() {

    const classes = useStyles();

    const urls = {
        Web: "pictures/technologies/website.png",
        Android: 'pictures/technologies/Android.png',
        Cloud: 'pictures/technologies/Cloud.png',
        ML: 'pictures/technologies/machine-learning-logo.png',
        IOT: "pictures/technologies/iot.png",
        Python: "pictures/technologies/python-logo.png",
        JavaScript: "pictures/technologies/javascript-logo.png",
        React: "pictures/technologies/react-logo.png"
    }

    return (
        <div className="section-title">
            <h2>Technologies</h2>
            <div className="bar"/>
            <p>These are some of the technologies we mainly try to focus at DSC BGU</p>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={urls.Web}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Web Development
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Club Content
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
        </div>
    );
}

export default Technologies;


// <section className="services-area ptb-100 bg-gray">
//     <div className="container">
//         <div className="section-title">
//             <h2>Technologies</h2>
//             <div className="bar" />
//             <p>These are some of the technologies we mainly try to focus at DSC BGU</p>
//         </div>
//         <div className="row">
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/website.png"} alt="website" />
//                     <h3>Website Development</h3>
//                 </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/Android.png"} alt="android" />
//
//                     <h3>Android App Development</h3>
//                 </div>
//             </div>
//
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/Cloud.png"} alt="cloud logo" />
//
//                     <h3>Google Cloud</h3>
//                 </div>
//             </div>
//
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/machine-learning-logo.png"} alt="machine" />
//                     <h3>Machine Learning</h3>
//                 </div>
//             </div>
//
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/iot.png"} alt="iot" />
//                     <h3>Internet Of Things</h3>
//                 </div>
//             </div>
//
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/python-logo.png"} alt="python" />
//
//                     <h3>Python</h3>
//                 </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/javascript-logo.png"} alt="javascript" />
//                     <h3>JavaScript</h3>
//                 </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//                 <div className="single-services">
//                     <img src={"pictures/technologies/react-logo.png"} alt="react" />
//                     <h3>React JS</h3>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
