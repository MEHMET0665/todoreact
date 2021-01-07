import './App.css';
import {BlogPost} from './BlogPost';
import Greeting from './Greeting';


function App() {
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <Greeting myName="Mehmet" isAdmin={true}/>
      <BlogPost isAdmin={false}/>
    </div>
  );
}

export default App;
