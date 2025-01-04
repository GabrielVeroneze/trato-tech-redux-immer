import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@/store'
import Header from '@/components/Header'
import Button from '@/components/Button'
import relogio from '@/assets/inicial.png'
import styles from './Home.module.scss'

const Home = () => {
    const categorias = useSelector((state: RootState) => state.categorias)
    const navigate = useNavigate()

    return (
        <div>
            <Header
                titulo="Classificados Tech"
                descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
                imagem={relogio}
                className={styles.header}
            >
                <Button onClick={() => navigate('/anuncie')}>
                    Quero anunciar
                </Button>
            </Header>
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/categoria/${categoria.id}`)
                            }
                        >
                            <img
                                src={categoria.thumbnail}
                                alt={categoria.nome}
                            />
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
