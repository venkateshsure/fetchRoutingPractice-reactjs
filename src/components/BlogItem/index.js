// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {each} = props
  const {id, avatarUrl, author, title, topic, imageUrl} = each
  return (
    <Link to={`/blogs/${id}`}>
      <div className="sec-con">
        <img className="image" src={imageUrl} alt="img" />
        <div className="third-con">
          <h1>{title}</h1>
          <h1>{topic}</h1>
          <div className="fourth-con">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
