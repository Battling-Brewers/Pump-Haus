import React, { useState } from "react";
import { Button, Select, Icon, TextInput } from "react-materialize";
const Bmi = () => {
  return (
    <div>
      <Select
        id="height-select"
        multiple={false}
        onChange={function noRefCheck() {}}
        options={{
          classes: "",
          dropdownOptions: {
            alignment: "left",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          },
        }}
        value=""
      >
        <option disabled value="">
          How tall are you?
        </option>
        <option value="48">4'</option>
        <option value="49">4'1</option>
        <option value="50">4'2</option>
        <option value="51">4'3</option>
        <option value="52">4'4</option>
        <option value="53">4'5</option>
        <option value="54">4'6</option>
        <option value="55">4'7</option>
        <option value="56">4'8</option>
        <option value="57">4'9</option>
        <option value="58">4'10</option>
        <option value="59">4'11</option>
        <option value="60">5'</option>
        <option value="61">5'1</option>
        <option value="62">5'2</option>
        <option value="63">5'3</option>
        <option value="64">5'4</option>
        <option value="65">5'5</option>
        <option value="66">5'6</option>
        <option value="67">5'7</option>
        <option value="68">5'8</option>
        <option value="69">5'9</option>
        <option value="70">5'10</option>
        <option value="71">5'11</option>
        <option value="72">6'</option>
        <option value="73">6'1</option>
        <option value="74">6'2</option>
        <option value="75">6'3</option>
        <option value="76">6'4</option>
        <option value="77">6'5</option>
        <option value="78">6'6</option>
        <option value="79">6'7</option>
        <option value="80">6'8</option>
        <option value="81">6'9</option>
        <option value="82">6'10</option>
        <option value="83">6'11</option>
        <option value="84">7'</option>
      </Select>
      <textinput></textinput>
    </div>
  );
};

export default Bmi;
