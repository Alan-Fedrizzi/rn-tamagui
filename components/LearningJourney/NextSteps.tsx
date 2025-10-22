import { Stack, Text, XStack, YStack } from "tamagui";

const NEXT_STEPS = [
  { title: "Explorar Conteúdo Avançado", progress: 0.45 },
  { title: "Desafios Extras", progress: 0.2 },
  { title: "Ver Relatório Completo", progress: 0.65 },
];

const NextSteps = () => (
  <YStack gap="$md">
    <Text fontSize={16} fontWeight="600" color="$tpColorNeutralSolidHard90">
      Seus Próximos Passos
    </Text>
    <XStack gap="$md" flexWrap="wrap">
      {NEXT_STEPS.map(({ title, progress }) => (
        <YStack
          key={title}
          f={1}
          minW={200}
          bg="$tpColorNeutralSolidSoft80"
          br="$lg"
          p="$lg"
          gap="$sm"
          borderWidth={1}
          borderColor="$tpColorNeutralWeakSoft70"
        >
          <Text color="$tpColorNeutralSolidHard90" fontWeight="600">
            {title}
          </Text>
          <Stack h={10} br="$full" bg="$tpColorNeutralStrongSoft80" overflow="hidden">
            <Stack
              h="100%"
              br="$full"
              bg="$tpColorPrimarySolidBase"
              style={{ width: `${progress * 100}%` }}
            />
          </Stack>
          <Text color="$tpColorNeutralWeakHard70" fontSize={12}>
            Progresso atual: {Math.round(progress * 100)}%
          </Text>
        </YStack>
      ))}
    </XStack>
  </YStack>
);

export default NextSteps;
