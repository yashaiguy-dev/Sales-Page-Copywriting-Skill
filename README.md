# Sales Page Copywriting - Claude Skill

> Battle-tested sales page copy generation using hostile validation methodology

Generate conversion-optimized sales page copy that survives scrutiny from 5 hostile visitor personas across 25 validation angles. No guesswork—only polished, ready-to-implement copy.

## What It Does

Sales Page Copywriting is a Claude skill that:

1. **Captures your product DNA** - Extracts core positioning, target audience, and differentiation
2. **Generates initial copy** - Creates 7 critical website sections (hero, problems, solution, benefits, social proof, FAQ, CTA)
3. **Runs hostile validation** - Tests copy against 5 skeptical visitor personas using 25 validation angles
4. **Rebuilds with objection immunity** - Fixes critical conversion killers and credibility gaps
5. **Outputs polished copy** - Delivers final, battle-tested website copy ready for implementation

**You receive:** A complete website copy document with hero section, problem agitation, solution steps, benefits with proof, social proof templates, FAQ, and final CTA—all validated and optimized.

**You don't see:** The internal validation process, hostile reviewer feedback, or iteration cycles. Only the final polished output.

## Installation

### Quick Install via npx

```bash
npx @yashaiguy/sales-page-copywriting
```

This will automatically install the skill to your Claude skills directory.

### Manual Installation

1. Clone or download this repository
2. Run the installation script:
   ```bash
   node bin/install.js
   ```

### Verify Installation

After installation, restart Claude if it's already running. The skill will be available as `/sales-page-copywriting`.

## Usage

### In Claude CLI or Claude.ai

```
/sales-page-copywriting
```

Claude will then guide you through providing:

1. **Product description** - What your product is and does
2. **Problem it solves** - The specific pain point (not generic category)
3. **Target audience** - Psychographics more than demographics
4. **Differentiation** - What actually makes it different
5. **Conversion goal** - What action you want visitors to take

### Example Session

```
User: /sales-page-copywriting

Claude: I'll help you generate battle-tested sales page copy. Let me gather some information about your product.

**What is your product/service?** (Describe it in one sentence)

User: An AI tool that finds validated product ideas by analyzing real customer pain points across Reddit, Twitter, and forums

Claude: Got it. Let me ask a few more questions...

[Claude asks clarifying questions]

[Claude works internally through validation]

[Claude outputs final polished copy document]
```

## What You Get

The final output includes:

### 1. Strategic Foundation
- Core product DNA
- Market context and competitors
- Common objections identified

### 2. Complete Website Copy
- **Hero Section**: Headline, subheadline, CTA, visual direction
- **Problem Agitation**: 3-4 pain points with emoji bullets in customer voice
- **Solution Introduction**: How it works in 3-4 simple steps
- **Benefits**: 3 transformation-focused benefits with micro-proof
- **Social Proof**: Positioning statement + 3 testimonial types + trust indicators
- **Objection Handling**: 5-6 pre-emptive FAQ answers
- **Final CTA**: Urgency mechanism + risk reversal + CTA copy

### 3. Validation Summary
- Number of objections found and fixed
- Critical failures addressed
- High-priority improvements made
- Approval metrics

### 4. Implementation Guidance
- A/B test variations to try
- Mobile optimization hierarchy
- Visual priority sections
- Tone/voice guidelines
- Character counts for design

## The Validation Process (Behind the Scenes)

Your copy is tested against 5 hostile visitor personas:

1. **The 8-Second Scanner** - Will they immediately bounce?
2. **The Comparison Tab Hoarder** - Why would they choose you vs competitors?
3. **The Burned Cynic** - What triggers their BS detector?
4. **The Confused Bouncer** - What's unclear or confusing?
5. **The Justified Procrastinator** - What lets them delay action?

Each persona analyzes through 5 layers:
- Clarity failures
- Relevance rejections
- Credibility collapse
- Friction discovery
- Competitive disadvantages

= **25 validation angles** (5 personas × 5 layers)

The skill identifies Critical Failures (3+ reviewers object) and High Priority issues (2+ reviewers object), then rebuilds the copy until approval criteria are met.

## Format Features

- ✅ **Emoji pain points** - Uses 😤, 😫, 🤯, 😰 in problem agitation
- ✅ **Customer voice quotes** - Pain points written as internal dialogue
- ✅ **Micro-proof for every claim** - No unsubstantiated benefits
- ✅ **Conversational FAQ** - Not corporate speak
- ✅ **Honest urgency** - No fake scarcity
- ✅ **Validation transparency** - Shows the rigor behind the copy

## Publishing This Skill to npm

If you want to publish your own version:

### 1. Update package.json

Change the name to your own scoped package:

```json
{
  "name": "@yourusername/sales-page-copywriting",
  "version": "1.0.0",
  ...
}
```

### 2. Create npm Account

Sign up at [npmjs.com](https://www.npmjs.com/signup)

### 3. Login via CLI

```bash
npm login
```

### 4. Publish

```bash
npm publish --access public
```

(Scoped packages are private by default, `--access public` makes them public)

### 5. Users Can Install

```bash
npx @yourusername/sales-page-copywriting
```

## Publishing to GitHub

### 1. Create Repository

```bash
cd sales-page-copywriting-skill
git init
git add .
git commit -m "Initial commit: Sales Page Copywriting skill"
```

### 2. Create GitHub Repo

Go to GitHub and create a new repository named `Sales-Page-Copywriting-Skill`

### 3. Push

```bash
git remote add origin https://github.com/yashaiguy-dev/Sales-Page-Copywriting-Skill.git
git branch -M main
git push -u origin main
```

## File Structure

```
website-copy-generator-skill/
├── package.json          # npm configuration
├── README.md            # This file
├── bin/
│   └── install.js       # Installation script
└── skill/
    └── SKILL.md         # Main skill file (loaded by Claude)
```

## Requirements

- Node.js 14.0.0 or higher
- Claude CLI or Claude.ai access
- npm (for distribution)

## Examples

See the [examples directory](./examples) for:
- SaaS product copy example
- E-commerce product copy example
- Service business copy example

## Troubleshooting

### Skill not showing up in Claude

1. Make sure you restarted Claude after installation
2. Check that the skill is in the correct directory:
   - macOS: `~/Library/Application Support/Claude/skills/user/sales-page-copywriting/`
   - Windows: `%APPDATA%\Claude\skills\user\sales-page-copywriting\`
   - Linux: `~/.config/Claude/skills/user/sales-page-copywriting/`
3. Verify that `SKILL.md` has proper frontmatter (name, description)

### Installation fails

1. Check Node.js version: `node --version` (must be ≥14.0.0)
2. Ensure Claude is installed on your system
3. Check write permissions to the Claude directory
4. Try running with elevated permissions if necessary

### Copy quality issues

The skill is only as good as the input provided:
- Be specific about your product's unique mechanism
- Provide real competitor examples
- Share actual customer objections you've heard
- Define your target audience psychographically

## Contributing

Contributions welcome! Areas for improvement:

- Additional validation personas
- Industry-specific copy templates
- Integration with design tools
- A/B testing result tracking

## License

MIT License - see [LICENSE](./LICENSE) for details

## Author

yashaiguy

## Support

- Issues: [GitHub Issues](https://github.com/yashaiguy-dev/Sales-Page-Copywriting-Skill/issues)
- Discussions: [GitHub Discussions](https://github.com/yashaiguy-dev/Sales-Page-Copywriting-Skill/discussions)

## Acknowledgments

Based on proven conversion copywriting principles and hostile validation methodology.

---

**Stop guessing what copy will convert. Start with validated, battle-tested sales page copy.**
