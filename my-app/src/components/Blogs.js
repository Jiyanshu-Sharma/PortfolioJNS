import React , {useState} from 'react'
import './Styles/Blogs.css'
import Card from './Card'
import BlogData from './Data/blogData'



function Blogs() {
  const [currentIndex , setCurrentIndex] = useState(0);
    const handleNextClick =()=>{
        setCurrentIndex(
            (prevIndex)=>(prevIndex+1)%BlogData.length
        )
    }
    const handlePrevClick =()=>{
        setCurrentIndex(
            (prevIndex)=>(prevIndex-1+BlogData.length)%BlogData.length
        )
    }
  return (
    <div>
      <div id = "blogs" className="Blog-heading">
      Blogs
      </div>
      <div className="Blog-description">
      <button onClick={handlePrevClick}>&lt;</button>
      {BlogData.slice(currentIndex, currentIndex + 3).map((Blog, index) => (
        
        <Card
          className ="Card"
           key={index}
          icon={Blog.icon}
          heading={Blog.heading}
          description={Blog.description}
          link={Blog.link}
        />
     
    ))}
         <button onClick={handleNextClick}>&gt;</button>
        </div> 
       
        

      
    </div>
  )
}

export default Blogs
