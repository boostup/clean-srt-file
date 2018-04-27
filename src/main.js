module.exports = function() {
    const readline = require('readline');
    const cleanSrtFilesAt = require('./clean-srt-files');
    
    const ALL_SRT_FILES = '**.srt';
    const dirPath = process.argv[2] || '/Users/boostup/Downloads';
    const removeMarks = process.argv[3] || 'N';

    console.info(`Searching for .srt files (${dirPath}\/${ALL_SRT_FILES})...`)
    
    cleanSrtFilesAt(
        `${dirPath}\/${ALL_SRT_FILES}`, 
        removeMarks === '' || removeMarks.toUpperCase() === 'N' ? false : true
    );
}