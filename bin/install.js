#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILL_NAME = 'sales-page-copywriting';

// Get all Claude installation directories based on OS
function getAllClaudeSkillsDirs() {
  const homeDir = os.homedir();
  const dirs = [];

  // 1. Claude Code - ~/.claude/skills/
  dirs.push({
    path: path.join(homeDir, '.claude', 'skills'),
    name: 'Claude Code',
    description: 'CLI tool'
  });

  // 2. Agents/Global skills - ~/.agents/skills/
  dirs.push({
    path: path.join(homeDir, '.agents', 'skills'),
    name: 'Agents (Global)',
    description: 'Shared across tools'
  });

  // 3. Claude Desktop - OS-specific paths
  if (process.platform === 'darwin') {
    // macOS
    dirs.push({
      path: path.join(homeDir, 'Library', 'Application Support', 'Claude', 'skills', 'user'),
      name: 'Claude Desktop',
      description: 'macOS app'
    });
  } else if (process.platform === 'win32') {
    // Windows
    dirs.push({
      path: path.join(homeDir, 'AppData', 'Roaming', 'Claude', 'skills', 'user'),
      name: 'Claude Desktop',
      description: 'Windows app'
    });
  } else {
    // Linux
    dirs.push({
      path: path.join(homeDir, '.config', 'Claude', 'skills', 'user'),
      name: 'Claude Desktop',
      description: 'Linux app'
    });
  }

  return dirs;
}

async function install() {
  try {
    console.log('🚀 Installing Sales Page Copywriting skill for Claude...\n');

    const sourceDir = path.join(__dirname, '..', 'skill');

    // Check if source exists
    if (!await fs.pathExists(sourceDir)) {
      console.error('❌ Error: Skill files not found in package');
      console.error('   This might be a package installation issue.');
      process.exit(1);
    }

    const allDirs = getAllClaudeSkillsDirs();
    const installedLocations = [];
    const skippedLocations = [];

    console.log('📦 Installing to all available Claude locations...\n');

    for (const dirInfo of allDirs) {
      const targetDir = path.join(dirInfo.path, SKILL_NAME);

      try {
        // Create parent directory if it doesn't exist
        await fs.ensureDir(dirInfo.path);

        // Check if skill already exists
        if (await fs.pathExists(targetDir)) {
          console.log(`   ⚠️  ${dirInfo.name}: Updating existing installation...`);
          await fs.remove(targetDir);
        }

        // Copy skill files
        await fs.copy(sourceDir, targetDir);

        installedLocations.push({
          ...dirInfo,
          targetDir
        });
        console.log(`   ✅ ${dirInfo.name} (${dirInfo.description})`);
        console.log(`      └─ ${targetDir}\n`);

      } catch (err) {
        // Skip if we can't write to this location (e.g., permissions)
        skippedLocations.push({
          ...dirInfo,
          error: err.message
        });
        console.log(`   ⏭️  ${dirInfo.name}: Skipped (${err.code === 'EACCES' ? 'permission denied' : err.message})\n`);
      }
    }

    // Summary
    console.log('─'.repeat(60) + '\n');

    if (installedLocations.length > 0) {
      console.log(`✅ Successfully installed to ${installedLocations.length} location(s)!\n`);

      console.log('📖 How to use:');
      console.log('   1. Open Claude Desktop, Claude Code, or Claude.ai');
      console.log('   2. Use the skill by typing: /sales-page-copywriting');
      console.log('   3. Provide your product details when prompted\n');

      console.log('🎯 What it does:');
      console.log('   • Runs your copy through hostile validation (5 personas × 5 layers)');
      console.log('   • Identifies and fixes critical conversion killers');
      console.log('   • Outputs polished, battle-tested sales page copy');
      console.log('   • No guesswork—only validated, conversion-optimized copy\n');

      console.log('💡 Tips:');
      console.log('   • Restart Claude if it\'s already open to load the skill');
      console.log('   • For Claude.ai, skills sync automatically\n');

      console.log('📚 Documentation:');
      console.log('   https://github.com/yashaiguy-dev/Sales-Page-Copywriting-Skill\n');

    } else {
      console.log('❌ Installation failed - could not write to any location.\n');
      console.log('🔍 Troubleshooting:');
      console.log('   • Ensure Claude is installed on your system');
      console.log('   • Check that you have write permissions');
      console.log('   • Try running with elevated permissions (sudo on macOS/Linux)\n');
      process.exit(1);
    }

    if (skippedLocations.length > 0) {
      console.log('ℹ️  Skipped locations (optional):');
      for (const loc of skippedLocations) {
        console.log(`   • ${loc.name}: ${loc.error}`);
      }
      console.log('');
    }

  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    console.error('\n🔍 Troubleshooting:');
    console.error('   • Ensure Claude is installed on your system');
    console.error('   • Check that you have write permissions to the Claude directory');
    console.error('   • Try running with elevated permissions if necessary\n');
    process.exit(1);
  }
}

// Run installation
install();
