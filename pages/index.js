import Head from 'next/head'
import Image from '../public/image/cr7.jpeg'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LucasGodoy</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Seja bem-vindo ao <a>Next.js!</a>
        </h1>

        <img src="./public/image/cr7.jpeg" alt="CR7"/>
        <p className={styles.description}>
          Arquivo de <b>Lucas Godoy</b> | 07/02/2022
        </p>
    
        <div className={styles.grid}>

      <main className={styles.main}>
				<h2 className="title">
					Página{' '}
					<Link href="/post/sobre">
						<a>- SOBRE</a>
					</Link>
				</h2>
			</main>

      <main className={styles.main}>
				<h2 className="title">
					Página{' '}
					<Link href="/post/contato">
						<a> - CONTATO</a>
					</Link>
				</h2>
			</main>

        <main className={styles.main}>
				<h2 className="title">
					Página{' '}
					<Link href="/post/login">
						<a> - LOGIN</a>
					</Link>
				</h2>
			 </main>

        <main className={styles.main}>
				<h2 className="title">
					Página{' '}
					<Link href="/post/cadastro">
						<a> - CADASTRO</a>
					</Link>
				</h2>
			 </main>

        <main className={styles.main}>
				<h2 className="title">
					Página{' '}
					<Link href="/post/referencias">
						<a> - REFERÊNCIAS</a>
					</Link>
				</h2>
			 </main>
            
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Lucas Godoy
        </a>
      </footer>
    </div>
  )
}
