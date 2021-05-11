// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Paragraph, TextField, Button, Card, Typography, Dropdown, DropdownList, DropdownListItem } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Dialog = (props: FieldProps) => {
  const params = props.sdk.parameters.invocation.ingredients
  console.log(params)
  console.log(props.sdk.dialogs)
  // Resize height of the iframe
  useEffect(() => {
    props.sdk.window.startAutoResizer();
  }, [props.sdk.window])

  /* If List exist condition
  var ingredientsState;
  if (props.sdk.field._value) {
    ingredientsState = props.sdk.field.getValue().list;
  } else {
    ingredientsState = []
  }

  // Manually assign values for objects
  const [newIngredient, setNewIngredient] = useState({ name: '', amount: '' });
  const [ingredients, setIngredients] = useState(ingredientsState);

  // Resize height of the iframe
  useEffect(() => {
    props.sdk.window.startAutoResizer();
  }, [props.sdk.window])

  // Re-render on value change and update state in realtime
  props.sdk.field.onValueChanged((value) => {
    if (props.sdk.field._value) {
      if (value.list.length !== ingredients.length) {
        setIngredients(value.list)
      }
    }
  });

  // Overload method to Dynamically change stuff
  // props.sdk.access.can()

  // Update Field Value
  const updateFieldValue = () => {
    if (props.sdk.field._value) {
      props.sdk.field.setValue({ list: props.sdk.field.getValue().list.concat([newIngredient]) })
      setNewIngredient({ name: '', amount: '' });
    }
  }*/

  // Manually assign values for objects


  // Dropdown 
  const [isOpen, setOpen] = React.useState(false);
  return (

    <Card title="Title">
      <div className="css-10dl36v">Butler App</div><br></br>
      <Typography>

        {params
          ?
          params.map(i => (
            <Card key={i.name} className="Card__Card___1_26G css-pivbrd Card__Card--padding-default___xgDF9 css-acwcvw" data-test-id="cf-ui-card">
              <div className="css-14jukvq">
                <img src="https://dogeseed.com/doge.2214a63a.svg" alt="Such Example" data-test-id="image" className="block" />
              </div>
              <section className="css-1phcpb1">
                <div className="Typography__Typography___1ZUfE" data-test-id="cf-ui-text-container">
                  <h1 className="Heading__Heading___83D3K css-1xd3m0r" data-test-id="cf-ui-heading">{i.name}</h1>
                  <h2 className="Subheading__Subheading___2mA9j css-1b5bj2l" data-test-id="cf-ui-subheading">{i.amount}</h2>
                </div>
              </section>
              <div className="css-zdzpuy">
                {/* Remove Btn */}
                <button className="IconButton__IconButton___1_XeU a11y__focus-outline--default___2hwb1 IconButton__IconButton--muted___22_IZ" data-test-id="cf-ui-icon-button" type="button" buttonType={"negative"}
                  onClick={() => removeIngredient(i)}>
                  <span className="TabFocusTrap__TabFocusTrap___39Vty IconButton__IconButton__inner___3fnmT">
                    <svg viewBox="0 0 24 24" width="1em" height="1em" data-test-id="cf-ui-icon" className="Icon__Icon___38Epv Icon__Icon--small___1yGZK undefined IconButton__IconButton__icon___3yZQN"><path d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"></path></svg>
                    <span className="IconButton__IconButton__label___1kp5y helpers__sr-only___3Kv3z">Delete</span>
                  </span>
                </button>
              </div>
            </Card>
          ))
          :
          <></>
        }
      </Typography>
    </Card>
  )
};

export default Dialog;
