import React from 'react';
import { BryntumScheduler } from 'bryntum-react-shared';

import './App.css';

function App() {
  return (
    <div className="App">
      <BryntumScheduler
        columns={[
          {
              field    : 'important',
              text     : 'Important<div class="small-text">(React editor)</div>',
              align    : 'center',
              width    : 120,
          },
        ]}
      />
    </div>
  );
}

export default App;
