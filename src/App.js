import './App.css';
// import {useEffect, useState} from "react"
import Header from "./Header";
import Sidebar from './Sidebar';
import TopHeadline from "./TopHeadline";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import Login from './Login';
import Covid from './Covid';
import Business from './news_data/Business';
import Technology from './news_data/Technology';
import Entertainment from './news_data/Entertainment';
import Sports from './news_data/Sports';
import Science from './news_data/Science';
import India from './news_data/India';
import World from './news_data/World';
import Health from './news_data/Health';
import Localnews from './news_data/Localnews';

function App() {

  const [{user} ] = useStateValue();

  return (
    <div className="App">

    {
      ! user ? (
        
        <>
        <Login/>
        </>
         ) : 

      (
        
       
       <Router>
         <>
       <Header />
        <div className="app_body">
          <Sidebar/>

         <Switch>
           <Route path="/topStories">
             <TopHeadline/>
           </Route>

           <Route path="/covid">
               <Covid/>
          </Route>

          <Route path="/india">
               <India/>
          </Route>

          <Route path="/world">
               <World/>
          </Route>

          <Route path="/localnews">
               <Localnews/>
          </Route>

           <Route path="/business">
              <Business />
          </Route>

          <Route path="/technology">
              <Technology />
          </Route>

          <Route path="/entertainment">
              <Entertainment/>
          </Route>

          <Route path="/sports">
               <Sports/>
          </Route>

          <Route path="/science">
            <Science />
          </Route>

          <Route path="/health">
              <Health/>
          </Route>



            <Route path="/">
               
            </Route>

            </Switch>
      </div>
      </>
     
       </Router>

      )}
       
    </div>
  );
}

export default App;
