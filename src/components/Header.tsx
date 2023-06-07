import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import NameLogo from '../assets/images/NameLogo.png';

export default function Header() {
  return (
    <header className={'max-w-7xl mx-auto px-4 py-2 flex flex-row text-md items-center'}>
      <img alt={'Barry Bach logo text'} className={'h-20'} src={NameLogo} />
      <div className={'ml-auto flex flex-row'}>
          <ul className={'flex flex-row space-x-3'}>
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
