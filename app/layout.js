export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{
        margin:0,
        fontFamily:'Inter, system-ui',
        background:'radial-gradient(circle at top, #1e1b4b, #020617)',
        color:'white'
      }}>
        {children}
      </body>
    </html>
  );
}
