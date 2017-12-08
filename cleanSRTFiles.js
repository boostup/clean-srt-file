const replace = require('replace-in-file');

module.exports = (files, removeMarks = false) => {

    let changes;

    if (removeMarks){
        changes = replace.sync({
            files: files,
            from: /\d\d:\d\d:\d\d.*/g,
            to: "",
        });
        console.log(changes);
    }
    
    changes = replace.sync({
        files: files,
        from: /<font color="#E5E5E5">/g,
        to: "",
    });
    console.log(changes);

    changes = replace.sync({
        files: files,
        from: /<font color="#CCCCCC">/g,
        to: "",
    });
    console.log(changes);
    
    changes = replace.sync({    
        files: ['/Users/boostup/Downloads/**.srt'],
        from: /<\/font>/gm,
        to: "",
    });
    console.log(changes);
    
    changes = replace.sync({
        files: files,
        from: /^\d+$/gm,
        to: "",
    });
    console.log(changes);

    changes = replace.sync({
        files: files,
        from: /^\n/gim,
        to: "",
    });
    console.log(changes);
}