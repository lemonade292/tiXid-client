import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";


import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Enter from "./pages/Enter";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import Rules from "./pages/Rules";
import EditCard from "./pages/EditCard";
import Game from './pages/Game.js'
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import AnonPrivRoute from "./components/AnonPrivRoute";




class App extends Component {
  render() {
    return (
      //Tendremos a AuthProvider englobando a todos los componentes

      <AuthProvider>
      {/* //Pondremos un div con un className "container" que engloble a los componentes */}
        
        {/* //Renderizamos el componente Navbar para mostrarlo en todas las página */}
        
          {/* //Usaremos Switch para englobar las rutas */}
          <Switch>
          {/*Por último, usamos el componente AnonRoute y PrivateRoute para añadirle un exact path y asignarles los componentes,
            así como Signup y Login tienen que ser rutas públicas, Private tiene que ser una ruta privada*/}
            <AnonPrivRoute exact path='/' component={Enter} />
            <AnonRoute exact path='/signup' component={Signup}/>
            <AnonRoute exact path='/login' component={Login}/>
            <PrivateRoute exact path='/home' component={Home}/>   
            <PrivateRoute exact path='/profile' component={Profile}/>            
            <PrivateRoute exact path='/editCard/:id' component={EditCard}/>
            <Route exact path='/game' render={(props)=>(<Game {...props} />)}/>
            <PrivateRoute exact path='/rules' component={Rules}/>
            
            
          </Switch>
       
      </AuthProvider>
         
    );
  }
}

export default App;
