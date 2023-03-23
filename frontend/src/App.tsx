import React from 'react';
import {teams} from './colleges';
import './App.css';
class Team extends React.Component
<{school: string, name:string, city:string, state:string}>{
  
  render(){
    const oneTeam = this.props;
    return(
    <div>
      <h1>{oneTeam.school}</h1>
      <p>{oneTeam.name}</p>
      <p>{[oneTeam.city, ",  ", oneTeam.state]}</p>

    </div>
    )
  }
}

function Teamlist(){
return (
  <div>
    {teams.map(oneTeam => <Team {...oneTeam}/>)}
  </div>
)
}
function App() {
  return (
    <div className="App">
      <h1>Welcome to the NCAA College Basketball InfoSite</h1>
      <Teamlist/>
    </div>

  );
}

export default App;
