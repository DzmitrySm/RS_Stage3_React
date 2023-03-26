import React, { MouseEvent } from "react";
import Header from "../components/Header";
import "../pages/FormPage.css";
import CardOnSubmit from "../components/CardOnSubmit";

class FormPage extends React.Component<
  object,
  {
    typeInput: string;
    valueTextInput: string | undefined;
    valueDateInput: string | undefined;
    valueSelectInput: string | undefined;
    valueCheckBoxStock: boolean | string | undefined;
    valueCheckBoxOrder: boolean | string | undefined;
    valueCheckBoxPay: boolean | string | undefined;
    valueFileInput: string | undefined;
    cards: [object] | [];
  }
> {
  textinput: React.RefObject<HTMLInputElement>;
  dateinput: React.RefObject<HTMLInputElement>;
  selectinput: React.RefObject<HTMLSelectElement>;
  checkboxinputStoc: React.RefObject<HTMLInputElement>;
  checkboxinputOrder: React.RefObject<HTMLInputElement>;
  checkboxinputPay: React.RefObject<HTMLInputElement>;
  fileinput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props = {}) {
    super(props);
    this.state = {
      typeInput: "text",
      valueTextInput: "",
      valueDateInput: "",
      valueSelectInput: "",
      valueCheckBoxStock: false,
      valueCheckBoxOrder: false,
      valueCheckBoxPay: false,
      valueFileInput: "",
      cards: [],
    };
    this.textinput = React.createRef();
    this.dateinput = React.createRef();
    this.selectinput = React.createRef();
    this.checkboxinputStoc = React.createRef();
    this.checkboxinputOrder = React.createRef();
    this.checkboxinputPay = React.createRef();
    this.fileinput = React.createRef();
    this.form = React.createRef();
  }

  handleTypeInput = () => this.setState({ typeInput: "date" });

  handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      valueTextInput: this.textinput?.current?.value,
      valueDateInput: this.dateinput?.current?.value,
      valueSelectInput: this.selectinput?.current?.value,
      valueCheckBoxStock: this.checkboxinputStoc?.current?.checked
        ? "In stock"
        : "There is no in stock",
      valueCheckBoxOrder: this.checkboxinputOrder?.current?.checked
        ? "On order"
        : "No available for order",
      valueCheckBoxPay: this.checkboxinputPay?.current?.checked
        ? "Card"
        : "Cash",
      valueFileInput:
        this.fileinput &&
        this.fileinput.current?.files &&
        this.fileinput.current.files[0]
          ? URL.createObjectURL(this.fileinput.current.files[0])
          : "",
    });
    this.form.current?.reset();
  };

  addNewCard = () => {
    return (
      <CardOnSubmit
        id={`${new Date()}`}
        title={this.state.valueTextInput}
        dateDelivery={this.state.valueDateInput}
        countryDelivery={this.state.valueSelectInput}
        inStock={this.state.valueCheckBoxStock}
        onOrder={this.state.valueCheckBoxOrder}
        kindOfPay={this.state.valueCheckBoxPay}
        imagePath={this.state.valueFileInput}
      />
    );
  };

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <h1 className="page_name">Form Page</h1>
        <form
          className="wrapper_form"
          onSubmit={this.handleSubmit}
          ref={this.form}
        >
          <input
            type="text"
            className="input_text"
            placeholder="Product name"
            ref={this.textinput}
          />
          <input
            type={this.state.typeInput}
            className="input_date"
            required
            placeholder="Date of delivery"
            onFocus={this.handleTypeInput}
            ref={this.dateinput}
          />
          <select
            className="select_bar"
            defaultValue="Country of delivery"
            ref={this.selectinput}
          >
            <option disabled>Country of delivery</option>
            <option>Germany</option>
            <option>China</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Finland</option>
          </select>
          <div>
            <label className="padding">
              In stock
              <input
                type="checkbox"
                name="common"
                className="size_checkbox"
                ref={this.checkboxinputStoc}
              />
            </label>
            <label>
              On order
              <input
                type="checkbox"
                name="common"
                className="size_checkbox"
                ref={this.checkboxinputOrder}
              />
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
                  ref={this.checkboxinputPay}
                />
                <span className="switcher_circle"></span>
              </label>
            </div>
          </div>
          <div className="wrapper_input_file">
            <label htmlFor="avatar">Choose a profile picture:</label>
            <input type="file" name="image" id="avatar" ref={this.fileinput} />
          </div>
          <button
            type="submit"
            className="btn_submit"
            onClick={this.addNewCard}
          >
            Submit
          </button>
        </form>
        <div className="cards_list">
          <CardOnSubmit
            key={`${new Date()}`}
            id={`${new Date()}`}
            title={this.state.valueTextInput}
            dateDelivery={this.state.valueDateInput}
            countryDelivery={this.state.valueSelectInput}
            inStock={this.state.valueCheckBoxStock}
            onOrder={this.state.valueCheckBoxOrder}
            kindOfPay={this.state.valueCheckBoxPay}
            imagePath={this.state.valueFileInput}
          />
        </div>
      </div>
    );
  }
}

export default FormPage;
