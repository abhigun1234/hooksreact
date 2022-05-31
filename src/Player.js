import React from 'react';
import ReactPlayer from 'react-player';

function Player(props) {
    return (
        <div>
           <ReactPlayer controls url='https://www.youtube.com/watch?v=jPPhVku8g-8'></ReactPlayer> 
        </div>
    );
}

export default Player;