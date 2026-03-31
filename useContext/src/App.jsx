import "./App.css";
import {useState} from "react"
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import UserList from "./components/userList/UserList";
import Counter from "./components/Counter";
import Footer from "./components/footer/Footer";
import UserContextProvider from "./components/UserContextProvider";


const App = () => {

  return (
    <UserContextProvider >
      <div className="app">
        <Header  />
        <Form  />
        <UserList  />
        <Counter/>
        <Footer />
      </div>
    </UserContextProvider>
  );
};

export default App;
