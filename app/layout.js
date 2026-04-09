export default function RootLayout({ children }) {
return (
<html>
<body style={{margin:0,fontFamily:'Inter, system-ui',
background:'radial-gradient(circle at top, #1e1b4b, #020617)',color:'white',overflow:'hidden'}}>
<style>{`
@keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}}
@keyframes blink {0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
`}</style>
{children}
</body>
</html>
);
}