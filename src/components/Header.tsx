import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={'max-w-7xl max-h-20 md:max-h-24 md:h-24 mx-auto px-4 py-2 flex flex-row text-md items-center'}>
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
            <a href={'#demos'} onClick={toggleMenu}>Demos</a>
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
            <a href={'https://bsky.app/profile/barrybach.com'} target={'_blank'} onClick={toggleMenu}>
              <svg width="27" height="27" viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158Z" fill="white"/>
                <path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" fill="#e5e7eb"/>
              </svg>
            </a>
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
      <div className={'ml-8 hidden md:flex flex-row items-center'}>
          <ul className={'flex flex-row space-x-5'}>
          <li>
            <a href={'https://twitter.com/barry_bach'} target={'_blank'}><TwitterIcon fontSize={'large'}/></a>
          </li>
          <li className={`flex items-center`}>
            <a href={'https://bsky.app/profile/barrybach.com'} target={'_blank'} onClick={toggleMenu}>
            <svg width="27" height="27" viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158Z" fill="white"/>
              <path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" fill="#e5e7eb"/>
            </svg>
            </a>
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
