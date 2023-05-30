import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav>
            <h2>Menu</h2>
            <ul>
                <li>
                    <a href='#'>
                        <div className={styles.ativo}>
                            <img src="icones/codigo.svg" alt="" />
                        </div>
                        Editor de código
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <div className={styles.inativo}>
                            <img src="icones/comunidade.svg" alt="" />
                        </div>
                        Comunidade
                    </a>
                </li>
            </ul>
        </nav>
    )
}