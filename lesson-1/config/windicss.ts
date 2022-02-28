import { defineWindiSetup } from "@slidev/types";

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  extract: {
    include: ["../../components/*.vue"],
  },
}));
