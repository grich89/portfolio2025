import styles from "../app/page.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>  
        <h1>
          <strong>Greg</strong> is a Brooklyn-based software developer
        </h1>

        <p>With over a decade of experience, I specialize in building scalable web architectures in React, Next.js, and JavaScript/TypeScript.</p>
      </div>
    </div>
  )
}