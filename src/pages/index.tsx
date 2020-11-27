import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.header}>
        <h1>Wow Commerce</h1>
        <input className={styles.inputsearch} type="text" placeholder="Search Product"/>
      </div>

      <div className={styles.container}>
        Content
      </div>
    </main>
  )
}
