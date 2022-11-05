import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostContext";

function Post(props) {

    // syntax tạo context để xài đc function có trong PostContext
    const postContext = useContext(PostContext)

    const { post, handleRemovePost } = props;

    const navigate = useNavigate()

    const handleNavigateToDetail = () => {
        navigate(`detail/${post.id}`)
    }

    const handleNavigateToEditPage = () => {
        navigate(`add-edit-post/${post.id}`)
    }

    return <div className="post" onClick={handleNavigateToDetail}>
        <p>
            Post title: {post.title}
        </p>
        <p>
            Post author: {post.author}
        </p>
        <button onClick={(e) => {
            e.stopPropagation();
            handleNavigateToEditPage()
        }}>
            Edit
        </button>
        <button onClick={(e) => {
            //stopPropagation -> prevent event của thằng div cha
            e.stopPropagation();
            postContext.removePost(post)
            // handleRemovePost(post)

        }}>Remove</button>
    </div>
}
export default Post