import React from 'react';

import Button from '../components/Button'

export default {
    title: "Button",
    component: Button,

    argTypes: {
        backgroundColor: {control: 'color'},
        onClick: {
            table: {
              category: 'Events',
            },
          },
    },
};

const Template = (args) => <Button {...args} ></Button>;

export const Primary = Template.bind({});

Primary.args = {  
    variant: "PRIMARY",
    // primary: true,  
    children: "Label",
    // onClick: () => alert("Hi"),
    label: 'Button',
    href: "https://www.google.com/",
    colorScheme: "DANGER",
    isDisabled: false
};

export const Secondary = Template.bind({});

Secondary.args = {  
  variant: "SECONDARY",
  children: "Label",
  // onClick: () => alert("Hi"),
  label: 'Button',
  href: "https://www.google.com/",
  colorScheme: "PRIMARY",
  isDisabled: false
};
