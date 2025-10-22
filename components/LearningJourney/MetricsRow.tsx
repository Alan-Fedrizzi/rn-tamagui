import { Stack, Text, XStack, YStack } from "tamagui";

const MAP_PROGRESS_RATIO = 0.82;
const PERFORMANCE_PROGRESS_RATIO = 0.65;

const MetricsRow = () => (
  <XStack gap="$md" flexWrap="wrap">
    <YStack
      f={1}
      minW={260}
      bg="$tpColorNeutralSolidSoft80"
      br="$lg"
      p="$lg"
      gap="$md"
      borderWidth={1}
      borderColor="$tpColorNeutralWeakSoft70"
    >
      <XStack ai="center" jc="space-between">
        <Text fontSize={16} fontWeight="600" color="$tpColorNeutralSolidHard90">
          Mapa de Progresso
        </Text>
        <Text color="$tpColorPrimarySolidHard20" fontSize={13} fontWeight="600">
          Ver Métricas
        </Text>
      </XStack>

      <YStack gap="$sm">
        <Text fontSize={42} fontWeight="700" color="$tpColorPrimarySolidHard10">
          95%
        </Text>
        <XStack ai="center" jc="space-between">
          <Text color="$tpColorNeutralWeakHard70" fontSize={13}>
            Excelente! Você está à frente do cronograma.
          </Text>
          <Text color="$tpColorNeutralWeakHard70" fontSize={13}>
            Meta Ideal 77%
          </Text>
        </XStack>
      </YStack>

      <YStack gap="$2xs">
        <Text color="$tpColorNeutralWeakHard70" fontSize={12}>
          Linha do Tempo
        </Text>
        <Stack h={10} br="$full" bg="$tpColorNeutralStrongSoft80" overflow="hidden">
          <Stack
            h="100%"
            br="$full"
            bg="$tpColorPrimarySolidBase"
            style={{ width: `${MAP_PROGRESS_RATIO * 100}%` }}
          />
        </Stack>
      </YStack>
    </YStack>

    <YStack
      f={1}
      minW={260}
      bg="$tpColorNeutralSolidSoft80"
      br="$lg"
      p="$lg"
      gap="$md"
      borderWidth={1}
      borderColor="$tpColorNeutralWeakSoft70"
    >
      <XStack ai="center" jc="space-between">
        <Text fontSize={16} fontWeight="600" color="$tpColorNeutralSolidHard90">
          Desempenho Médio
        </Text>
        <Stack px="$sm" py="$2xs" br="$full" bg="$tpColorPrimaryWeakHard20">
          <Text color="$tpColorPrimarySolidHard20" fontSize={12} fontWeight="600">
            Excelente
          </Text>
        </Stack>
      </XStack>

      <YStack gap="$sm">
        <Text fontSize={38} fontWeight="700" color="$tpColorNeutralSolidHard100">
          79%
        </Text>
        <XStack ai="center" jc="space-between">
          <Text color="$tpColorNeutralWeakHard70" fontSize={13}>
            Média Ideal 70%
          </Text>
          <Text color="$tpColorNeutralWeakHard70" fontSize={13}>
            Meta Ideal 70%
          </Text>
        </XStack>
      </YStack>

      <YStack gap="$2xs">
        <Text color="$tpColorNeutralWeakHard70" fontSize={12}>
          Linha do Tempo
        </Text>
        <Stack h={10} br="$full" bg="$tpColorNeutralStrongSoft80" overflow="hidden">
          <Stack
            h="100%"
            br="$full"
            bg="$tpColorSecondarySolidBase"
            style={{ width: `${PERFORMANCE_PROGRESS_RATIO * 100}%` }}
          />
        </Stack>
      </YStack>
    </YStack>
  </XStack>
);

export default MetricsRow;
