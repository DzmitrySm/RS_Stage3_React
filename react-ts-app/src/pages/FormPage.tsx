import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../pages/FormPage.css";
import CardOnSubmit from "../components/CardOnSubmit";

const FormPage = function () {
  type Inputs = {
    productName: string;
    dateOfDelivery: string;
    countryOfDelivery: string;
    isTheProductInStock: boolean;
    isTheProductOnOrder: boolean;
    isCardOrCash: boolean;
    FileInput: File | Blob | MediaSource | string;
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    reValidateMode: "onSubmit",
    mode: "onSubmit",
  });

  const [arrayCards, setArrayCards] = useState<Inputs[] | []>([]);

  const onSubmit = (data: Inputs) => {
    setArrayCards((arrayCards) => [...arrayCards, data]);
    console.log(data);
  };

  const [typeInput, setTypeInput] = useState("text");

  const [isTheProductInStock, setisTheProductInStock] = useState(false);

  const [isTheProductOnOrder, setisTheProductOnOrder] = useState(false);

  const [isCardOrCash, setisCardOrCash] = useState(false);

  const handleTypeInput = () => setTypeInput("date");

  const handleTypeInputBlur = () => setTypeInput("text");

  useEffect(() => {
    if (isSubmitSuccessful) {
      setisTheProductInStock(false);
      setisTheProductOnOrder(false);
      setisCardOrCash(false);
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <h1 className="page_name">Form Page</h1>
      <form className="wrapper_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input_text"
          placeholder="Product name"
          {...register("productName", {
            required: true,
            minLength: 3,
            pattern: {
              value: /[A-Z]/,
              message: "uppercase first letter (only letters)",
            },
          })}
        />
        {errors.productName && (
          <span className="error_message">
            {errors.productName?.message?.toString() ||
              "The length must be longer than 2 letters"}
          </span>
        )}
        <input
          className="input_date"
          placeholder="Date of delivery"
          type={typeInput}
          {...register("dateOfDelivery", {
            validate: {
              date: (valueOfDate: string) =>
                Date.parse(valueOfDate) > Date.now() || "choose future date",
            },
          })}
          onFocus={handleTypeInput}
          onBlur={handleTypeInputBlur}
        />
        {errors.dateOfDelivery && (
          <span className="error_message">choose future date</span>
        )}
        <select
          className="select_bar"
          defaultValue="Country of delivery"
          {...register("countryOfDelivery", {
            validate: (value) =>
              value !== "Country of delivery" || "choose country of delivery",
          })}
        >
          <option disabled>Country of delivery</option>
          <option>Germany</option>
          <option>China</option>
          <option>USA</option>
          <option>Japan</option>
          <option>Finland</option>
        </select>
        {errors.countryOfDelivery && (
          <span className="error_message">choose country of delivery</span>
        )}
        <div>
          <label className="padding">
            In stock
            <input
              {...register("isTheProductInStock")}
              name="isStock"
              onChange={(e) => {
                setValue("isTheProductInStock", e.target.checked);
                setisTheProductInStock(!isTheProductInStock);
              }}
              checked={isTheProductInStock}
              type="checkbox"
              className="size_checkbox"
            />
          </label>
          <label>
            On order
            <input
              {...register("isTheProductOnOrder")}
              type="checkbox"
              name="onOrder"
              onChange={(e) => {
                setValue("isTheProductOnOrder", e.target.checked);
                setisTheProductOnOrder(!isTheProductOnOrder);
              }}
              checked={isTheProductOnOrder}
              className="size_checkbox"
            />
          </label>
        </div>
        <div className="switcher_wrapper">
          <span>Cash / Card</span>
          <div>
            <label className="switcher" htmlFor="switcherItem">
              <input
                {...register("isCardOrCash")}
                type="checkbox"
                name="isCashOrCard"
                onChange={(e) => {
                  setValue("isCardOrCash", e.target.checked);
                  setisCardOrCash(!isCardOrCash);
                }}
                checked={isCardOrCash}
                className="switcher_input"
                id="switcherItem"
              />
              <span className="switcher_circle"></span>
            </label>
          </div>
        </div>
        <div className="wrapper_input_file">
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
            {...(register("FileInput"), { required1: "true" })}
            type="file"
            name="FileInput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue("FileInput", e.target?.files ? e.target?.files[0] : "");
            }}
            id="avatar"
          />
          {errors.FileInput && (
            <span className="error_message">choose image</span>
          )}
        </div>
        <button type="submit" className="btn_submit">
          Submit
        </button>
      </form>
      <div className="cards_list">
        {arrayCards.map((card, index) => (
          <CardOnSubmit
            key={`${index}`}
            title={card.productName}
            dateDelivery={card.dateOfDelivery}
            countryDelivery={card.countryOfDelivery}
            inStock={
              card.isTheProductInStock
                ? "Stock: in Stock"
                : "Stock: not available"
            }
            onOrder={
              card.isTheProductOnOrder
                ? "Order: on Order"
                : "Order: not available"
            }
            kindOfPay={card.isCardOrCash ? "Pay: by card" : "Pay: by cash"}
            imagePath={
              card.FileInput ? URL.createObjectURL(card.FileInput as Blob) : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
