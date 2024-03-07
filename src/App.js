import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    //приложение полностью проинициализировалось и его можно отрисовывать
    tg.ready()
  }, [])


  return (
    <div className="App">
      work
      <Button onClick={onToggleButton} >Закрыть</Button>
    </div>
  );
}

export default App;
