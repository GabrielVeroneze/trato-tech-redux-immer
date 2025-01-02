import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRoutes from '@/routes'
import store from '@/store'
import '@/sass/_global.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </StrictMode>
)
