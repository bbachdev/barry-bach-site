import { useRef, useState } from 'react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

//Make default lower volume for better UX
const DEFAULT_VOLUME = 65;

export default function AudioPlayer({title, src} : {title: string, src: string}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [savedVolume, setSavedVolume] = useState(DEFAULT_VOLUME);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);

  const onLoadedMetadata = () => {
    if (audioRef.current && progressRef.current) {
      audioRef.current.volume = volume / 100;
      setDuration(`${Math.floor(audioRef.current.duration / 60)}:${Math.floor(audioRef.current.duration % 60)}`);

      //Update progress bar as audio plays
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current && progressRef.current) {
          //Update progress bar
          const { currentTime, duration } = audioRef.current;
          const progressPercent = (currentTime / duration) * 100;
          progressRef.current.value = progressPercent.toString();
          //Update time strings
          setCurrentTime(`${Math.floor(currentTime / 60)}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}`);
        }
      });

      //Reset progress bar when audio ends
      audioRef.current.addEventListener('ended', () => {
        if (audioRef.current && progressRef.current) {
          progressRef.current.value = '0';
          setCurrentTime('0:00');
          setIsPlaying(false);
        }
      });
    }
  }

  const togglePlay = () => {
    (isPlaying) ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying(!isPlaying);
  }

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!audioRef.current) return;
    const percent = Number(e.target.value) / 100;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  }

  const changeVolume = (newLevel : number) => {
    if(!audioRef.current) return;
    audioRef.current.volume = newLevel / 100;
    setVolume(newLevel);
    if(newLevel === 0) {
      audioRef.current.muted = true;
    }
    else {
      audioRef.current.muted = false;
    }
    if(!volumeRef.current) return;
    volumeRef.current.value = newLevel.toString();
  }

  const toggleMute = () => {
    if(!audioRef.current) return;
    if(audioRef.current.muted) {
      audioRef.current.muted = false;
      setVolume(savedVolume);
      if(!volumeRef.current) return;
      volumeRef.current.value = savedVolume.toString();
    }
    else {
      audioRef.current.muted = true;
      setSavedVolume(volume);
      setVolume(0);
      if(!volumeRef.current) return;
      volumeRef.current.value = '0';
    }
  }

  return (
    <>
      { /* Audio element */ }
      <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className={'flex flex-row h-fit'}>
        <div className={'flex flex-col'}>
          { /* Player title + controls */ }
          <div className={'flex flex-row justify-between'}>
            <p>{title}</p>
            <div className={'cursor-pointer w-fit hover:text-gray-400'}>
              <a href={src} download>
                <FileDownloadIcon fontSize={'large'}/>
              </a>
            </div>
          </div>
          <div className={'flex flex-row items-center'}>
            <div className={'cursor-pointer w-fit hover:text-gray-400'}>
              {isPlaying ?
                <PauseCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/> :
                <PlayCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/>
              }
            </div>
            <div className={'ml-2 w-full'}>
              <input className={'w-full'} ref={progressRef} type="range" defaultValue={0} onChange={(e) => seek(e)}/>
            </div>
            
          </div>
          <div className={'flex flex-row justify-between items-center space-x-6'}>
            <div className={'flex flex-row space-x-2'}>
              <span>{currentTime}</span>
              <span>/</span>
              <span>{duration}</span>
            </div>
            { /* Volume slider */}
            <div className={'flex flex-row h-fit space-x-2 items-center'}>
              <div className={'cursor-pointer w-fit hover:text-gray-400'}>
                {volume > 0 ?
                  <VolumeUpIcon onClick={toggleMute} fontSize={'medium'}/> :
                  <VolumeMuteIcon onClick={toggleMute} fontSize={'medium'}/>
                }
              </div>
              <input ref={volumeRef} className={'w-full'} type="range" defaultValue={volume} min={0} max={100} step={1} onChange={(e) => changeVolume(Number(e.target.value))}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
