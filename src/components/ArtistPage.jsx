import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
});


function ArtistPage(props) {
    const classes = useStyles();
    const location = useLocation()

    useEffect(() => {
        if (props.artist.artist.length) {

        }
        props.getArtistInfo(location.state.artistName)
    }, [])
    const artist = props.artist.artist

    return (<div>
        {artist.length === 0 ?
            <div>Loading...</div> :
            <div>

                <Card className={classes.root}>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                {artist.bio.content}
                            </Typography>
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
                </Card></div>

        } </div>
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)