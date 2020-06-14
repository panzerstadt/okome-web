import React, { useState, useEffect } from "react";
import { TextField, FormLayout } from "@shopify/polaris";

export const IntlAddress = ({ onAddress }) => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    if (onAddress) {
      const addressObj = {
        addressLine1,
        addressLine2,
        city,
        state,
        postcode,
      };
      onAddress(addressObj);
    }
  }, [addressLine1, addressLine2, city, state, postcode]);

  return (
    <FormLayout>
      <TextField
        value={addressLine1}
        label="Address Line 1"
        onChange={setAddressLine1}
      />

      <TextField
        label="Address Line 2 (optional)"
        labelHidden
        value={addressLine2}
        placeholder="(optional)"
        onChange={setAddressLine2}
      />

      <FormLayout.Group>
        <TextField value={city} label="City" onChange={setCity} />
        <TextField value={state} label="State" onChange={setState} />
      </FormLayout.Group>

      <TextField label="Postal Code" value={postcode} onChange={setPostcode} />
    </FormLayout>
  );
};
