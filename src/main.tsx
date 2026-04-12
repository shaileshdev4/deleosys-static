// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './style/gloabal.css'

// 🔥 Production-ready root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ✅ Global Loader (better UX) */}
    <Suspense fallback={
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px"
      }}>
        Loading App...
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
)