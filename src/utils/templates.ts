import { CodeChange } from '../types';

interface PRDescriptionParams {
  issueNumber: number;
  changes: CodeChange[];
  analysis: string;
}

export function generatePRDescription({ issueNumber, changes, analysis }: PRDescriptionParams): string {
  return `
## 🤖 AI-Generated Pull Request

This PR was automatically generated in response to issue #${issueNumber}.

### 📝 Analysis
${analysis}

### 🔄 Changes Made
${changes.map(change => `
* \`${change.path}\`: ${change.message}`).join('\n')}

---
Generated by Axiotree Langchain AI PR Bot 🌲
Use \`/axiotree-langchain-ai-change\` followed by your request to suggest changes.
`;
}
