import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className="perfil-avatar" src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className="perfil-titulo">
                {nomeUsuario}
            </h1>
        </header>
    );
};

export default Perfil;