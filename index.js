const readline = require('readline');
const cleanSrtFilesAt = require('./cleanSRTFiles.js');

const ALL_SRT_FILES = '**.srt';
const dirPath = process.argv[2];
const removeMarks = process.argv[3] || 'N';

cleanSrtFilesAt(
    `${dirPath}\/${ALL_SRT_FILES}`, 
    removeMarks === '' || removeMarks.toUpperCase() === 'N' ? false : true
);