import React from "react";
import './Partners.scss'
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import Typography from "@material-ui/core/Typography";
import PartnerCard from "./PartnersCard/PartnerCard";


function Partners() {

    const collection = useFirestore().collection("Partners");
    const partners = useFirestoreCollectionData(collection , {idField: "id" }); //TODO: Change Const Name

    return (
        <div className={'PartnersPage'}>
            <Typography variant="h2" gutterBottom className={'header'}>
                Partners
            </Typography>
            <div className={'PartnersCards'}>
                {partners.map((partner) => <PartnerCard partner={partner} key={partner.id}/>)}
            </div>
        </div>
    );
}

export default Partners;

//         <div>
//             <h1>Partners</h1>
//             <br/>
//             {partners.map(({id ,name , logo , url}) => (
//                 <div>
//                     <Card className={classes.root}>
//                         <CardActionArea>
//                             <CardMedia style={{height: "400px" , width: "400px"}}
//                                        component="img" src={logo}
//                                        className={classes.media}
//                                        title={name}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     <a href={url}>
//                                         {name}
//                                     </a>
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary" component="p">
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         <CardActions>
//                         </CardActions>
//                     </Card>
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default Partners;
