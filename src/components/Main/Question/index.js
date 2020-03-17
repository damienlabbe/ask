import React from 'react';

import Counter from './Counter';

const Question = () => (
  <div>
    <Counter />
    <a>
      <h1>Question</h1>
      <p>posté par User23, il y a 2min</p>
    </a>
    <div>
      <button type="submit">Réponds!</button>
    </div>
  </div>

);

export default Question;
