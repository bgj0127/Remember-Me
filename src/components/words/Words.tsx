import * as React from 'react';

type WordsProps = {
  word?: string;
  mean?: string;
  datas?: any;
}

const Words: React.FC<WordsProps> = ({word,mean, datas}) => {
  return (
    <div>
      <p>{word}</p>
      <p>{mean}</p>
    </div>
  );
};

export default Words;