/*
			to use
			npm run build
			or
			npm run buildwatch
*/



// this gulp is set up so you do NOT need to install gulp globally
// http://stackoverflow.com/questions/33018779/using-gulp-without-global-gulp-edit-and-without-linking-to-the-bin-js-file
// http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally

// this gulp is set up to NOT use gulp serve. We want to use the express server provided instead as 
// there will be proxy endpoints.
// so in effect gulp, is no different to grunt in the task it performs here


var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(){   
	console.log('to use');
	console.log('npm run build');
	console.log('or');
	console.log('npm run buildwatch');			  
});

// build
gulp.task('build', function(callback){
    runSequence('one', 'two', 'three', callback);
});

// gulp.task('build', ['one', 'two', 'three']);
gulp.task('one', function(){   
	console.log('one');  
	return gulp.src('./src/js/router/**/*.js').pipe(gulp.dest('./public/testing'));
});
gulp.task('two', function(){   
	console.log('two');  
});
gulp.task('three', function(){   
	console.log('three');  
});

gulp.start.apply(gulp, ['default']);