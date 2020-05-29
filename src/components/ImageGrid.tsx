import React, { Component, Fragment } from 'react';
import './ImageGrid.css';
import Spinner from 'react-bootstrap/Spinner';
import { GAME_STATES } from './App';

export interface ImageGridProps {
  gameState: GAME_STATES;
}

export interface ImageGridState {
  isLoading: boolean;
  images: string[];
}

export class ImageGrid extends Component<ImageGridProps, ImageGridState> {
  constructor(props: ImageGridProps) {
    super(props);
    this.state = {
      isLoading: false,
      images: []
    }
  }

  componentDidUpdate(prevProps: ImageGridProps) {
    const { gameState } = this.props;
    if (prevProps.gameState !== gameState) {
      if (gameState === GAME_STATES.GAME_STARTED) {
        this.getImages();
      } else if (gameState === GAME_STATES.NOT_STARTED) {
        this.setState({ images: [] });
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
    }, 1000);
  }

  renderSpinner() {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  renderImages() {
    return (
      <div>
        <div className="image-gallery">
          {
            this.state.images.map((url, index) => {
              return <img className="grid-image" key={index} src={url} alt='' />
            })
          }
        </div>
      </div>  
    );
  }

  render() {
    const { isLoading } = this.state;
    return(
      <Fragment>
        {isLoading 
          ? this.renderSpinner()
          : this.renderImages()
        }
      </Fragment>
    );
  }
}
