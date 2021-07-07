import { useEffect, useRef } from 'react';
import PlayerList from '../components/PlayerList'
import { usePlayerContext } from '../contexts/PlayerContext';

export default function Home() {
  const { audios, currentListener, play, isPlaying, togglePlay, setIsPlaying } = usePlayerContext();

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {currentListener ? (
        <audio
          autoPlay
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          ref={audioRef}
          controls
          src={currentListener.audioSource}
        />
      ):(
        <span>Selecione um áudio para ouvir</span>
      )}
      <PlayerList />
    </>
  )
}
