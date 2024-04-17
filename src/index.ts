#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
    .description(`
        add: Add numbers 
    `);

program
    .command("add <numbers...>")
    .action((numbers: number[]) => {
        const total = numbers.reduce((a, b) => Number(a) + Number(b), 0);
        console.log(`total: ${total}`);
    })

program.parse(process.argv);