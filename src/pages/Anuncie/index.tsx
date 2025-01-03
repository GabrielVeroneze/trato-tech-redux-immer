import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { cadastrarItem } from '@/store/reducers/itens'
import { RootState } from '@/store'
import { DadosCadastroProduto } from '@/types/DadosCadastroProduto'
import Header from '@/components/Header'
import Button from '@/components/Button'
import styles from './Anuncie.module.scss'

const Anuncie = () => {
    const dispatch = useDispatch()

    const categorias = useSelector((state: RootState) =>
        state.categorias.map(({ nome, id }) => ({ nome, id }))
    )

    const { register, handleSubmit } = useForm<DadosCadastroProduto>({
        defaultValues: {
            nome: '',
            descricao: '',
            imagem: '',
            categoria: '',
            preco: 0,
        },
    })

    const cadastrar = (data: DadosCadastroProduto) => {
        dispatch(cadastrarItem(data))
    }

    return (
        <div className={styles.container}>
            <Header
                titulo="Anuncie aqui!"
                descricao="Anuncie seu produto no melhor site do Brasil!"
            />
            <form
                className={styles.formulario}
                onSubmit={handleSubmit(cadastrar)}
            >
                <input
                    type="text"
                    placeholder="Nome do produto"
                    alt="nome do produto"
                    {...register('nome', { required: true })}
                />
                <input
                    type="text"
                    placeholder="Descrição do produto"
                    alt="descrição do produto"
                    {...register('descricao', { required: true })}
                />
                <input
                    type="text"
                    placeholder="URL da imagem do produto"
                    alt="URL da imagem do produto"
                    {...register('imagem', { required: true })}
                />
                <select {...register('categoria', { required: true })}>
                    <option value="" disabled>
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
                    {...register('preco', { required: true })}
                />
                <Button type="submit">Cadastrar Produto</Button>
            </form>
        </div>
    )
}

export default Anuncie
