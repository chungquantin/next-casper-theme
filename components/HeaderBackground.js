import React from 'react'

const HeaderBackground = ({ background, children }) => {

  return(
    <>
      <div
        className=
          {`outer site-header-background ${background ? "responsive-header-img" : "no-image"}`}
      >
        {children}
      </div>
      <style jsx>
        {`
          .responsive-header-img {
              background-image: url(${background});
          }
          //
          // @media(max-width: 1000px) {
          //     .responsive-header-img {
          //         background-image: url({{img_url background size='l'}});
          //         background-image: -webkit-image-set(url({{img_url background size='l'}}) 1x,
          //             url({{img_url background size='xl'}}) 2x);
          //         background-image: image-set(url({{img_url background size='l'}}) 1x,
          //             url({{img_url background size='xl'}}) 2x);
          //     }
          // }
          //
          // @media(max-width: 600px) {
          //     .responsive-header-img {
          //         background-image: url({{img_url background size='m'}});
          //         background-image: -webkit-image-set(url({{img_url background size='m'}}) 1x,
          //             url({{img_url background size='l'}}) 2x);
          //         background-image: image-set(url({{img_url background size='m'}}) 1x,
          //             url({{img_url background size='l'}}) 2x);
          //     }
          // }
        `}
      </style>
    </>
  )
}

export default HeaderBackground
