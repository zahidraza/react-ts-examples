import * as React from 'react';

import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
// export default ({name, enthusiasmLevel = 1}: Props) => {
const Hello = ({name, enthusiasmLevel = 1}: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
