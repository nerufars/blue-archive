import { Image, Overlay } from './components';
import { useState } from 'react';
import AkoVoice from './assets/audio/Ako_kawai.mp3';


const Ako = require('./assets/images/ako.jpg');
const link = process.env.REACT_APP_URL_AKO;



function App() {
  const [isShown, setIsShown] = useState<boolean>(false);
 

  return (
    <div className='App'>
      <header className='App-header'>
        <Overlay className='overlay'>
          <Image
            src={Ako}
            height={'200px'}
            className='ako'
            href={link}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
        </Overlay>
        <p>
          Amau Ako / <span className='small'>天雨アコ</span>
        </p>
        <a
          style={{ fontSize: '1rem' }}
          className='App-link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'>
          Gehenna Academy!
        </a>
        {isShown && <audio src={AkoVoice} autoPlay loop />}
      </header>
    </div>
  );
}

export default App;
