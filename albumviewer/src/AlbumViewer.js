import React from 'react';

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';

class AlbumViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    async componentDidUpdate(prevProps) {
        const { albumId } = this.props;
        if (prevProps.albumId === albumId) {
            return;
        }

        const response = await fetch(`${PHOTOS_URL}?albumId=${albumId}`)
            .then((x) => x.json());

        this.setState({
            photos: response,
        });
    }

    render() {
        const { photos } = this.state;

        const rows = photos.map((photo) => <tr key={ photo.id }>
            <td><img src={ photo.thumbnailUrl } /></td>
            <td>{ photo.title }</td>
        </tr>);

        return <table><tbody>{ rows }</tbody></table>
    }
}

export default AlbumViewer;
