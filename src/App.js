// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Titles from "./components/Titles";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Titles theme={'Запеченный лосось'} title={'Лосось'} title2={'Кедровые орешки'} brut={'Butter Lettuce'} cab={'Кабачки'}/>
      <Titles theme={'Инструкция по приготовлению'} title={'Разогрейте духовку до 350 градусов.'} title2={'Намажьте оливковым маслом стеклянную форму для запекания,'} brut={'Дабавьте в блюдо лосось,чеснок и кедровые орехи,'} cab={'Выпекать 15 мин'}/>
      <Titles theme={'Рыбный такос'} title={'Сиг'} title2={'Сыр'} brut={'Салат Айсбер'} cab={'Томаты'}/>
      <Titles theme={'Инструкция по приготовлению'} title={'Готовить рыбу на гриле до горячего состояния,'} title2={'Положите рыбу на 3 лепешки'} brut={'Посыпьте их салатом, помидорами и сыром.'}/>
        <Footer/>
    </div>
  );
}

export default App;
