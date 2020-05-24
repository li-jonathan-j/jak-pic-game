import React from 'react';
import './ImageGrid.css';
import Spinner from 'react-bootstrap/Spinner';

class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameActive: false,
            isLoading: false,
            images: []
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.gameActive !== this.state.gameActive) {
    //         this.setState({gameActive: nextProps.gameActive});
    //         console.log('image game active changed');
    //         if (this.state.gameActive) {
    //             this.getImages();
    //         }
    //     }
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.gameActive !== this.props.gameActive) {
            console.log('image active changed', this.props.gameActive);
            this.setState({gameActive: this.props.gameActive});
            if (this.props.gameActive) {
                this.getImages();
            } else {
                this.setState({
                    images: []
                })
            }
        }
    }
    
    getImages() {
        console.log('getImages');
        this.setState({isLoading: true});

        setTimeout(() => {
            this.setState({
                images: [
                  'https://i.redd.it/q39n7oc0yd051.jpg',
                  'https://i.redd.it/1ywl9y2jfs511.jpg',
                  'https://i.redd.it/sahgcxo1eiez.jpg'
                ],
                isLoading: false
              })
        }, 1000)

    }

    render() {
        if (!this.state.isLoading) {
            return  (
                <div>
                    <div className="Image-Gallery">
        
                        {this.state.images.map((url, index) => {
                            return <img className="Grid-image" key={index} src={url} alt='' />
                        })}
                    </div>
        

                </div>  
            )
        }

        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default ImageGrid;