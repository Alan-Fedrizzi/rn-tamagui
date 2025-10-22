import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme, YStack } from "tamagui";

import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="light">
        <YStack f={1} ai="center" jc="center" bg="$background" gap="$tpSpacingLg">
          <Text color="$color11" fontWeight="600">
            Open up App.tsx to start working on your app!
          </Text>
          <YStack
            bg="$tpColorPrimarySolidBase"
            px="$tpSpacingLg"
            py="$tpSpacingSm"
            br="$tpBorderRadiusMd"
            ai="center"
            gap="$tpSpacing2xs"
          >
            <Text color="$background" fontWeight="700">
              Tokens ativos
            </Text>
            <Text color="$tpColorNeutralSolidSoft90">
              Espacos, raios e cores do suporte disponiveis via tema.
            </Text>
          </YStack>
        </YStack>
        <StatusBar style="auto" />
      </Theme>
    </TamaguiProvider>
  );
}
