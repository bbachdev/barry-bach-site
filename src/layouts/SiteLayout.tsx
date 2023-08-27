import { ReactNode } from 'react';
import Header from '../components/Header';

export default function SiteLayout({children} : {children : ReactNode}) {
  return (
    <div className={'flex flex-col min-h-[100dvh]'}>
      <div className={'shadow-md z-10 sticky md:relative top-0 bg-[#242424]'}>
        <Header/>
      </div>
      <div id="container" className={'max-w-7xl mx-auto w-full pt-0'}>

        {children}
      </div>
    </div>
  )
}