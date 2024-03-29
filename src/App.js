import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        //приложение полностью проинициализировалось и его можно отрисовывать
        tg.ready()
    }, [])


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
    </div>
  );
}

export default App;
