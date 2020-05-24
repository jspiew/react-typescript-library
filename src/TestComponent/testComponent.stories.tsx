import React from "react";
import TestComponent from './testComponent';
import {ThemeType} from "./testComponent.types"
import { withKnobs, select} from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';


export default {
    title: "TestComponent",
    decorators: [withKnobs, withA11y]
};

export const Main = () => { 
    var selectables: { [key: string]: ThemeType } = {
        Primary: "primary",
        Secondary: "secondary"
    }

    var options = select("Theme", selectables, "primary");
    
    return <TestComponent theme={options} />

};
