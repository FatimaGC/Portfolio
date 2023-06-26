import React from 'react';

import Avatar from '../components/Avatar'

export default {
    title: "Avatar",
    component: Avatar,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Avatar {...args} ></Avatar>;

export const Primary = Template.bind({});

Primary.args = {  
    variant: "PRIMARY",
    src: "https://place-puppy.com/public-images/index-page/image1/210x280-lg.jpg",
    children: "Label",
    firstName: "Fatima",
    lastName: "Guzman",
    colorScheme: "PRIMARY",
    isDisabled: false
};