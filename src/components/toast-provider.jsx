import { createContext, useContext, useState } from 'react'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = (options) => {
    const id = Math.random()
    setToasts(prev => [...prev, { id, ...options }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ toast, toasts }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex max-w-[420px] flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`rounded-lg border shadow-lg p-4 ${
              t.variant === 'destructive'
                ? 'bg-destructive text-destructive-foreground'
                : 'bg-card text-card-foreground'
            }`}
          >
            {t.title && <div className="font-semibold">{t.title}</div>}
            {t.description && <div className="text-sm">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return { toast: context.toast }
}
