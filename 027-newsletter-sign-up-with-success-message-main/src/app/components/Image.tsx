import React from 'react'

interface iImage {
    mobileSrc: string,
    tabletSrc: string,
    desktopSrc: string,
    alt: string
}

function Image({mobileSrc, tabletSrc, desktopSrc, alt}:iImage) {
  return (
    <picture>
      <source 
        srcSet={desktopSrc}
        media="(min-width:1024px)"
        />
        <source 
        srcSet={tabletSrc}
        media="(min-width:768px)"
        />
        <img
        className="
            w-full lg:h-[440px]
        "
        src={mobileSrc} alt={alt}
        />
    </picture>
  )
}

export default Image