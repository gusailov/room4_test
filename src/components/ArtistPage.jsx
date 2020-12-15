import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function ArtistPage(props) {
    const params = useParams()
    const getArtistInfo = props.getArtistInfo
    useEffect(() => {
        getArtistInfo(params.artistName)

    }, [getArtistInfo, params])
    const artist = props.artist.artist


    return (<div>
        {artist.length === 0 ?
            <div>Loading...</div> :
            <div>

                <Card >
                    <CardActionArea href={artist.url}>
                        <CardMedia
                            component="img"
                            alt={artist.name}
                            height="140"
                            image={artist.image[4]['#text']}
                            title={artist.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {artist.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" dangerouslySetInnerHTML={{ __html: artist.bio.summary }} />

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {!artist.tags.tag.length ?
                            <div>Loading...</div> :
                            artist.tags.tag.map((tag) =>
                                <Button size="small" color="primary" key={tag.url} href={tag.url}> {tag.name} </Button>
                            )
                        }
                    </CardActions>
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

