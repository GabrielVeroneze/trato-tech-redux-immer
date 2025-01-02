import { createSlice } from '@reduxjs/toolkit'
import { Categoria } from '@/types/Categoria'
import { categoriasAssets } from '@/assets/categorias'

const initialState: Categoria[] = [
    {
        nome: 'Eletrônicos',
        thumbnail: categoriasAssets.eletronicos.thumbnail,
        header: categoriasAssets.eletronicos.header,
        id: 'eletronicos',
        descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
    },
    {
        nome: 'Automotivo',
        thumbnail: categoriasAssets.automotivos.thumbnail,
        header: categoriasAssets.automotivos.header,
        id: 'automotivos',
        descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
    },
    {
        nome: 'Jogos',
        thumbnail: categoriasAssets.jogos.thumbnail,
        header: categoriasAssets.jogos.header,
        id: 'jogos',
        descricao: 'Adquira os consoles e jogos mais atuais do mercado!',
    },
    {
        nome: 'Escritório',
        thumbnail: categoriasAssets.escritorio.thumbnail,
        header: categoriasAssets.escritorio.header,
        id: 'escritorio',
        descricao: 'Tudo para o que escritório ficar incrível!',
    },
    {
        nome: 'Som e imagem',
        thumbnail: categoriasAssets.som.thumbnail,
        header: categoriasAssets.som.header,
        id: 'som',
        descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!',
    },
]

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {},
})

export default categoriasSlice.reducer
