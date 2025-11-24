/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

interface Track {
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  collectionViewUrl: string;
}

export default function ExplorePage() {
  const [results, setResults] = useState<Track[]>([]);

  const fetchSongs = async () => {
    try {
      const res = await fetch('https://itunes.apple.com/search?term=guitar&media=music&limit=6');
      
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Explore Music (External API)</h2>
        <button onClick={fetchSongs} className="btn btn-primary">Load Guitar Tracks</button>
      </div>

      <div className="row">
        {results.map((track, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={track.artworkUrl100} 
                className="card-img-top" 
                alt={track.trackName} 
              />
              <div className="card-body">
                <h6 className="card-title">{track.trackName}</h6>
                <p className="card-text small">{track.artistName}</p>
                <a 
                  href={track.collectionViewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline-secondary btn-sm w-100"
                >
                  Listen on iTunes
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}