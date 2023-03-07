import React from 'react';

import Button from '../components/Button'

export default {
    title: "Button",
    component: Button,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Button {...args} ></Button>;

export const Primary = Template.bind({});

Primary.args = {  
    primary: true,  
    children: "Label",
    // onClick: () => alert("Hi"),
    label: 'Button',
};

