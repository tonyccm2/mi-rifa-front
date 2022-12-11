import { useTheme } from '@emotion/react'

function ContentMainBox ({ children }) {
  const theme = useTheme()
  return <div className="h-full rounded-md" style={{ backgroundColor: theme.palette.background.default, border: `2px solid ${theme.palette.divider}` }}>{children}</div>
}

function Title ({ children }) {
  const theme = useTheme()
  return <div className="p-4 font-semibold" style={{ backgroundColor: theme.palette.divider }} >{children}</div>
}

function Content ({ children }) {
  const theme = useTheme()
  return (
      <section className="p-2" style={{ backgroundColor: theme.palette.background.default }}>
        {children}
      </section>
  )
}

ContentMainBox.Title = Title
ContentMainBox.Content = Content

export default ContentMainBox