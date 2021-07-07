import { createContext, useContext, useState } from "react";
import useAudios from "../pages/hooks/useAudios";

export const PlayerContext = createContext({});

export const PlayerContextProvider = ({ children }) => {
  const audios = useAudios();
  const [currentListener, setCurrentListener] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (audio) => {
    setCurrentListener(audio);
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }
  return(
    <PlayerContext.Provider value={{ audios, currentListener, isPlaying, play, togglePlay, setIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayerContext = () => {
  return useContext(PlayerContext)
} 