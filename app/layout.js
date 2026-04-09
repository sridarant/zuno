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
            50% { transform: translateY(-10px);}
            100% { transform: translateY(0px);}
          }
          @keyframes blink {
            0%, 92%, 100% { transform: scaleY(1);}
            95% { transform: scaleY(0.1);}
          }
          @keyframes shake {
            0%,100% { transform: translateX(0);}
            25% { transform: translateX(-3px);}
            75% { transform: translateX(3px);}
          }
          @keyframes glow {
            0% { box-shadow:0 0 0 rgba(124,58,237,0.5);}
            50% { box-shadow:0 0 30px rgba(124,58,237,0.8);}
            100% { box-shadow:0 0 0 rgba(124,58,237,0.5);}
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
