import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme, YStack } from "tamagui";

import QuickAccess from "./components/QuickAccess";
import LearningJourney from "./components/LearningJourney";
import TopNavigation from "./components/TopNavigation";
import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <Theme name="dark">
        <YStack
          f={1}
          bg="$tpColorNeutralSolidSoft100"
          px="$2xl"
          py="$xl"
          gap="$xl"
        >
          <TopNavigation />
          <YStack gap="$xl">
            <QuickAccess />
            <LearningJourney />
          </YStack>
        </YStack>
        <StatusBar style="light" />
      </Theme>
    </TamaguiProvider>
  );
}
