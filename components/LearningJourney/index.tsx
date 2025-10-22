import { Text, XStack, YStack } from "tamagui";

import MetricsRow from "./MetricsRow";
import NextSteps from "./NextSteps";
import ProgressTimeline from "./ProgressTimeline";

const LearningJourney = () => (
  <YStack gap="$lg">
    <YStack
      bg="$tpColorNeutralSolidSoft90"
      br="$xl"
      p="$xl"
      gap="$lg"
      borderWidth={1}
      borderColor="$tpColorNeutralWeakSoft80"
    >
      <XStack ai="center" jc="space-between">
        <Text fontSize={18} fontWeight="700" color="$tpColorNeutralSolidHard90">
          Sua Jornada no MEDCurso
        </Text>
        <Text color="$tpColorPrimarySolidHard20" fontWeight="600" fontSize={13}>
          Ver Relatório Completo
        </Text>
      </XStack>

      <ProgressTimeline />
      <MetricsRow />
      <NextSteps />
    </YStack>
  </YStack>
);

export default LearningJourney;
