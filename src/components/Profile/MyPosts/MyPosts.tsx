import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {PostType} from '../../redux/State';

type MyPostsProps = {
    posts: PostType[]
    updateText: string
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsProps) => {

    const newTextElementHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget)

    };                // надо получить текущее значение в textarea


    let postsElements;              // надо отрисовать посты


    const addPost = () => {

        // добавляем новый пост

    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={newTextElementHandler}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;