import React, { useState, useCallback, useEffect } from "react";
import {
  Layout,
  Card,
  FormLayout,
  TextField,
  OptionList,
  ChoiceList,
  Button,
  Popover,
} from "@shopify/polaris";
import { IntlAddress } from "./IntlAddress";
import { JapanAddress } from "./JapanAddress";

enum Countries {
  japan = "japan",
  usa = "usa",
}

const COUNTRIES = [
  { value: Countries.japan, label: "Japan" },
  { value: Countries.usa, label: "United States" },
];

interface AddressObj {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postcode: string;
}

export const Address = ({ client, checkoutId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [country, setCountry] = useState<Countries[]>([]);
  const [addressObj, setAddressObj] = useState<AddressObj>({});
  const [popoverActive, setPopoverActive] = useState(false);

  const handleFirstNameChange = useCallback((value) => setFirstName(value), []);
  const handleLastNameChange = useCallback((value) => setLastName(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);
  const handleCountryChange = (value) => {
    setCountry(value);
    togglePopoverActive();
  };

  const togglePopoverActive = () =>
    setPopoverActive((popoverActive) => !popoverActive);

  const countryLabel = () => {
    if (!country.length) return "Country";

    const countryValue = country[0];

    return COUNTRIES.filter((c) => c.value === countryValue)[0].label;
  };

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      {countryLabel()}
    </Button>
  );

  const handleUpdateAddress = () => {
    const shippingAddress = {
      address1: addressObj.addressLine1,
      address2: addressObj.addressLine2,
      city: addressObj.city,
      country: countryLabel(),
      firstName: firstName,
      lastName: lastName,
      phone: phoneNum,
      province: addressObj.state,
      zip: addressObj.postcode,
    };

    const allValues = Object.entries(shippingAddress);
    const filled = allValues.every((item) => {
      const key = item[0];
      const value = item[1];
      if (key !== "address2") {
        return !!value;
      } else {
        return true;
      }
    });

    if (filled) {
      console.log("updating checkout on shopify!");
      client.checkout
        .updateShippingAddress(checkoutId, shippingAddress)
        .then((checkout) => {
          console.log("checkout updates!", checkout);
        });
    }
  };
  useEffect(() => {
    handleUpdateAddress();
  }, [firstName, lastName, phoneNum, country, addressObj]);

  return (
    <Layout.AnnotatedSection
      title="Shipping Details"
      description="Please enter your shipping details here."
    >
      <Card sectioned>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              value={firstName}
              label="First name"
              placeholder="Tom"
              onChange={handleFirstNameChange}
            />
            <TextField
              value={lastName}
              label="Last name"
              placeholder="Ford"
              onChange={handleLastNameChange}
            />
          </FormLayout.Group>

          <TextField
            value={email}
            label="Email"
            placeholder="example@email.com"
            onChange={handleEmailChange}
          />

          <Popover
            active={popoverActive}
            activator={activator}
            onClose={togglePopoverActive}
          >
            <OptionList
              title="Country"
              onChange={handleCountryChange}
              options={COUNTRIES}
              selected={country}
            />
          </Popover>

          <br />

          {country[0] === Countries.japan ? (
            <JapanAddress onAddress={setAddressObj} />
          ) : (
            <IntlAddress onAddress={setAddressObj} />
          )}

          <TextField
            value={phoneNum}
            label={country[0] === Countries.japan ? "電話番号" : "Phone Number"}
            onChange={setPhoneNum}
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  );
};
