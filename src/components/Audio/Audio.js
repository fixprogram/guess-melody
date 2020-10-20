import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  render() {
    const {isPlaying, src, onPlayButtonClick} = this.props;

    return (
      <Fragment>
        <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          onClick={onPlayButtonClick}
        ></button>
        <div className="track__status">
          <audio src={src} ref={this.audioRef}></audio>
        </div>
      </Fragment>
    );
  }
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};
