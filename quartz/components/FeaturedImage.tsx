import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const FeaturedImage: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const featuredImage = fileData.frontmatter?.featuredImage
  if (featuredImage) {
    return (
      <div class={classNames(displayClass, "featured-image")}>
        <img src={featuredImage} alt="Featured" />
      </div>
    )
  } else {
    return null
  }
}

FeaturedImage.css = `
.featured-image {
  margin: 0.5rem 0;
  height: 200px;
  overflow: hidden;
}
.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
`

export default (() => FeaturedImage) satisfies QuartzComponentConstructor
