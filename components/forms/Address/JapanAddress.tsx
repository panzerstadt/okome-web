import React, { useState, useEffect } from "react";
import { TextField, FormLayout } from "@shopify/polaris";

export const JapanAddress = ({ onAddress }) => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [cityOrWard, setCityOrWard] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    if (onAddress) {
      const addressObj = {
        addressLine1,
        addressLine2,
        city: cityOrWard,
        state,
        postcode,
      };
      onAddress(addressObj);
    }
  }, [addressLine1, addressLine2, cityOrWard, state, postcode]);

  return (
    <FormLayout>
      <TextField
        value={addressLine1}
        label="番地"
        placeholder="番地"
        onChange={setAddressLine1}
      />

      <TextField
        label="Address Line 2 (optional)"
        labelHidden
        value={addressLine2}
        placeholder="マンション、建物名など"
        onChange={setAddressLine2}
      />

      <FormLayout.Group>
        <TextField value={postcode} label="郵便番号" onChange={setPostcode} />
        <TextField value={state} label="State" onChange={setState} />
      </FormLayout.Group>

      <TextField label="市区町村" value={cityOrWard} onChange={setCityOrWard} />
    </FormLayout>
  );
};
