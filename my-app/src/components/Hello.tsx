import * as React from 'react';

import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// export default ({name, enthusiasmLevel = 1}: Props) => {

const Hello = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
