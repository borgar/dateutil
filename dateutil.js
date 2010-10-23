/*
 *  Dateutil
 *  - provides formatting, parsing and other utility functions for dates.
 *
 * Copyright (c) 2009 Borgar Þorsteinsson
 * Licensed under the terms of the MIT (LICENSE.txt) software license.
 *
 */
 (function(__global__){

  var SECOND_SIZE = 1000;
  var MINUTE_SIZE = SECOND_SIZE * 60;
  var HOUR_SIZE   = MINUTE_SIZE * 60;
  var DAY_SIZE    = HOUR_SIZE * 24;
  var WEEK_SIZE   = DAY_SIZE * 7;
  var MONTH_SIZE  = DAY_SIZE * 30.436875; // average month size
  var YEAR_SIZE   = DAY_SIZE * 365.2425;  // average year size

  var month_names = 'January February March April May June July August September October November December'.split(' ');
  var day_names = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

  var method_map = {
    'yr': 'FullYear',
    'year': 'FullYear',
    'years': 'FullYear',
    'mn': 'Month',
    'month': 'Month',
    'months': 'Month',
    'day': 'Date',
    'days': 'Date',
    'date': 'Date',
    'hr': 'Hours',
    'hour': 'Hours',
    'hours': 'Hours',
    'min': 'Minutes',
    'minute': 'Minutes',
    'minutes': 'Minutes',
    'sec': 'Seconds',
    'second': 'Seconds',
    'seconds': 'Seconds',
    'ms': 'Milliseconds',
    'millisecond': 'Milliseconds',
    'milliseconds': 'Milliseconds',
  };

  // *****************************************
  // *** *** *** formats & parsers *** *** ***
  // *****************************************

  var date_parsers = __global__._parsers = {

    // year + month + day + time
    // -- currently doesn't really support fractions on anything other than seconds >> FIXME
    // -- does not support timezones other than Zulu
    date_and_time: {
      test: /^[+-]?\d{4,6}(?:(?:\-\d\d){1,2}|\d{4})[T ](?:\d\d)(?::?\d\d){0,2}(?:[\.,]\d+)?(?:Z|[+-]\d\d(:?\d\d)?)?$/,
      size: 1,
      parse: function ( str ) {
        var b = str.split( /[T ]/ );
        var date = date_parsers.date.parse( b[0] );
        var m = b[1].replace( /:/g, '' )
                      .match( /^(\d\d)(\d\d)?(\d\d)?(?:[.,](\d+))?([+-](?:\d\d){1,2})?/ );
        // TODO: timezone (I have no need for this feature yet)
        // if ( m[5] ) { var zone = m[5] || '0000'; }
        var fs = 0, t = date.getTime() + 
                parseInt( m[1], 10 ) * HOUR_SIZE + 
                parseInt( m[2] || '0', 10 ) * MINUTE_SIZE + 
                parseInt( m[3] || '0', 10 ) * SECOND_SIZE;
             if ( m[3] ) { fs = SECOND_SIZE; }
        else if ( m[2] ) { fs = MINUTE_SIZE; }
        else if ( m[1] ) { fs = HOUR_SIZE; }
        t += parseFloat( '0.' + ( m[4] || '0' ) ) * fs;
        date.setTime( t );
        date.size = 0;
        return date;
      }
    },
  
    // year + month + day
    date: {
      test: /^[+-]?\d{4,6}(?:-\d\d-\d\d|-?\d\d\d\d)$/,
      size: DAY_SIZE,
      parse: function ( str ) {
        var s = str.replace( /\D/g, '' );
        var d = parseInt( s.substr( s.length -2 ), 10 );
        var m = parseInt( s.substr( s.length -4, 2 ), 10 );
        var y = parseInt( s.substring( 0, s.length -4 ), 10 );
        d = new Date( y, m - 1, d );
        d.size = DAY_SIZE;
        return d;
      }
    },

    // year + month
    year_and_month: {
      test: /^[+-]?\d{4,6}[\/-](?:0[1-9]|1[012])$/,
      size: MONTH_SIZE,
      parse: function ( str ) {
        var b = str.split( /[\/-]/ );
        d = new Date( parseInt( b[0], 10 ), parseInt( b[1], 10 ) - 1, 1 );
        d.size = __global__.daysInMonth( d ) * DAY_SIZE;
        return d;
      }
    },

    // year
    year: {
      test: /^[+-]?\d{4,6}$/,
      size: YEAR_SIZE,
      parse: function ( str ) {
        var d = new Date( parseInt( str, 10 ), 0, 1 );
        d.size = DAY_SIZE * ( __global__.isLeapYear( d ) ? 366 : 365 ); 
        return d;
      }
    },

    // year + iso week + [day]
    year_and_week: {
      test: /^[+-]?\d{4,6}\-?[Ww]\d\d(?:\-?\d)?$/,
      size: WEEK_SIZE,
      parse: function ( str ) {
        var s = str.toLowerCase().replace( /[^w\d]/g, '' ).split('w');
        var d = new Date( parseInt( s[0], 10 ), 0, 3 );  // Jan 3
        d.setUTCDate( 3 - d.getUTCDay() + 
                      ( parseInt( s[1].substr( 0, 2 ), 10 ) - 1 ) * 7 + 
                      parseInt( s[1].substr( 2, 1 ) || '1', 10 ) );
        d.size = WEEK_SIZE;
        return d;
      }
    },

    // year + day-of-year
    // -- we don't allow the short form yyyyddd because of ambiguity with yyyymmdd
    // -- 5 letter years would clash with cal-dates: yyyyyddd ~ yyyymmdd
    year_and_ordinal: {
      test: /^[+-]?\d{4,6}\-[0-3]\d\d$/,
      size: DAY_SIZE,
      parse: function ( str ) {
        var d = new Date(0);
        var b = str.split('-');
        d.setUTCFullYear( parseInt( b[0], 10 ) );
        d.setDate( parseInt( b[1], 10 ) );
        d.size = DAY_SIZE;
        return d;
      }
    },

    // year + quarter
    year_and_quarter: {
      test: /^[+-]?\d{4,6}\-?[Qq][1-4]$/,
      size: YEAR_SIZE / 4,
      parse: function ( str ) {
        var d = new Date(0);
        var b = str.split(/\-?[Qq]/);
        d.setUTCFullYear( parseInt( b[0], 10 ) );
        d.setUTCMonth( ( parseInt( b[1], 10 ) - 1 ) * 3 );
        d.size = DAY_SIZE;
        return d;
      }
    }

  };
  
  var date_formatters = __global__._formats = {
    // Lowercase Ante meridiem and Post meridiem
    a: function (d) { return d.getUTCHours() >= 12 ? 'pm' : 'am'; },
    // Uppercase Ante meridiem and Post meridiem
    A: function (d) { return d.getUTCHours() >= 12 ? 'PM' : 'AM'; },
    // ISO 8601 date
    c: function (d) { return __global__.format( d, 'Y-m-d\\TH:i:s.' ) + this.u(d,3) + 'Z'; },
    // Day of the month, 2 digits with leading zeros
    d: function (d) { return pad( d.getUTCDate() ); },
    // A textual representation of a day, three letters
    D: function (d) { return __global__._( day_names[ d.getUTCDay() ].substr( 0, 3 ) ); },
    // Time zone identifier
    e: function (d) { return 'UTC'; },
    // A full textual representation of a month
    F: function (d) { return __global__._( month_names[ d.getUTCMonth() ] ); },
    // 12-hour format of an hour without leading zeros
    g: function (d) { return d.getUTCHours() % 12 || 12; },
    // 24-hour format of an hour without leading zeros
    G: function (d) { return d.getUTCHours(); },
    // 12-hour format of an hour with leading zeros
    h: function (d) { return pad( d.getUTCHours() % 12 || 12 ); },
    // 24-hour format of an hour with leading zeros
    H: function (d) { return pad( d.getUTCHours() ); },
    // Minutes with leading zeros
    i: function (d) { return pad( d.getUTCMinutes() ); },
    // Day of the month without leading zeros
    j: function (d) { return d.getUTCDate(); },
    // A full textual representation of the day of the week
    l: function (d) { return __global__._( day_names[ d.getUTCDay() ] ); },
    // Whether it's a leap year (0 = yes, 1 = no)
    L: function (d) { return __global__.isLeapYear( d ) * 1; },
    // Numeric representation of a month, with leading zeros
    m: function (d) { return pad( d.getUTCMonth() + 1 ); },
    // A short textual representation of a month, three letters
    M: function (d) { return __global__._( month_names[ d.getUTCMonth() ].substr( 0, 3 ) ); },
    // Numeric representation of a month, without leading zeros
    n: function (d) { return d.getUTCMonth() + 1; },
    // ISO-8601 numeric representation of the day of the week
    N: function (d) { return d.getUTCDay() || 7; },
    // ISO-8601 year number
    o: function (d) { return pad( __global__.isocalendar(d)[0], 4 ); },
    // Time zone designator
    O: function (d) { return '+0000'; },
    // Time zone difference
    P: function (d) { return '+00:00'; },
    // Quarter of the year
    q: function (d) { return ~~( d.getUTCMonth() / 3 ) + 1; },
    // RFC 2822 formatted date
    r: function (d) { return __global__.format( d, 'D, d M Y H:i:s O' ); },
    // Seconds, with leading zeros
    s: function (d) { return pad( d.getUTCSeconds() ); },
    // English ordinal suffix for the day of the month, 2 characters
    S: function (d) {
      var a = d.getUTCDate() % 10, b = d.getUTCDate() % 100;
      return (a == 1) && (b !== 11) && 'st' ||
             (a == 2) && (b !== 12) && 'nd' ||
             (a == 3) && (b !== 13) && 'rd' || 'th';
    },
    // Number of days in the given month
    t: function (d) { return __global__.daysInMonth( d ); },
    // Time zone abbreviation
    T: function (d) { return 'UTC'; },
    // Microseconds
    u: function (d, l) { return pad( d.getUTCMilliseconds(), l || 6 ); },
    // Seconds since the Unix Epoch
    U: function (d) { return ~~( d / 1000 ); },
    // Numeric representation of the day of the week
    w: function (d) { return d.getUTCDay(); },
    // ISO-8601 week number of year, weeks starting on Monday 
    W: function (d) { return pad( __global__.isocalendar(d)[1] ); },
    // A short numeric representation of a year, 2 digits
    y: function (d) { return (d.getUTCFullYear() + '').substr(2); },
    // A full numeric representation of a year, 4 digits
    Y: function (d) { return d.getUTCFullYear(); },
    // The day of the year (starting from 0)
    z: function (d) { return Math.floor( ( d - (new Date(d.getUTCFullYear(), 0, 1)) ) / DAY_SIZE ); },
  };


  // **************************************
  // *** *** *** utility methods *** *** ***
  // **************************************
  
  function pad ( n, l ) {
    var s = '0000000000' + n;
    return s.substring( s.length -( l || 2 ) );
  }


  // **************************************
  // *** *** *** module methods *** *** ***
  // **************************************

  // is a given year a leap year
  __global__.isLeapYear = function ( y ) {
    if ( y instanceof Date ) { y = y.getUTCFullYear(); }
    return (( y % 4 == 0 ) && ( y % 100 != 0 )) || ( y % 400 == 0 );
  };


  // return the number of days in a date's month
  __global__.daysInMonth = function ( dt ) {
    return 32 - new Date( dt.getUTCFullYear(), dt.getUTCMonth(), 32 ).getUTCDate();
  };


  // return a 3-tuple, (ISO year, ISO week number, ISO weekday).
  __global__.isocalendar = function ( dt ) {
    var d = dt.getUTCDay();
    var t = new Date( dt.valueOf() );
    t.setDate( t.getDate() - ((d + 6) % 7) + 3 );
    var iso_year = t.getUTCFullYear();
    var w = Math.floor( (t.getTime() - new Date(iso_year, 0, 1, -6)) / 86400000 );
    return [ iso_year, 1+Math.floor(w/7), d||7 ];
  };


  // Allow setting multiple properties at once using object notation:
  // `mydate.set({ hour: 8, minute: 12, second: 0 });`
  __global__.set = function ( dt, values ) {
    if ( typeof values === 'object' ) {
      for ( var key in values ) if ( key in method_map ) {
        dt[ 'setUTC' + method_map[ key ] ]( values[ key ] );
      }
    }
    return dt;
  };


  // parse a date
  __global__.parse = function ( str ) {
    var d;
    if ( typeof str !== 'string' ) {
      throw new TypeError( "dateutil parser can't parse non-strings." );
    }
    for ( var dtype in date_parsers ) {
      if ( date_parsers[dtype].test( str ) ) {
        d = date_parsers[ dtype ].parse( str );
        d.type = dtype;
        d.size = d.size || 0;
        break;
      }
    }
    // default parser supports RFC and a few more, or returns an "invalid date"
    if ( !d ) {
      d = new Date( str );
      d.size = 0;
      d.type = 'unknown_date';
    }
    return d;
  };


  // format a date to string
  __global__.format = function ( d, fmt ) {
    d = d || new Date();
    for ( var r=[], c, l=fmt.length, i=0; i<l; i++ ) {
      c = fmt.charAt( i );
      // format characters
      if ( c !== '\\' ) {
        r.push( (c in date_formatters) ? date_formatters[ c ]( d ) : c );
      }
      // escaped characters & unreconized characters
      else {
        c = i < fmt.length ? fmt.charAt( ++i ) : c;
        r.push( c );
      }
    }
    return r.join( '' );
  };


  // return a Date object for the current date (0 time)
  __global__.today = function () {
    return __global__.set( new Date(), {
      hour: 0, minute: 0, second: 0, millisecond: 0
    });
  };


  // return timestamp for the moment
  __global__.now = (typeof Date.now === 'function') 
            ? Date.now 
            : function () { return +new Date(); };


  // translation hook
  __global__._ = function ( s ) { return s; };

})(
  (typeof module !== 'undefined' && module.exports) 
    ? module.exports 
    : (this.dateutil = {}) 
);