import React, {Component} from 'react';
import { EventEmitter } from 'events';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com"; 

class App extends Component
{
    state = {artist: null, tracks: []};

   componentDidMount()
   {
       this.searchArtist('pentatonix');
   }

    searchArtist = artistQuery =>
    {
        console.log('this.state',this.state);
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
            if(json.artists.total >0)
            {
                const artist = json.artists.items[0];
                this.setState({artist});
                console.log('artist', artist);

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response =>response.json())
                .then(json => this.setState({tracks: json.tracks}))
                .catch(error => alert(error.message));
                
            }
        })
        .catch(error => alert(error.message));
    }

    
    render()
    {  
        return(
            <div>
                <h2> Music Master</h2>
                <Search searchArtist ={this.searchArtist}/>
                <Artist artist ={this.state.artist}/>
                <Tracks tracks ={this.state.tracks}/>
            </div>   
        );
    }
}

export default App;