import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'


function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img  />   
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/clientes">Clientes</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/vendas">Vendas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/relatorios">Relatórios</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/estoque">Estoque</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/ingredientes">Ingredientes</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default Navbar