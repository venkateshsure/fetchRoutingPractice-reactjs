// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogList: {}, isLoading: true}

  componentDidMount = async () => {
    console.log(this.props)
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await data.json()
    const filterData = {
      id: each.id,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      author: each.author,
      title: each.title,
      topic: each.topic,
      content: each.content,
    }
    this.setState({blogList: filterData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    const {imageUrl, title, content, author, avatarUrl} = blogList
    return isLoading ? (
      <Loader color="#00BFFF" type="TailSpin" height={50} width={50} />
    ) : (
      <div className="sec-con-blog">
        <h1>{title}</h1>
        <div className="fifth-con-blog">
          <div className="fourth-con-blog">
            <img className="avatar-blog" src={avatarUrl} alt="avatar" />
            <p>{author}</p>
          </div>
          <img className="image-blog" src={imageUrl} alt={title} />
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
