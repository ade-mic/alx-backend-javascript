// display message
console.log('Welcome to Holberton School, what is your name?\n');

// input your name
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
});

process.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
