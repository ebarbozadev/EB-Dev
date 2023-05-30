import React from 'react';
import styles from './Cabecalho.module.css';

export default function Cabecalho(){
    return(
        <header className={styles.header}>
            <h1>EBDEV</h1>
            <div className={styles.pesquisar}>
                <input type="text" name="" id="" placeholder='Busque por algo' />
            </div>
            <div className={styles.usuario}>
                <img src="imagens/usuario.jpg" alt="Foto do usuário logado" />
                <h3>Emanuel</h3>
            </div>
        </header>
    )
}