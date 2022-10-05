import { createRoot } from 'react-dom/client'
import App from './src/app.js'

const app = document.getElementById('app')
const root = createRoot(app)
root.render(<App />)
