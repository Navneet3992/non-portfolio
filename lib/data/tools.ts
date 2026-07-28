export type Tool = {
  name: string;
  category: string;
  icon: string;
};

export const tools: Tool[] = [
  { name: "Figma", category: "Design Tool", icon: "/images/icon-figma.svg" },
  { name: "After Effects", category: "Animation Tool", icon: "/images/icon-ae.svg" },
  { name: "Slack", category: "Collaboration Tool", icon: "/images/icon-slack.svg" },
  { name: "Jira", category: "Productivity Tool", icon: "/images/icon-jira.svg" },
  { name: "Chat GPT", category: "Brainstorming Tool", icon: "/images/icon-gpt.svg" },
  { name: "Claude", category: "Curiosity-Enabled Tool", icon: "/images/icon-claude.svg" },
];
