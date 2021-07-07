import { usePlayerContext } from "../../contexts/PlayerContext"
import { MdPlayArrow, MdPause } from "react-icons/md";


export default function PlayerList() {
  const { audios, currentListener, play, isPlaying, togglePlay } = usePlayerContext();

  return(
    <div>
      {audios.map(audio => (
        <div key={audio.name}>
          <span>
            {isPlaying && currentListener.name === audio.name ? (
              <MdPause size={24} onClick={togglePlay} />
            ) : (
              <MdPlayArrow size={24} onClick={() => play(audio)} />
            )}
          </span>
          <span>{audio.name}</span>
        </div>
      ))}
    </div>
  )
}