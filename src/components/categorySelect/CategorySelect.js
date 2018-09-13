import React, { Component } from "react";
import "./categorySelect.css";

class CategorySelect extends Component {
  render() {
    return (
      <div className="CategorySelect">
        {this.props.categories.map(category => (
          <div className="CategorySelect__item" key={category.name}>
            <input
              className="CategorySelect__input"
              id={category.name}
              name={category.name}
              type="checkbox"
              checked={category.checked}
              onChange={e =>
                this.props.handleChange({
                  categories: this.props.categories.map(category => {
                    if (category.name === e.target.name) {
                      category.checked = !category.checked;
                    }
                    return category;
                  })
                })
              }
            />
            <label
              className={`CategorySelect__label ${category.name}`}
              htmlFor={category.name}
              title={`Klicken um ${
                category.description
              } anzuzeigen/auszublenden`}
            >
              {category.description}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default CategorySelect;
