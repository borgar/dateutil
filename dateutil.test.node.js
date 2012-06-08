/*
 * This file implements a subset of the QUnit functions/features to allow 
 * running simple QUnit tests in Node.JS.
 *
 * Copyright (c) 2009 Borgar Þorsteinsson
 * Licensed under the terms of the MIT (LICENSE.txt) software license.
 *
 */


// the files to load for the test, test itself last:

var files = [
  'dateutil.js',
  'dateutil.testdates.js',
  'dateutil.test.js'
];


/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

var sys = require('sys'),
    fs = require('fs'),
    Script = process.binding('evals').Script,
    assert = require('assert')
    ;
var tests = [];
var current_test;
var sandbox = {

  expect: function ( num ) {
    current_test.expected = num;
  },

  ok: function ( value, message ) {
    current_test.results.push([ !!value, message ]);
  },
  
  equal: function ( rest, exp, msg ) {
    try {
      assert.equal(rest, exp);
    }
    catch ( err ) {
      current_test.results.push([ false, msg + ', expected: '+exp+' result: ' + rest ]);
      return;
    }
    current_test.results.push([ true, msg ]);
  },

  deepEqual: function ( rest, exp, msg ) {
    try {
      assert.deepEqual(rest, exp);
    }
    catch ( err ) {
      current_test.results.push([ false, msg + ', expected: '+exp+' result: ' + rest ]);
      return;
    }
    current_test.results.push([ true, msg ]);
  },
  
  test: function ( testName /*, expected, callback, async */ ) {

    var tmap = {
        'object':'environment', 
        'boolean':'async',
        'function':'callback',
        'number':'expected'
    };

    current_test = {
      name: testName,
      expected: null,
      callback: null,
      context: {},
      async: false,  // TODO: async doesn't actually do anything :-/
      error: false,
      results: []
    };
    tests.push( current_test );
    
    for (var i=1,l=arguments.length; i<l; i++) {
      current_test[ tmap[ typeof arguments[i] ] || 'error' ] = arguments[i];
    }
    try {
      current_test.callback.call( current_test.context );
    }
    catch ( err ) {
      current_test.results.push([ false, err ]);
    }

    if ( current_test.expected ) {
      if ( current_test.expected != current_test.results.length ) {
        current_test.results.push([ false, 'Expected '+current_test.expected+' assertions, but '+current_test.results.length+' were run' ]);
      }
    }
    
  }
  
}

function pad ( s, l ) {
  s = l + s;
  return s.substr( s.length - l.length, l.length );  
}


// ------------
// -- runner --
// ------------

var test_script = files.map(function ( fn ) {
  try {
    return fs.readFileSync( fn );
  }
  catch ( err ) {
    console.log('Critical failure: Cannot load ' + fn );
    process.exit(1);
  }
}).join('\n;\n');


console.log('');

// time it... 
console.time('Tests total time');

// run the tests
Script.runInNewContext( test_script, sandbox );

// reports
var total_ok = 0, total_fail = 0, total_tests = 0;
for (var t=0,tl=tests.length; t<tl; t++) {

  var test = tests[t];
  var report = [];
  var ok = 0, fail = 0;

  for (var r=0,rl=test.results.length; r<rl; r++) {
    var res = test.results[r];
    if ( res[0] ) {
      ok++;
      total_ok++;
    }
    else {
      fail++;
      total_fail++;
    }
    report.push( '    ' + pad(r,'    ') + '. ' + (res[0]?'':'[FAIL]: ') + res[1] );
  }

  total_tests += test.results.length;

  console.log( '' + pad(t,'    ') + '. ' + test.name + ' ('+fail+', '+ok+', '+(test.results.length)+')' );

  if ( fail ) {
    console.log( report.join('\n') );
    console.log('');
  }

}
console.log('');
console.timeEnd('Tests total time');
console.log(total_ok+' tests of '+total_tests+' passed, '+total_fail+' failed');

