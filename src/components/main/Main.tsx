import * as React from 'react';
import * as S from './style';
import Words from '../words/Words';

const Main = () => {
  const [inputs, setInputs] = React.useState({
    word: "",
    mean: "",
  });
  const [datas, setDatas] = React.useState<any>(
    () => JSON.parse(localStorage.getItem('datas')!) || []
  );

  React.useEffect(()=>{
    localStorage.setItem('datas',JSON.stringify(datas));
  },[datas]);

  const changeInput = (e: React.ChangeEvent<{ value: string, name: string}>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const setDataToLocalStorage = () => {
    setDatas([...datas,inputs]);
  }

  const enter = (e: any) => {
    if(e.key === "Enter") {
      e.preventDefault();
      setDataToLocalStorage();
    }
  }
  
  return (
    <S.Contanier>
      <S.MainTitle>Remember Me </S.MainTitle>
      <S.Text>as well as English,</S.Text>
      <S.Text>한국어도 됩니다.</S.Text>
      <S.Text>もちろん、日本語もできます。</S.Text>
      {/* <S.Background src="../../assets/images/cat.png" /> */}
      {datas && datas.map((d: any)=>(
        <Words
          key={d.word+"wjefiweof"}
          word={d.word}
          mean={d.mean}
        />
      ))}
      <S.Input 
        type="text"
        name="word"
        onChange={changeInput} 
      />
      <S.Input 
        type="text"
        name="mean"
        onChange={changeInput}
        onKeyPress={enter}
      />
      <S.Button onClick={setDataToLocalStorage}>등록하기</S.Button>
    </S.Contanier>
  );
};

export default Main;