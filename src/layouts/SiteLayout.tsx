import { ReactNode } from 'react';
import Header from '../components/Header';

export default function SiteLayout({children} : {children : ReactNode}) {
  return (
    <div className={'flex flex-col h-[100dvh]'}>
      <div className={'shadow-md z-10'}>
        <Header/>
      </div>
      <div id="container" className={'max-w-7xl mx-auto w-full pt-0'}>

        {children}
      </div>
    </div>
  )
}