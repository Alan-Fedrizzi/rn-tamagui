import { useMemo, useState } from "react";

import { Bell, Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { Adapt, Button, Select, Sheet, Stack, Text, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const NAV_TABS = [
  "Home",
  "Agenda",
  "Espião Estratégico",
  "Meus Estudos",
  "Registro de Atividades",
  "Pomodoro",
  "Estatísticas",
];

const COURSES = [
  {
    label: "MEDCurso 2025",
    subtitle: "Painel Geral",
    value: "medcurso-2025",
  },
  {
    label: "MEDCurso Intensivo",
    subtitle: "Painel Intensivo",
    value: "medcurso-intensivo",
  },
  {
    label: "MEDCurso Revisão",
    subtitle: "Painel de Revisão",
    value: "medcurso-revisao",
  },
];

const TopNavigation = () => (
  <YStack
    bg="$tpColorNeutralSolidSoft90"
    br="$xl"
    p="$xl"
    gap="$lg"
    borderWidth={1}
    borderColor="$tpColorNeutralWeakSoft80"
  >
    <XStack ai="center" jc="space-between">
      <XStack ai="center" gap="$md">
        <CourseSelect />
      </XStack>
      <XStack ai="center" gap="$md">
        <Button
          w="$lg"
          h="$lg"
          br="$full"
          bg="transparent"
          color="$tpColorNeutralSolidHard80"
          borderWidth={1}
          borderColor="$tpColorNeutralSolidSoft70"
          icon={Bell}
          hoverStyle={{ bg: "$tpColorNeutralSolidSoft80" }}
          pressStyle={{ bg: "$tpColorNeutralSolidSoft70" }}
          accessibilityLabel="Notificações"
        />
        <Stack
          w="$lg"
          h="$lg"
          br="$full"
          overflow="hidden"
          bg="$tpColorNeutralSolidSoft70"
          ai="center"
          jc="center"
        >
          <Text color="$tpColorNeutralSolidHard80">👤</Text>
        </Stack>
      </XStack>
    </XStack>

    <XStack gap="$sm" flexWrap="wrap">
      {NAV_TABS.map((tab) => (
        <Stack
          key={tab}
          bg={
            tab === "Home"
              ? "$tpColorPrimaryWeakBase"
              : "$tpColorNeutralSolidSoft80"
          }
          px="$md"
          py="$sm"
          br="$lg"
        >
          <Text
            color={
              tab === "Home"
                ? "$tpColorPrimarySolidHard10"
                : "$tpColorNeutralSolidHard80"
            }
            fontSize={13}
            fontWeight={tab === "Home" ? "700" : "500"}
          >
            {tab}
          </Text>
        </Stack>
      ))}
    </XStack>
  </YStack>
);

const CourseSelect = () => {
  const [value, setValue] = useState(COURSES[0].value);
  const selected =
    COURSES.find((course) => course.value === value) ?? COURSES[0];

  const courseOptions = useMemo(
    () =>
      COURSES.map((course, index) => (
        <Select.Item key={course.value} index={index} value={course.value}>
          <Select.ItemText>{course.label}</Select.ItemText>
          <Select.ItemIndicator ml="auto">
            <Check size={16} />
          </Select.ItemIndicator>
        </Select.Item>
      )),
    []
  );

  return (
    <Select
      value={value}
      onValueChange={setValue}
      disablePreventBodyScroll
      native
    >
      <Select.Trigger
        w={240}
        br="$lg"
        bg="$tpColorPrimaryWeakBase"
        borderWidth={1}
        borderColor="$tpColorPrimaryWeakHard20"
        px="$md"
        py="$sm"
        iconAfter={ChevronDown}
      >
        <XStack ai="center" gap="$md">
          <Stack
            w="$lg"
            h="$lg"
            br="$full"
            ai="center"
            jc="center"
            bg="$tpColorPrimarySolidBase"
          >
            <Text fontWeight="700" color="$tpColorPrimarySolidHard40">
              MED
            </Text>
          </Stack>
          <YStack gap="$2xs">
            <Text color="$tpColorNeutralSolidHard90" fontWeight="600">
              {selected.label}
            </Text>
            <Text color="$tpColorNeutralWeakHard70" fontSize={12}>
              {selected.subtitle}
            </Text>
          </YStack>
        </XStack>
      </Select.Trigger>

      <Adapt when="maxMd" platform="touch">
        <Sheet modal animation="medium" dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            bg="$shadowColor"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          ai="center"
          jc="center"
          position="relative"
          w="100%"
          h="$3"
        >
          <ChevronUp size={16} />
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "transparent"]}
          />
        </Select.ScrollUpButton>

        <Select.Viewport style={{ minWidth: 240 }}>
          <Select.Group>
            <Select.Label>Cursos</Select.Label>
            {courseOptions}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          ai="center"
          jc="center"
          position="relative"
          w="100%"
          h="$3"
        >
          <ChevronDown size={16} />
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["transparent", "$background"]}
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
};

export default TopNavigation;
