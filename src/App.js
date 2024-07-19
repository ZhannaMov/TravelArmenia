
import { BrowserRouter, Routes,Link,Route,useRoutes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {myRoutes} from './helpers/routing'
import {useTranslation} from "react-i18next";

function App() {
  let element = useRoutes(myRoutes);
    const {t} = useTranslation()
  return(
      <div>
      
          <Header/>
          {element}
          <Footer/>
      </div>
  )

}

export default App;
