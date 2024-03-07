import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    //приложение полностью проинициализировалось и его можно отрисовывать
    tg.ready()
  }, [])

  const onClose = () => {
    //закрытие веб приложения
    tg.colse()
  }

  return (
    <div className="App">
      work
      <button onClick={onClose} >Закрыть</button>
    </div>
  );
}

export default App;
