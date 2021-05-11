// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { List, TextField, ListItem, Card, Icon, Flex, Button, Paragraph, Typography, EmptyState, Dropdown, DropdownList, DropdownListItem } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import Select from "react-dropdown-select";
import '../style.css'
interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {

  // Json Object
  const [starwars] = React.useState([
    {
      name: "Luke Skywalker",
      amount: "Luke Skywalker",
      image: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
    },
    {
      name: "C-3PO",
      amount: "C-3PO",
      image: "https://i.pinimg.com/564x/ae/cc/e5/aecce55bc3c39e0a4f9109e619a8806c.jpg"
    },
    {
      name: "R2-D2",
      amount: "R2-D2",
      image: "https://www.space-figuren.de/images/product_images/info_images/9696_0.jpg"
    }
  ]);

  // If List exist condition
  var valueState;
  if (props.sdk.field._value) {
    valueState = props.sdk.field.getValue().list;
  } else {
    valueState = []
  }

  // Manually assign values for objects
  const [newValue, setNewValue] = useState({ name: '', amount: '', image: '', });

  // Set State Items
  const [value, setValue] = useState(valueState);

  // Update Field Value
  const updateFieldValue = () => {
    if (props.sdk.field._value) {
      props.sdk.field.setValue( props.sdk.field.getValue() )
      setNewValue({ starwars });
    }
  }

  // Remove Object
  const removeIngredient = (i) => {
    if (props.sdk.field._value) {
      props.sdk.field.setValue(
        { list: props.sdk.field.getValue().list.filter(ing => ing.name !== i.name) }
      );
    }
  }

  // Overload method to Dynamically change stuff
  props.sdk.access.can()

  // Resize height of the iframe
  useEffect(() => {
    props.sdk.window.startAutoResizer();
  }, [props.sdk.window])

  // Debuging e.g. invoke can be sue for dialog modals
  console.log(props.sdk.parameters.instance);
  console.log(props.sdk.field);

  // Dialog functionality
  const openDialog = () => {
    props.sdk.dialogs.openCurrentApp({
      position: 'center',
      shouldCloseOnOverlayClick: true,
      shouldCloseOnEscapePress: true,
      parameters: { ingredients },
    })
  }

  return (
    <div>
      {/* btn to open Dialog */}
      <br />
      <Button
        marginTop="spacingXs"
        buttonType="muted"
        onClick={openDialog}>Add</Button>

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}>
        <option key={"test"} value={"test"}>
          Default
        </option>
        <option key={"starwars"} value={"starwars"}>
          starwars
        </option>
      </select>

      <Button onClick={updateFieldValue}>Add</Button>

      {console.log(starwars)}


    </div>
  );
};
export default Field;


