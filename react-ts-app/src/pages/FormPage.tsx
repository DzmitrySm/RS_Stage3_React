import React from "react";
import Header from "../components/Header";
import "../pages/FormPage.css";

class FormPage extends React.Component<object, { typeInput: string }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      typeInput: "text",
    };
  }

  handleTypeInput = () => this.setState({ typeInput: "date" });

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <h1 className="page_name">Form Page</h1>
        <form className="wrapper_form">
          <input
            type="text"
            className="input_text"
            placeholder="Product name"
          />
          <input
            type={this.state.typeInput}
            className="input_date"
            required
            placeholder="Date of delivery"
            onFocus={this.handleTypeInput}
          />
          <select className="select_bar" defaultValue="Country of delivery">
            <option>Country of delivery</option>
            <option>Germany</option>
            <option>China</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Finland</option>
          </select>
          <div>
            <label className="padding">
              In stock
              <input type="checkbox" name="common" className="size_checkbox" />
            </label>
            <label>
              On order
              <input type="checkbox" name="common" className="size_checkbox" />
            </label>
          </div>
          <div className="switcher_wrapper">
            <span>Cash / Card</span>
            <div>
              <label className="switcher">
                <input
                  type="checkbox"
                  name="radio-btns"
                  className="switcher_input"
                />
                <span className="switcher_circle"></span>
              </label>
            </div>
          </div>
          <div className="wrapper_input_file">
            <label htmlFor="avatar">Choose a profile picture:</label>
            <input type="file" name="image" id="avatar" />
          </div>
          <button type="submit" className="btn_submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormPage;
