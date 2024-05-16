

const PostCard = ({title,id,url,content}) => {
  return(
    <div className="post-card" key={id}>
      <img src={url} alt="post" width={300}/>
      <h6>{title}</h6>
    </div>
  )
}


export default PostCard;