import { useState } from 'react'

export function Dialog({ children }) {
  return <>{children}</>
}

export function DialogTrigger({ asChild, children, onClick }) {
  if (asChild) {
    return children
  }
  return <button onClick={onClick}>{children}</button>
}

export function DialogContent({ className, children, ...props }) {
  return (
    <div className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

export function DialogHeader({ className, ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className || ''}`} {...props} />
  )
}

export function DialogFooter({ className, ...props }) {
  return (
    <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ''}`} {...props} />
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
