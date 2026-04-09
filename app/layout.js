export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{
        margin:0,
        fontFamily:'Inter, system-ui',
        background:'radial-gradient(circle at top, #1e1b4b, #020617)',
        color:'white'
      }}>
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px);}
            50% { transform: translateY(-8px);}
            100% { transform: translateY(0px);}
          }
          @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
