import React from "react";

const NewsItem=(props)=>{
  
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedAt,
      sourceName,
      // categoryName,
    } = props;


    return (
      <div className="my-3">
        <div className="card">
          <div>

          <span
            className={` badge rounded-pill bg-danger `}
            style={ { 
              display:'flex',
              justifyContent:'flex-right',
              position:'absolute',
              right:0
            }}
            
            >
            {sourceName.name}
            <span className="visually-hidden">unread messages</span>
          </span>
            </div>


          <img
            src={imageUrl}
            className="card-img-top cardImageStyle"
            alt=".../"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <i >
                 <p class="card-date">
                    By {author ? author : "Unknown"} 
                {" "}
                </p>
                <p class="card-date">

                Dated 
                 {new Date(publishedAt).toGMTString()}
               </p>
               </i>{" "}
            </p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


  export default NewsItem;