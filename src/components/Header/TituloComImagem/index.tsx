import styles from './TituloComImagem.module.scss'

interface TituloComImagemProps {
    titulo: string
    descricao: string
    imagem: string
    className: string
}

const TituloComImagem = ({
    titulo,
    descricao,
    imagem,
    className,
}: TituloComImagemProps) => {
    return (
        <div className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img src={imagem} alt={titulo} />
            </div>
        </div>
    )
}

export default TituloComImagem
