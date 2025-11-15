import { useState } from 'react'

export function DialogProvider({ children }) {
  return <>{children}</>
}

export function Dialog({ children }) {
  return <>{children}</>
}

export function DialogTrigger({ asChild, children, onClick }) {
  if (asChild && children.type) {
    return (
      <>
        {children}
      </>
    )
  }
  return <>{children}</>
}

export function DialogContent({ className, children, ...props }) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div className="fixed inset-0 bg-black/50" />
      <div
        className={`relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg rounded-lg ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({ className, ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className || ''}`} {...props} />
  )
}

export function DialogTitle({ className, ...props }) {
  return (
    <h2 className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`} {...props} />
  )
}

export function DialogDescription({ className, ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className || ''}`} {...props} />
  )
}

export function DialogClose({ onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M18 6l-12 12M6 6l12 12" />
      </svg>
    </button>
  )
}

// Enhanced dialog hook for managing state
export function useDialog() {
  const [open, setOpen] = useState(false)
  return { open, setOpen }
}
