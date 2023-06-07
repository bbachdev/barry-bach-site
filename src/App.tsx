import AudioPlayer from './components/AudioPlayer'
import SiteLayout from './layouts/SiteLayout'

import SingingDemo from './assets/media/barryBachSingingDemo.mp3'

function App() {
return (
    <SiteLayout>
      <div>Test</div>
      <div className={'flex flex-col'}>
        <AudioPlayer title='Singing Demo' src={SingingDemo}/>
      </div>
    </SiteLayout>
  )
}

export default App
