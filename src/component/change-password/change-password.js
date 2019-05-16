import React, { Component } from 'react';
import './test.scss';
class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
      items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
    }
  }
  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    console.log('drag----', index);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];
    console.log('drop ---', index);
    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter(item => item !== this.draggedItem);

     console.log('xxxxxxxxxxxxx drop index', this.draggedItem);
     // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
    console.log('xxxxxxxxxxxxx drop', this.state.items);
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };
    render() {
   
        return (
            <div className="">
             <div className="App">
        <main>
          <h3>List of items</h3>
          <ul>
            {this.state.items.map((value, index) => (
              <li key={value} onDragOver={() => this.onDragOver(index)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={e => this.onDragStart(e, index)}
                  onDragEnd={this.onDragEnd}
                >
                 hhhhhh
                </div>
                <span className="content">{value}</span>
              </li>
            ))}
          </ul>
        </main>
      </div>
             
            </div>
        );
    }
}

export default ChangePassword; 