import TituloSemImagem from './TituloSemImagem'
import TituloComImagem from './TituloComImagem'
import styles from './Header.module.scss'

interface HeaderProps {
    titulo: string
    descricao: string
    imagem?: string
    className?: string
}

const Header = ({ titulo, descricao, imagem, className = '' }: HeaderProps) => {
    return (
        <header className={styles.header}>
            {titulo && !imagem && (
                <TituloSemImagem
                    titulo={titulo}
                    descricao={descricao}
                />
            )}
            {titulo && imagem && (
                <TituloComImagem
                    titulo={titulo}
                    descricao={descricao}
                    imagem={imagem}
                    className={className}
                />
            )}
        </header>
    )
}

export default Header
