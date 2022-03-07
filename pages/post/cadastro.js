import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Cadasto() {
	return (
		<>
			<h1>CADASTRO</h1>

     <p> 
      <Link href="./login">
			  <h3>Login</h3>
			</Link> 
    </p>

    <p> 
      <Link href="./contato">
			  <h3>Contato</h3>
			</Link> 
    </p>

    <p> 
      <Link href="./sobre">
			  <h3>Sobre</h3>
			</Link> 
    </p>

    <p> 
      <Link href="./referencias">
			  <h3>Referências</h3>
			</Link> 
    </p>
    
			<h2>
				<Link href="/">
					<a>Voltar para a HOME</a>
				</Link>
			</h2>
		</>
	)
}