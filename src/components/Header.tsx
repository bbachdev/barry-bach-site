import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import NameLogo from '../assets/images/NameLogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={'max-w-7xl max-h-48 md:h-24 mx-auto px-4 py-2 flex flex-row text-md items-center'}>
      { /* TODO - add logo when scrolling past NameLogo on top section */}
      {/* <img alt={'Barry Bach logo text'} className={'h-20'} src={NameLogo} /> */}

      {/* Mobile */}
      <div className={'flex md:hidden h-20 flex-row ml-auto cursor-pointer items-center'} onClick={toggleMenu}>
        {isMenuOpen && (
            <CloseIcon fontSize={'large'}/>
          )
        }
        {!isMenuOpen && (
          <MenuIcon fontSize={'large'}/>
        )}
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col bg-[#242424] space-y-4 absolute py-2 top-20 right-0 w-full h-fit z-20 transition-all`}>
        <ul className={'flex flex-col space-y-8 items-center text-2xl'}>
          <li>
            <a href={'#'} onClick={toggleMenu}>Demos</a>
          </li>
          <li>
            <a href={'#about'} onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href={'#studio'} onClick={toggleMenu}>Studio</a>
          </li>
          <li>
            <a href={'#resume'} onClick={toggleMenu}>Resume</a>
          </li>
        </ul>
        <ul className={'flex flex-row space-x-5 items-center mx-auto py-4'}>
          <li>
            <a href={'https://twitter.com/barry_bach'} target={'_blank'} onClick={toggleMenu}><TwitterIcon fontSize={'large'}/></a>
          </li>
          <li>
            <a href={'https://bsky.app/profile/barrybach.com'} target={'_blank'} onClick={toggleMenu}><AlternateEmailIcon fontSize={'large'}/></a>
          </li>
          <li>
            <a href={'https://www.youtube.com/channel/UC2_ONiCusUKZ85yqGMNKgJg'} target={'_blank'} onClick={toggleMenu}><YouTubeIcon fontSize={'large'}/></a>
          </li>
          <li>
            <a href={'mailto:contact@barrybach.com'} target={'_blank'} onClick={toggleMenu}><EmailIcon fontSize={'large'}/></a>
          </li>
        </ul>
      </div>

      {/* Desktop */}
      <div className={'ml-auto hidden md:flex flex-row'}>
        <ul className={'flex flex-row space-x-8'}>
          <li>
            <a href={'#'}>Demos</a>
          </li>
          <li>
            <a href={'#about'}>About</a>
          </li>
          <li>
            <a href={'#studio'}>Studio</a>
          </li>
          <li>
            <a href={'#resume'}>Resume</a>
          </li>
        </ul>
      </div>
      <div className={'ml-8 hidden md:flex flex-row'}>
          <ul className={'flex flex-row space-x-5'}>
          <li>
            <a href={'https://twitter.com/barry_bach'} target={'_blank'}><TwitterIcon fontSize={'large'}/></a>
          </li>
          <li>
            <a href={'https://www.youtube.com/channel/UC2_ONiCusUKZ85yqGMNKgJg'} target={'_blank'}><YouTubeIcon fontSize={'large'}/></a>
          </li>
          <li>
            <a href={'mailto:contact@barrybach.com'} target={'_blank'}><EmailIcon fontSize={'large'}/></a>
          </li>
        </ul>
      </div>
    </header>
  )
}
