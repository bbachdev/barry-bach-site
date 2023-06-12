import AudioPlayer from './components/AudioPlayer'
import SiteLayout from './layouts/SiteLayout'

import SingingDemo from './assets/media/barryBachSingingDemo.mp3'
import StudioSpecs from './components/StudioSpecs'

import Headshot from './assets/images/headshot1.jpg'
import Logo from './assets/images/NameLogo.png'

function App() {
return (
    <SiteLayout>
      <div className={'flex flex-col'}>
        <div id="introSection" className={'flex flex-row item bg-neutral-600'}>
          <img src={Headshot} alt="Barry Bach" className={'w-3/5'}/>
          <div className={'flex flex-col w-1/2 items-center'}>
            <div className={'flex flex-col w-3/5 mt-8'}>
              <img src={Logo} alt="Barry Bach logo text" className={'w-full'}/>
              <span className={'font-light text-center text-lg mt-4'}>Singer | Voice Actor</span>
            </div>
            
            <div className={'flex flex-col mt-auto mb-8 space-y-6'}>
              <AudioPlayer title='Singing Demo' src={SingingDemo}/>
              <AudioPlayer title='Character Demo' src={SingingDemo}/>
              <AudioPlayer title='Home Studio Sample' src={SingingDemo}/>
            </div>
          </div>
        </div>
        <div id="aboutSection" className={'flex flex-col space-y-4 mb-8'}>
          <h2 className={'text-center text-4xl mt-8 mb-6'}>About</h2>
          <p className={'w-4/5 mx-auto'}>
            {'Barry Bach (he/him) is a professional singer and voice actor, currently residing in the greater Minneapolis area. His love for the vocal arts originated from both watching, as well as participating in, a variety of musical theatre productions throughout his teenage and early adult years. While simultaneously studying computer science at the University of Wisconsin - Eau Claire, Barry underwent further refinement of his voice and acting technique, and continued performing in various theatrical and operatic productions throughout his educational career.'}<br/><br/>
            {'Following his years of formal education, Barry spent several years as a member of Twin Cities based "a cappella" group, '}<i>Due North</i>{', performing for a large number of audiences within public, corporate, and education settings. Upon the group\'s disbandment in 2020, Barry honed in his skills and strengths, and began his pursuit towards voice acting and freelance singing opportunities.'}<br/><br/>
            {'Today, Barry has completed such work for a variety of clients, ranging from small independent productions to "triple-A" video game titles. His youthful, dynamic tenor voice is well suited for a variety of roles and genres of work, and he prides himself on his passion and genuine enthusiasm for his craft. Your project deserves more than just "a voice" to get the job done, and Barry is well-equipped and eager to help bring your creative vision to life.'}
          </p>
        </div>
        <div id="specsSection" className={'flex flex-col space-y-4 bg-neutral-300 text-slate-700'}>
          <StudioSpecs />
        </div>
      </div>
    </SiteLayout>
  )
}

export default App
