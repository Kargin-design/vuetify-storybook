import { setup } from "@storybook/vue3";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import StoryWrapper from "./StoryWrapper.vue";

const vuetify = createVuetify({ components, directives });

setup((app) => {
  app.use(vuetify);
});

export const decorators = [
  () => ({
    components: { StoryWrapper },
    template: "<StoryWrapper><story /></StoryWrapper>",
  }),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
