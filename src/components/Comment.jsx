import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/mmissura.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={authorAndTime}>
                            <strong>Murilo Missura</strong>
                            <time title='02 de setembro as 08:00' dateTime='2024-09-02 08:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>


                    </header>
                    <p>Muito bom Dev</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>

                </footer>
            </div>

        </div>
    )
}