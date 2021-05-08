import logo from './logo.svg';
import './App.css';
import Image from './component/profile/ProfilePhoto' ;
import Name from './component/profile/FullName'; 
import Adresse from './component/profile/Address';


function App() {
  return (
    <div>
    <Image/>        
    <p >my name is <Name/> i'am 20 years old and i'am a computer engineering student at faculty of science of tunis campus el manar </p>
    <p> i was born in luxembourg and i live in tunisia in <Adresse/> </p>                            
    </div>
  );
}
   
export default App;
