import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const Elements = prismicDOM.RichText.Elements

export default function (type, element, content, children) {
  // Generate links to Prismic Documents as <router-link> components
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<router-link to="${url}">${content}</router-link>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${
      element.alt || ''
    }" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<router-link to="${url}">${result}</router-link>`
      } else {
        const target = element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  if (type === Elements.embed) {
    return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
          class="prismic-video"
        >
          ${element.oembed.html}
        </div>
      `
  }

  if (type === Elements.preformatted) {
    return `<pre>
                    <code class="language-javascript">${children
                      .join('')
                      .replace(/<br\s*?\/?>/g, '\n')}</code>
                </pre>`
  }

  // Return null to stick with the default behavior for everything else
  return null
}
