import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Header from '@/components/Header'
import Button from '@/components/Button'
import styles from './Anuncie.module.scss'

const Anuncie = () => {
    const categorias = useSelector((state: RootState) =>
        state.categorias.map(({ nome, id }) => ({ nome, id }))
    )

    return (
        <div className={styles.container}>
            <Header
                titulo="Anuncie aqui!"
                descricao="Anuncie seu produto no melhor site do Brasil!"
            />
            <form className={styles.formulario}>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    alt="nome do produto"
                />
                <input
                    type="text"
                    placeholder="Descrição do produto"
                    alt="descrição do produto"
                />
                <input
                    type="text"
                    placeholder="URL da imagem do produto"
                    alt="URL da imagem do produto"
                />
                <select defaultValue="default">
                    <option value="default" disabled>
                        Selecione a categoria
                    </option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                <input type="number" placeholder="Preço do produto" />
                <Button type="submit">Cadastrar Produto</Button>
            </form>
        </div>
    )
}

export default Anuncie
