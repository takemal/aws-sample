import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Text } from './components/Text';
import { Counter } from './components/Counter';
import { ToggleButton } from './components/ToggleButton';
import { Modal } from './components/Modal';
import { Form } from './components/Form';
import { Search } from './components/Search';
import { Pixabay } from './components/Pixabay';

function App() {
  return (
    <div>
      <h1>Reactの基礎</h1>
      <Text />
      <Counter />
      <ToggleButton />
      <Modal />
      <Form />
      <Search />
      <Pixabay />
    </div>
  );
}

export default App
