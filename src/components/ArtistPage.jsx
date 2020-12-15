import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function ArtistPage(props) {

    const location = useLocation()
    const params = useParams()
    console.log('ArtistPage ', params.artistName);

    useEffect(() => {
        props.getArtistInfo(params.artistName)

    }, [])
    const artist = props.artist.artist
    console.log('ArtistPage artist', artist);

    return (<div>
        {!artist ?
            <div>Loading...</div> :
            <div>

                <Card >
                    <CardActionArea href={artist.url}>
                        <CardMedia
                            component="img"
                            alt={artist.name}
                            height="140"
                            image={artist.picture_xl}
                            title={artist.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {artist.name}
                            </Typography>


                        </CardContent>
                    </CardActionArea>

                </Card>
            </div>

        } </div >
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)

