import "./post.scss";

const Post = (props) => {
    const { author, date, img, img_2x, tags, text, title, views } = props

    return (
        <div className="post">
            <div className="post-banner-container">
                <img src={img} srcSet={img_2x} alt="Banner" />
            </div>
            <div className="text-container">
                <p className="tags">{tags}</p>
                <h2 className="title">{title}</h2>
                <div className="post-stats-container">
                    <span className="author">{author}</span><span>.</span><span className="date">{date}</span><span>.</span><span className="views">{views}</span>
                </div>
                <p className="description">{text}</p>
            </div>
        </div>
    )
}

export default Post