import { Fragment } from "react";
import Post from "./Post";
import posts from '../js/posts'
export default function PainelPosts() {
  
    function getPosts() {
        return (
            posts.map(obj => <Post titulo={obj.titulo} txt={obj.texto} autor={obj.autor} />)
        )
    }
    return (
        <section>
            {getPosts()}
            {/* <Post titulo="titulo 1" txt="ola" autor="dwadw"/> */}
        </section>
        )
}   