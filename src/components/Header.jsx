import React from "react";
import styles from "../styles/Header.module.css";
import Navbar from "./Navbar"
import { useState } from "react";

const Header = () => {
  const [selectedButton, setSelectButton] = useState('Comprar');

  function handleButtonSelect(buttonType) {
    setSelectButton(buttonType);
  }

  return(
    <header className={styles.header_bg}>
      <div className={styles.teste}>
        <Navbar />
      </div>
      <div>
        <h1 className={styles.title}>Imóvel não se compra, se investe.</h1>
        <h2 className={styles.subtitle}>Chamos isso de consultoria Sort.</h2>
      </div>
      <form>
        <div className={styles.container_search}>
          <input type="text" placeholder="Busque por empreendimento"/>
        </div>
        <div className={styles.container_buttons}>
          <button 
          className={selectedButton === 'Comprar' ? styles.active : ''}
          onClick={() => handleButtonSelect('Comprar')}>
            Comprar
          </button>
          <button 
          className={selectedButton === 'Alugar' ? styles.active : ''}
          onClick={() => handleButtonSelect('Alugar')}>
            Alugar
          </button>
        </div>
        <div className={styles.button_search}>
          <button>Buscar</button>
        </div>
      </form>
    </header>
  )
}

export default Header