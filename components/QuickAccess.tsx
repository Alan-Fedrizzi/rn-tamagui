import { Stack, Text, XStack, YStack } from "tamagui";

const QUICK_ACTIONS = [
  { icon: "📅", label: "Agenda" },
  { icon: "👁️", label: "Espião Estratégico" },
  { icon: "📚", label: "Meus Estudos" },
  { icon: "📝", label: "Registro de Atividades" },
  { icon: "⏱️", label: "Pomodoro" },
  { icon: "📊", label: "Estatísticas" },
];

const QuickAccess = () => (
  <YStack
    bg="$tpColorNeutralSolidSoft90"
    br="$xl"
    p="$xl"
    gap="$lg"
    borderWidth={1}
    borderColor="$tpColorNeutralWeakSoft80"
  >
    <XStack ai="center" jc="space-between">
      <XStack ai="center" gap="$sm">
        <Text fontSize={18} fontWeight="700" color="$tpColorNeutralSolidHard90">
          Acesso Rápido
        </Text>
      </XStack>
      <Text color="$tpColorNeutralWeakHard70" fontSize={13}>
        Última atualização há 2h
      </Text>
    </XStack>

    <XStack gap="$sm" flexWrap="wrap">
      {QUICK_ACTIONS.map(({ icon, label }) => (
        <XStack
          key={label}
          ai="center"
          gap="$sm"
          px="$lg"
          py="$sm"
          br="$lg"
          bg="$tpColorNeutralSolidSoft80"
          borderWidth={1}
          borderColor="$tpColorNeutralWeakSoft70"
        >
          <Stack
            w="$md"
            h="$md"
            br="$full"
            ai="center"
            jc="center"
            bg="$tpColorNeutralSolidSoft70"
          >
            <Text fontSize={16}>{icon}</Text>
          </Stack>
          <Text color="$tpColorNeutralSolidHard90" fontWeight="500">
            {label}
          </Text>
        </XStack>
      ))}
    </XStack>
  </YStack>
);

export default QuickAccess;
