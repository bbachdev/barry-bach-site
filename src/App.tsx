import AudioPlayer from './components/AudioPlayer'
import SiteLayout from './layouts/SiteLayout'

import SingingDemo from './assets/media/BarryBach_SingingDemo.mp3'
import StudioSample from './assets/media/BarryBach_RawHomeStudioSample.mp3'
import StudioSpecs from './components/StudioSpecs'

import Headshot from './assets/images/headshot1.jpg'
import Logo from './assets/images/NameLogo.png'
import StudioImage from './assets/images/studio.jpg'
import Resume from './components/Resume'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <SiteLayout>
      <div className={'flex flex-col'}>
        <div id="introSection" className={'flex flex-col md:flex-row bg-neutral-600'}>
          <img src={Headshot} alt="Barry Bach headshot" className={'w-full md:w-3/5 object-cover'}/>
          <div className={'flex flex-col grow w-full md:w-1/2 items-center'}>
            <div className={'flex flex-col w-full md:w-3/5 mt-8'}>
              <img src={Logo} alt="Barry Bach logo text" className={'w-3/5 mx-auto md:w-full'}/>
              <span className={'font-light text-center text-lg mt-4'}>Singer | Voice Actor</span>
            </div>
            
            <div className={'flex flex-col mt-4 md:mt-8 mb-8 lg:mb-8 space-y-6'}>
              <AudioPlayer title='Singing Demo' src={SingingDemo}/>
              {/* TODO: Remove once Character Demo is ready */}
              <div></div>
              <div></div>
              {/* <AudioPlayer title='Character Demo' src={SingingDemo}/> */}
              <AudioPlayer title='Home Studio Sample' src={StudioSample}/>
            </div>
          </div>
        </div>
        <a id="about"></a><div id="aboutSection" className={'flex flex-col space-y-4 pb-10 border-x border-neutral-600'}>
          <h2 className={'text-center text-4xl mt-8 mb-6'}>About</h2>
          <p className={'w-4/5 mx-auto text-center md:text-left'}>
            {'Barry Bach (he/him) is a professional singer and voice actor, currently residing in the greater Minneapolis area, best known for his recent work as vocalist for the opening theme of '}<i>Fire Emblem Engage</i>.{' His love for the vocal arts originated from both watching, as well as participating in, a variety of musical theatre productions throughout his teenage and early adult years. While simultaneously studying computer science at the University of Wisconsin - Eau Claire, Barry underwent further refinement of his voice and acting technique, and continued performing in various theatrical and operatic productions throughout his educational career.'}<br/><br/>
            {'Following his years of formal education, Barry spent several years as a member of Twin Cities based "a cappella" group, '}<i>Due North</i>{', performing for a large number of audiences within public, corporate, and education settings. Upon the group\'s disbandment in 2020, Barry honed in his skills and strengths, and began his pursuit towards voice acting and freelance singing opportunities.'}<br/><br/>
            {'Today, Barry has completed such work for a variety of clients, ranging from small independent productions to larger "triple-A" video game titles alike. His youthful, dynamic tenor voice is well suited for a variety of roles and genres of work, and he prides himself on his passion and genuine enthusiasm for his craft. Your project deserves more than just "a voice" to get the job done, and Barry is well-equipped and eager to help bring your creative vision to life!'}
          </p>
        </div>
        <a id="studio"></a>
        <div id="specsSection" className={'flex flex-col md:flex-row bg-[#e1e0da] text-slate-700'}>
          <StudioSpecs />
          <img className={'object-cover md:w-3/5'} src={StudioImage} alt='Image of home studio'/>
        </div>
        <a id="resume"></a>
        <div id="resumeSection" className={'border-x border-neutral-600'}>
          <Resume />
        </div>
      </div>
      <div id="footer" className={'bg-neutral-600 w-full flex items-center py-4'}>
        <span className={'mx-auto'}>&copy; Barry Bach {currentYear}</span>
      </div>
    </SiteLayout>
  )
}

export default App
