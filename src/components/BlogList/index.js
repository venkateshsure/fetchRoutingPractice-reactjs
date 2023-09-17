// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/blogs')
    const response = await fetchData.json()
    console.log(response)
    const filterData = response.map(each => ({
      id: each.id,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      author: each.author,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogsData: filterData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="con">
        {isLoading ? (
          <div data-testid="loader">
            <Loader color="#00BFFF" type="tail spin" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem each={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
