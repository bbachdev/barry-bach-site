import { useRef, useState } from 'react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

export default function AudioPlayer({title, src} : {title: string, src: string}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    (isPlaying) ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      { /* Audio element */ }
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      { /* Player title + controls */ }
      <p>{title}</p>
      <div className={'cursor-pointer w-fit hover:text-gray-400'}>
        {isPlaying ?
          <PauseCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/> :
          <PlayCircleFilledIcon onClick={() => togglePlay()} fontSize={'large'}/>
        }
      </div>
    </>
  )
}
