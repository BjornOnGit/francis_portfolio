"use client"

export function ThemeProvider({ children, ...props }) {
  return <div {...props}>{children}</div>
}
