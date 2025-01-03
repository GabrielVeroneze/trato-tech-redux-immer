import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Header from '@/components/Header'
import Button from '@/components/Button'
import styles from './Anuncie.module.scss'

const Anuncie = () => {
    const categorias = useSelector((state: RootState) =>
        state.categorias.map(({ nome, id }) => ({ nome, id }))
    )

    const { register, handleSubmit } = useForm()

    const cadastrar = (parametro) => {
        console.log(parametro)
    }

    return (
        <div className={styles.container}>
            <Header
                titulo="Anuncie aqui!"
                descricao="Anuncie seu produto no melhor site do Brasil!"
            />
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <input
                    type="text"
                    placeholder="Nome do produto"
                    alt="nome do produto"
                    {...register('nome')}
                />
                <input
                    type="text"
                    placeholder="Descrição do produto"
                    alt="descrição do produto"
                    {...register('descricao')}
                />
                <input
                    type="text"
                    placeholder="URL da imagem do produto"
                    alt="URL da imagem do produto"
                    {...register('imagem')}
                />
                <select defaultValue="default" {...register('categoria')}>
                    <option value="default" disabled>
                        Selecione a categoria
                    </option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Preço do produto"
                    {...register('preco')}
                />
                <Button type="submit">Cadastrar Produto</Button>
            </form>
        </div>
    )
}

export default Anuncie
