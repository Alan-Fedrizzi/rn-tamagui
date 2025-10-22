import { Stack, Text, XStack, YStack } from "tamagui";

const TIMELINE_PROGRESS = 0.77;

const TIMELINE_MILESTONES = [
  { label: "Seu Progresso", detail: "77%", isActive: true },
  { label: "Progresso Ideal", detail: null, isActive: false },
  { label: "12 Semanas Restantes", detail: null, isActive: false },
];

const ProgressTimeline = () => (
  <YStack
    bg="$tpColorNeutralSolidSoft80"
    br="$lg"
    p="$lg"
    gap="$md"
    borderWidth={1}
    borderColor="$tpColorNeutralWeakSoft70"
  >
    <XStack ai="center" jc="space-between">
      <XStack ai="center" gap="$sm">
        <Text fontSize={16} fontWeight="600" color="$tpColorNeutralSolidHard90">
          Mapa de Progresso
        </Text>
      </XStack>
      <Text color="$tpColorPrimarySolidHard20" fontWeight="600" fontSize={13}>
        Ver Métricas
      </Text>
    </XStack>

    <YStack gap="$md">
      <Stack h={14} br="$full" bg="$tpColorNeutralStrongSoft80" overflow="hidden">
        <Stack
          h="100%"
          br="$full"
          bg="$tpColorPrimarySolidBase"
          style={{ width: `${TIMELINE_PROGRESS * 100}%` }}
        />
      </Stack>

      <XStack jc="space-between" ai="center">
        {TIMELINE_MILESTONES.map(({ label, detail, isActive }) => (
          <YStack key={label} ai="center" gap="$2xs">
            <Stack
              w="$lg"
              h="$lg"
              br="$full"
              ai="center"
              jc="center"
              bg={
                isActive
                  ? "$tpColorPrimarySolidHard20"
                  : "$tpColorNeutralSolidSoft70"
              }
              borderWidth={2}
              borderColor={
                isActive
                  ? "$tpColorPrimarySolidBase"
                  : "$tpColorNeutralStrongSoft80"
              }
            >
              <Text
                color={
                  isActive
                    ? "$tpColorPrimarySolidSoft30"
                    : "$tpColorNeutralSolidHard80"
                }
                fontWeight="600"
                fontSize={13}
              >
                {isActive ? detail : "•"}
              </Text>
            </Stack>
            <Text
              color={
                isActive
                  ? "$tpColorPrimarySolidHard20"
                  : "$tpColorNeutralWeakHard70"
              }
              fontSize={12}
              text="center"
            >
              {label}
            </Text>
          </YStack>
        ))}
      </XStack>
    </YStack>
  </YStack>
);

export default ProgressTimeline;
