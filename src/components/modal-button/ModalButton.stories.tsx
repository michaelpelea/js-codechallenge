import { Meta, StoryFn } from "@storybook/react";

import ModalButton, { IModalButtonProps } from "./ModalButton";

// Settings
export default {
  title: "Button/ModalButton",
  component: ModalButton,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<IModalButtonProps> = (args) => <ModalButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
