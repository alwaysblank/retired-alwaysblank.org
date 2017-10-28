import React from "react"
import {Parser, HtmlRenderer} from "commonmark"

class ListContentBlock extends React.Component {
  render() {
    const block = this.props.content
    const reader = new Parser()
    const writer = new HtmlRenderer()
    const content = {__html: writer.render(reader.parse(block.content))}

    return (
      <div
        className='contentBlock--list'>
          <ul className='contentBlock--items'>
            {block.items.map(function(item, index) {
              let itemcontent = {__html: writer.render(reader.parse(item))}
              return <li 
                className='contentBlock--item'
                key={index}
                dangerouslySetInnerHTML={itemcontent}>
              </li>
            })}
          </ul>
      </div>
    )
  }
}

export default ListContentBlock