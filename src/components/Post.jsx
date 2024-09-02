import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/mmissura.png" />
                    <div className={styles.authorInfo}>
                        <strong>Murilo Missura</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='02 de setembro as 08:00' dateTime='2024-09-02 08:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu GitHub</p>
                <p>
                    <a href=''>github.com/mmissura</a></p>
                <p>
                    <a href=''>#web </a>{' '}
                    <a href=''>#frontend</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>


        </article>
    )
}