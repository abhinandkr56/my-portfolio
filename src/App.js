import './App.css';
import Header from './Compnents/Header';
import Body from './Compnents/Body';
import Skills from './Compnents/Skills';
import { Experience } from './Compnents/Experience';

function App() {
  return (
    <div className='bg-dark-bg text-white min-h-screen'>
     <div className='p-24'>
        <Header/>
        <Body/>
        <Skills/>
        <Experience/>
     </div>
    </div>
  );
}

export default App;
