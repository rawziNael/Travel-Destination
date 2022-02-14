import '../App';
import Header  from './Header'; 
import data from '../data.json'
import Footer from './Footer';
import Tours from './Tours';


function App() {
  return (
    <>
      {/* add Header  */}
      <Header data={data}/>

      {/* add Tours */}
      <Tours data={data}/>

      {/* add Footer  */}
     <Footer data={data}/>
    </>
  );
}

export default App;