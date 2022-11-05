import PostList from "../components/PostList";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { config } from '../utils'
import { PostContext } from "../context/PostContext";

export default function HomePage() {
    const [listPost, setListPost] = useState([])

    const [searchValue, setSearchValue] = useState('');

    const [page, setPage] = useState(1)

    const [pages, setPages] = useState(0)

    const newArray = []

    const handleFetchData = async () => {
        try {
            //add thêm limit và page để chia page cho post-list
            const postData = await axios.get(`${config.API_URL}/posts?_limit=6&_page=${page}`)
            //chỗ này phải đổi lại thành data.data mới lấy đc post, nếu có chia page
            setListPost(postData.data.data)

            //tính tổng số trang
            const { _totalRows, _limit } = postData.data.pagination
            const pages = Math.ceil(_totalRows / _limit)
            setPages(pages)
        } catch (e) {
            console.log('handle fetch data', e)
        }
    }

    useEffect(() => {
        handleFetchData();
    }, [page])

    const handlePageChange = () => {
        setPage(page + 1)
    }

    const handleRemovePost = async (post) => {
        try {
            await axios.delete(`${config.API_URL}/posts/${post.id}`)
            handleFetchData();
        } catch (e) {
            console.log('handle remove post', e)
        }
    }

    const filteredPosts = [...listPost].filter((post) => {
        return post.title.toLowerCase().includes(searchValue);
    })

    return (
        <PostContext.Provider value={{
            removePost: handleRemovePost
        }}>
            <input placeholder="input to search" onChange={(event) => {
                setSearchValue(event.target.value)
            }}></input>
            Home Page
            <PostList posts={filteredPosts} />
            <button className="prev-btn">Prev</button>
            {/* {console.log('new array', newArray)}
            {
                newArray.from({ length: pages }).map((_, index) => {
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)} > </button>
                })
            } */}
            <button className="forw-btn" onClick={() => { handlePageChange() }}> Forward</button >
        </PostContext.Provider >
    )
}