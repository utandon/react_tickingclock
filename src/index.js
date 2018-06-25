import React from 'react';
import ReactDOM from 'react-dom';
import TickingClock from './TickingClock';
import './index.css';

// function tickingClock() {
//   const clock = (
//     <div>
//       <h2>Hello Everyone!</h2>
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
//   ReactDOM.render(clock, document.getElementById('root'));
// }
//
// setInterval(tickingClock, 1000);
//setInterval(()=>ReactDOM.render(<TickingClock date={new Date()}/>, document.getElementById('root')),1000);
ReactDOM.render(<TickingClock />, document.getElementById('root'));
