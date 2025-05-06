// Named IIFE - coffee
(function coffee() {
    console.log('Conected');
}) () ; // If ; isn't used than the next (program) will not execute.

// UnNamed IIFE
((name) => {
    console.log(`Conected to ${name}`);
}) ('nothing')