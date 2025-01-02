import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart, AiFillMinusCircle, AiFillPlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { mudarFavorito } from '@/store/reducers/itens'
import { mudarCarrinho, mudarQuantidade } from '@/store/reducers/carrinho'
import { RootState } from '@/store'
import { Produto } from '@/types/Produto'
import classNames from 'classnames'
import styles from './Item.module.scss'

const iconeProps = {
    size: 24,
    color: '#041833',
}

const quantidadeProps = {
    size: 32,
    color: '#1875E8',
}

interface ItemProps extends Produto {
    carrinho?: boolean
    quantidade?: number
}

const Item = ({
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    id,
    carrinho,
    quantidade = 0,
}: ItemProps) => {
    const dispatch = useDispatch()

    const estaNoCarrinho = useSelector((state: RootState) =>
        state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id)
    )

    const resolverFavorito = () => {
        dispatch(mudarFavorito(id))
    }

    const resolverCarrinho = () => {
        dispatch(mudarCarrinho(id))
    }

    return (
        <div
            className={classNames(styles.item, {
                [styles.itemNoCarrinho]: carrinho,
            })}
        >
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito ? (
                            <AiFillHeart
                                {...iconeProps}
                                color="#ff0000"
                                className={styles['item-acao']}
                                onClick={resolverFavorito}
                            />
                        ) : (
                            <AiOutlineHeart
                                {...iconeProps}
                                className={styles['item-acao']}
                                onClick={resolverFavorito}
                            />
                        )}
                        {carrinho ? (
                            <div className={styles.quantidade}>
                                Quantidade:
                                <AiFillMinusCircle
                                    {...quantidadeProps}
                                    onClick={() => {
                                        if (quantidade >= 1) {
                                            dispatch(mudarQuantidade({ id, quantidade: -1 }))
                                        }
                                    }}
                                />
                                <span>
                                    {String(quantidade || 0).padStart(2, '0')}
                                </span>
                                <AiFillPlusCircle
                                    {...quantidadeProps}
                                    onClick={() =>
                                        dispatch(mudarQuantidade({ id, quantidade: +1 }))
                                    }
                                />
                            </div>
                        ) : (
                            <FaCartPlus
                                {...iconeProps}
                                color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                                className={styles['item-acao']}
                                onClick={resolverCarrinho}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
