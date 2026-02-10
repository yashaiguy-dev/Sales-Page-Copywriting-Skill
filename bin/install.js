#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine Claude skills directory based on OS
function getClaudeSkillsDir() {
  const homeDir = os.homedir();

  if (process.platform === 'darwin') {
    // macOS
    return path.join(homeDir, 'Library', 'Application Support', 'Claude', 'skills', 'user');
  } else if (process.platform === 'win32') {
    // Windows
    return path.join(homeDir, 'AppData', 'Roaming', 'Claude', 'skills', 'user');
  } else {
    // Linux
    return path.join(homeDir, '.config', 'Claude', 'skills', 'user');
  }
}

async function install() {
  try {
    console.log('🚀 Installing Sales Page Copywriting skill for Claude...\n');

    const skillName = 'sales-page-copywriting';
    const sourceDir = path.join(__dirname, '..', 'skill');
    const targetDir = path.join(getClaudeSkillsDir(), skillName);

    // Check if source exists
    if (!await fs.pathExists(sourceDir)) {
      console.error('❌ Error: Skill files not found in package');
      console.error('   This might be a package installation issue.');
      process.exit(1);
    }

    // Create target directory if it doesn't exist
    const claudeSkillsDir = getClaudeSkillsDir();
    await fs.ensureDir(claudeSkillsDir);

    // Check if skill already exists
    if (await fs.pathExists(targetDir)) {
      console.log('⚠️  Sales Page Copywriting skill already exists. Updating to latest version...\n');
      await fs.remove(targetDir);
    }

    // Copy skill files
    await fs.copy(sourceDir, targetDir);

    console.log('✅ Successfully installed Sales Page Copywriting to Claude!\n');
    console.log(`📁 Location: ${targetDir}\n`);
    console.log('📖 How to use:');
    console.log('   1. Open Claude.ai or Claude CLI');
    console.log('   2. Use the skill by typing: /sales-page-copywriting');
    console.log('   3. Provide your product details when prompted\n');
    console.log('🎯 What it does:');
    console.log('   - Runs your copy through hostile validation (5 personas × 5 layers)');
    console.log('   - Identifies and fixes critical conversion killers');
    console.log('   - Outputs polished, battle-tested sales page copy');
    console.log('   - No guesswork—only validated, conversion-optimized copy\n');
    console.log('💡 Tip: Restart Claude if it\'s already open to load the skill.\n');
    console.log('📚 For examples and documentation, visit:');
    console.log('   https://github.com/yashaiguy-dev/Sales-Page-Copywriting-Skill\n');

  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    console.error('\n🔍 Troubleshooting:');
    console.error('   - Ensure Claude is installed on your system');
    console.error('   - Check that you have write permissions to the Claude directory');
    console.error('   - Try running with elevated permissions if necessary\n');
    process.exit(1);
  }
}

// Run installation
install();
