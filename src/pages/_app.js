import CodeFather from '@/layouts/CodeFather'
import '@/styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <CodeFather>
      <Component {...pageProps} />
    </CodeFather>
  )
}
