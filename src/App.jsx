import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css'



export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Murilo Missura"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, culpa autem. At, deleniti! Iure ducimus provident id optio quaerat quam, excepturi, nam laborum dolore maiores ad reiciendis voluptatem, vero pariatur."
          />
          <Post
            author="Paloma Rosseto"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, culpa autem. At, deleniti! Iure ducimus provident id optio quaerat quam, excepturi, nam laborum dolore maiores ad reiciendis voluptatem, vero pariatur."
          />
        </main>

      </div>
    </div>
  )
}


