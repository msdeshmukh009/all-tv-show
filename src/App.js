import './App.css';
import {useState,useEffect} from 'react';
import ShowList from './ShowList';
import Summary from './Summary';
function App() {
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowData(data);
      });
  }, []);
  return (
    <div className="App">
        {showData && <ShowList showData={showData} />}
        {showData && <Summary showData={showData} />}
    </div>
  );
}

export default App;
