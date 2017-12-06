const replace = require('replace-in-file');

/**
 * Commenting this section as keeping the the time marks is actual useful 
 */

// let changes = replace.sync({
//     files: ['/Users/boostup/Downloads/**.srt'],
//     from: /\d\d:\d\d:\d\d.*/g,
//     to: "",
// });

//console.log(changes);

changes = replace.sync({
    files: ['/Users/boostup/Downloads/**.srt'],
    from: /<font color="#E5E5E5">/g,
    to: "",
});

console.log(changes);

changes = replace.sync({
    files: ['/Users/boostup/Downloads/**.srt'],
    from: /<font color="#CCCCCC">/g,
    to: "",
});

console.log(changes);

changes = replace.sync({
    files: ['/Users/boostup/Downloads/**.srt'],
    from: /<\/font>/g,
    to: "",
});

console.log(changes);

changes = replace.sync({
    files: ['/Users/boostup/Downloads/**.srt'],
    from: /^\d+$/gm,
    to: "",
});

changes = replace.sync({
    files: ['/Users/boostup/Downloads/**.srt'],
    from: /^\n/gim, 
    to: "",
});

console.log(changes);