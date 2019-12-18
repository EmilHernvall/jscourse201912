import React from 'react';

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';

class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        };
    }

    async componentDidMount() {
        const response = await fetch(ALBUM_URL)
            .then((x) => x.json());

        this.setState({
            albums: response,
        });
    }

    render() {
        const { onAlbumSelected } = this.props;
        const { albums } = this.state;

        const listItems = albums.map((album) =>
            <li key={ album.id } onClick={ () => onAlbumSelected(album.id) }>
                {album.title}
            </li>);

        return <ul>{ listItems }</ul>;
    }
}

export default AlbumList;