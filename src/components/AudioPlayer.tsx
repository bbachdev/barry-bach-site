import { useEffect, useRef, useState } from 'react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { CircularProgress } from '@mui/material';

//Make default lower volume for better UX
const DEFAULT_VOLUME = 65;
//Progress color for input range sliders
const PROGRESS_COLOR = '#588364'

export default function AudioPlayer({index, title, src, playOverride, onPlay} : {index: number, title: string, src: string, playOverride: boolean, onPlay: (index: number) => void}) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [savedVolume, setSavedVolume] = useState(DEFAULT_VOLUME);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(!audioRef.current) return;
    if(playOverride === true) {
      audioRef.current.play();
    }
    else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  
  }, [playOverride, isPlaying])
  


  const onLoadedMetadata = () => {
    setHasLoaded(true);
    if (audioRef.current && progressRef.current) {
      audioRef.current.volume = volume / 100;
      setDuration(`${Math.floor(audioRef.current.duration / 60)}:${Math.floor(audioRef.current.duration % 60)}`);
      if(volumeRef.current) {
        volumeRef.current.style.background = `linear-gradient(to right, ${PROGRESS_COLOR} ${DEFAULT_VOLUME}%, #ccc ${DEFAULT_VOLUME}%)`;
      }

      //Update progress bar as audio plays
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current && progressRef.current) {
          //Update progress bar
          const { currentTime, duration } = audioRef.current;
          const progressPercent = (currentTime / duration) * 100;
          progressRef.current.value = progressPercent.toString();
          progressRef.current.style.background = `linear-gradient(to right, ${PROGRESS_COLOR} ${progressRef.current.value}%, #ccc ${progressRef.current.value}%)`;
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
    if(isPlaying){
      onPlay(-1)
      audioRef.current?.pause()
    }else{
      onPlay(index);
      audioRef.current?.play()
    }
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
    volumeRef.current.style.background = `linear-gradient(to right, ${PROGRESS_COLOR} ${volumeRef.current.value}%, #ccc ${volumeRef.current.value}%)`;
  }

  const updateProgress = (ref : React.RefObject<HTMLInputElement>) => {
    if(ref.current) {
      const sliderValue = Number(ref.current.value);
      ref.current.style.background = `linear-gradient(to right, ${PROGRESS_COLOR} ${sliderValue}%, #ccc ${sliderValue}%)`;
    }
  }

  return (
    <>
      { /* Audio element */ }
      <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className={'flex flex-row h-fit w-full'}>
        <div className={'flex flex-col w-full min-w-full'}>
          { /* Player title + controls */ }
          <div className={'flex flex-row justify-between'}>
            <p className={'font-bold'}>{title}</p>
            <div className={'cursor-pointer w-fit hover:text-gray-400'}>
              <a href={src} download title='Download'>
                <FileDownloadIcon fontSize={'large'}/>
              </a>
            </div>
          </div>
          <div className={'flex flex-row items-center w-full'}>
            <div className={'cursor-pointer w-fit hover:text-gray-400'}>
              { /* TODO: Perhaps add a loading icon in addition (for when the audio's source is still loading?) */}
              {hasLoaded ? <>
                {isPlaying ?
                  <PauseCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/> :
                  <PlayCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/>
                }
              </> : <>
                {/* Loading Icon */}
                <CircularProgress size={`2rem`}/>
              </>}
            </div>
            <div className={'ml-2 w-full flex'}>
              <input className={'w-full'} ref={progressRef} type="range" defaultValue={0} onChange={(e) => seek(e)} onInput={() => updateProgress(progressRef)}/>
            </div>
            
          </div>
          <div className={'flex flex-row justify-between items-center space-x-6 w-full min-w-full'}>
            <div className={'flex flex-row space-x-2 min-w-1/4 w-1/4'}>
              <span>{currentTime}</span>
              <span>/</span>
              <span>{duration}</span>
            </div>
            { /* Volume slider */}
            <div className={'flex flex-row h-fit space-x-2 items-center w-3/4'}>
              <div className={'flex cursor-pointer w-fit hover:text-gray-400'}>
                {volume > 0 ?
                  <VolumeUpIcon onClick={toggleMute} fontSize={'medium'}/> :
                  <VolumeMuteIcon onClick={toggleMute} fontSize={'medium'}/>
                }
              </div>
              <div className={'w-full flex'}>
                <input ref={volumeRef} type="range" defaultValue={volume} min={0} max={100} step={1} onChange={(e) => changeVolume(Number(e.target.value))} onInput={() => updateProgress(volumeRef)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
