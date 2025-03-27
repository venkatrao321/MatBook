import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff5733', // Custom primary button color
        },
      }}
    >
    <App />
    </ConfigProvider>
  </StrictMode>,
)
