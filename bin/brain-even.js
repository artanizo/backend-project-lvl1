#!/usr/bin/env node
import greet from '../src/cli.js';
import runGame from '../src/game.js';
import evenGame from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const name = greet();

runGame(evenGame, name);
