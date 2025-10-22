import { createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";

import * as baseTokens from "./support/base";
import * as darkThemeTokens from "./support/dark";
import * as lightThemeTokens from "./support/light";

type TokenPrimitive = string | number;

const toTokenPrimitive = (value: unknown): TokenPrimitive => {
  if (value == null) {
    return "";
  }

  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (trimmed.includes("%")) {
      return trimmed;
    }

    const numeric = Number.parseFloat(trimmed);
    return Number.isNaN(numeric) ? trimmed : numeric;
  }

  if (typeof value === "object") {
    const candidate = value as { number?: unknown; original?: unknown };

    if (typeof candidate.number === "number") {
      return candidate.number;
    }

    if (typeof candidate.original === "string") {
      return toTokenPrimitive(candidate.original);
    }
  }

  return String(value);
};

const buildTokenGroup = <
  Source extends Record<string, unknown>,
  Prefix extends string,
>(
  source: Source,
  prefix: Prefix,
) =>
  Object.fromEntries(
    Object.entries(source)
      .filter(([key]) => key.startsWith(prefix))
      .map(
        ([key, value]) => [`$${key}`, toTokenPrimitive(value)] as const,
      ),
  ) as Record<
    `$${Extract<keyof Source, `${Prefix}${string}`>}`,
    TokenPrimitive
  >;

const spaceTokens = buildTokenGroup(baseTokens, "tpSpacing");
const sizeTokens = buildTokenGroup(baseTokens, "tpSizing");
const radiusTokens = buildTokenGroup(baseTokens, "tpBorderRadius");
const opacityTokens = buildTokenGroup(baseTokens, "tpOpacity");

type SupportColorKeys<Source extends Record<string, unknown>> = Extract<
  {
    [Key in keyof Source]: Key extends `tpColor${string}` ? Key : never;
  }[keyof Source],
  string
>;

const extendThemeWithSupportTokens = <
  Source extends Record<string, unknown>,
>(source: Source) =>
  Object.fromEntries(
    Object.entries(source)
      .filter(([key]) => key.startsWith("tpColor"))
      .map(([key, value]) => [key, String(value)] as const),
  ) as Record<SupportColorKeys<Source>, string>;

const customLightTheme = {
  ...defaultConfig.themes.light,
  ...extendThemeWithSupportTokens(lightThemeTokens),
};

const customDarkTheme = {
  ...defaultConfig.themes.dark,
  ...extendThemeWithSupportTokens(darkThemeTokens),
};

const tokens = {
  ...defaultConfig.tokens,
  space: {
    ...defaultConfig.tokens.space,
    ...spaceTokens,
  },
  size: {
    ...defaultConfig.tokens.size,
    ...sizeTokens,
  },
  radius: {
    ...defaultConfig.tokens.radius,
    ...radiusTokens,
  },
  opacity: {
    ...(
      (defaultConfig.tokens as {
        opacity?: Record<string, TokenPrimitive>;
      }).opacity ?? {}
    ),
    ...opacityTokens,
  },
};

const themes = {
  ...defaultConfig.themes,
  light: customLightTheme,
  dark: customDarkTheme,
};

const shorthands = {
  ...defaultConfig.shorthands,
  f: "flex",
  ai: "alignItems",
  jc: "justifyContent",
  br: "borderRadius",
} as typeof defaultConfig.shorthands & {
  f: "flex";
  ai: "alignItems";
  jc: "justifyContent";
  br: "borderRadius";
};

export const config = createTamagui({
  ...defaultConfig,
  shorthands,
  tokens,
  themes,
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // Tamagui picks up this declaration to strongly type theme/token usage.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
