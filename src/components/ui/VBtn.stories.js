export default {
  title: "Vuetify/VBtn",
  args: {
    label: "Button (deployed)",
    color: "primary",
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    color: { control: "text" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `
    <v-btn :color="args.color" :disabled="args.disabled">
      {{ args.label }}
    </v-btn>
  `,
});

export const Default = Template.bind({});

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Pressed = Template.bind({});
Pressed.parameters = { pseudo: { active: true } };

export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
