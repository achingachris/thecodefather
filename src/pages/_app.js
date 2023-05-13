import CodeFather from '@/layouts/CodeFather'

export default function App({ Component, pageProps }) {
  return (
    <CodeFather>
      <Component {...pageProps} />
    </CodeFather>
  )
}
