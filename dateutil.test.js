test('dateutil', function () {
 
  ok( typeof dateutil === 'object', 'have dateutil' );

});


test('dateutil.date', function () {

  ok( typeof dateutil.date === 'function', 'have date factory' );
  ok( dateutil.date() instanceof Date, 'date (now) returns date' );
  ok( dateutil.date(2000) instanceof Date, 'date (year) returns date' );
  ok( dateutil.date(2000,16,10) instanceof Date, 'date (y,m,d) returns date' );

  ok( +dateutil.date(10,0,1) == -61851600000000, 'two digit years are not "corrected"' );

  deepEqual( +dateutil.date(0), +new Date(1970,0,1), 'date (0) is 0 timestamp' );
  deepEqual( +dateutil.date(182649600000), +new Date(182649600000), 'date (ts) is set by timestamp' );
  deepEqual( +dateutil.date(1975,9,16), +new Date(182649600000), 'date (y,m,d) is set correctly' );

});


test("dateutil.isLeapYear", function () {

  // expect( 10 );
  ok( typeof dateutil.isLeapYear === 'function', 'dateutil.isLeapYear() is a function' );
  deepEqual( dateutil.isLeapYear(1468), true , 'dateutil.isLeapYear(1468)' );
  deepEqual( dateutil.isLeapYear(1600), true , 'dateutil.isLeapYear(1600)' );
  deepEqual( dateutil.isLeapYear(1852), true , 'dateutil.isLeapYear(1852)' );
  deepEqual( dateutil.isLeapYear(1920), true , 'dateutil.isLeapYear(1920)' );
  deepEqual( dateutil.isLeapYear(1968), true , 'dateutil.isLeapYear(1968)' );
  deepEqual( dateutil.isLeapYear(2000), true , 'dateutil.isLeapYear(2000)' );
  deepEqual( dateutil.isLeapYear(2008), true , 'dateutil.isLeapYear(2008)' );
  deepEqual( dateutil.isLeapYear(2400), true , 'dateutil.isLeapYear(2400)' );
  deepEqual( dateutil.isLeapYear(2800), true , 'dateutil.isLeapYear(2800)' );
  deepEqual( dateutil.isLeapYear(1933), false, 'dateutil.isLeapYear(1933)' );
  deepEqual( dateutil.isLeapYear(1999), false, 'dateutil.isLeapYear(1999)' );
  deepEqual( dateutil.isLeapYear(1800), false, 'dateutil.isLeapYear(1800)' );
  deepEqual( dateutil.isLeapYear(1900), false, 'dateutil.isLeapYear(1900)' );
  deepEqual( dateutil.isLeapYear(2100), false, 'dateutil.isLeapYear(2100)' );
  deepEqual( dateutil.isLeapYear(2200), false, 'dateutil.isLeapYear(2200)' );

});

test("dateutil.daysInMonth", function () {

  // expect( 10 );
  ok( typeof dateutil.daysInMonth === 'function', 'dateutil.daysInMonth() is a function' );
  
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 0,1) )), 31, 'dateutil.daysInMonth( Jan. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 1,1) )), 28, 'dateutil.daysInMonth( Feb. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 2,1) )), 31, 'dateutil.daysInMonth( Mar. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 3,1) )), 30, 'dateutil.daysInMonth( Apr. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 4,1) )), 31, 'dateutil.daysInMonth( May. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 5,1) )), 30, 'dateutil.daysInMonth( Jun. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 6,1) )), 31, 'dateutil.daysInMonth( Jul. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 7,1) )), 31, 'dateutil.daysInMonth( Aug. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 8,1) )), 30, 'dateutil.daysInMonth( Sep. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999, 9,1) )), 31, 'dateutil.daysInMonth( Oct. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999,10,1) )), 30, 'dateutil.daysInMonth( Nov. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1999,11,1) )), 31, 'dateutil.daysInMonth( Dec. 1999 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 0,1) )), 31, 'dateutil.daysInMonth( Jan. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 1,1) )), 29, 'dateutil.daysInMonth( Feb. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 2,1) )), 31, 'dateutil.daysInMonth( Mar. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 3,1) )), 30, 'dateutil.daysInMonth( Apr. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 4,1) )), 31, 'dateutil.daysInMonth( May. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 5,1) )), 30, 'dateutil.daysInMonth( Jun. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 6,1) )), 31, 'dateutil.daysInMonth( Jul. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 7,1) )), 31, 'dateutil.daysInMonth( Aug. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 8,1) )), 30, 'dateutil.daysInMonth( Sep. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920, 9,1) )), 31, 'dateutil.daysInMonth( Oct. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920,10,1) )), 30, 'dateutil.daysInMonth( Nov. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(1920,11,1) )), 31, 'dateutil.daysInMonth( Dec. 1920 )' );
  deepEqual( dateutil.daysInMonth(new Date( Date.UTC(2100, 1,1) )), 28, 'dateutil.daysInMonth( Feb. 2100 )' );
  
});


test('dateutil.isoyear', function () {

  deepEqual( dateutil.isoyear(new Date(Date.UTC(2005, 0, 1))), "2005", "2005" );
  deepEqual( dateutil.isoyear(new Date(-62009366400000)), "0005", "0005" );
  deepEqual( dateutil.isoyear(new Date(-62167219200000)), "0000", "0000" );
  deepEqual( dateutil.isoyear(new Date(-62198755200000)), "-000001", "-1" );
  deepEqual( dateutil.isoyear(new Date(-77945673600000)), "-000500", "-500" );
  deepEqual( dateutil.isoyear(new Date(253402300800000)), "+010000", "10000" );
  deepEqual( dateutil.isoyear(new Date(3093527980800000)), "+100000", "100000" );
  deepEqual( dateutil.isoyear(new Date(253370764800000)), "9999", "9999" );
  deepEqual( dateutil.isoyear(new Date(3093496444800000)), "+099999", "99999" );

});


test('dateutil.isocalendar', function () {

  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2005, 0, 1))), [2004,53,6], "2004-W53-6" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2005, 0, 2))), [2004,53,7], "2004-W53-7" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2005,11,31))), [2005,52,6], "2005-W52-6" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2007, 0, 1))), [2007, 1,1], "2007-W01-1" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2007,11,30))), [2007,52,7], "2007-W52-7" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2007,11,31))), [2008, 1,1], "2008-W01-1" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008, 0, 1))), [2008, 1,2], "2008-W01-2" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,29))), [2009, 1,1], "2009-W01-1" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,31))), [2009, 1,3], "2009-W01-3" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2009, 0, 1))), [2009, 1,4], "2009-W01-4" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2009,11,31))), [2009,53,4], "2009-W53-4" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 3))), [2009,53,7], "2009-W53-7" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2009,11,31))), [2009,53,4], "2009-W53-4" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 1))), [2009,53,5], "2009-W53-5" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 2))), [2009,53,6], "2009-W53-6" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 3))), [2009,53,7], "2009-W53-7" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,28))), [2008,52,7], "2008-W52-7" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,29))), [2009, 1,1], "2009-W01-1" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,30))), [2009, 1,2], "2009-W01-2" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2008,11,31))), [2009, 1,3], "2009-W01-3" );
  deepEqual( dateutil.isocalendar(new Date(Date.UTC(2009, 0, 1))), [2009, 1,4], "2009-W01-4" );
  
});


test("dateutil.set", function () {

  // expect( 10 );
  ok( typeof dateutil.set === 'function', 'dateutil.set() is a function' );

  var dt = new Date(Date.UTC(1975,9,16,10,24,12,50));
  var bt = dateutil.set(new Date(0), {
    year: 1975,
    month: 9,
    day: 16,
    hour: 10,
    minute: 24,
    second: 12,
    millisecond: 50
  });
  ok( +bt == +dt, 'dateutil.set' );

  // testing rollover mechanism
  var d = dateutil.set(new Date( Date.UTC( 1999, 1, 20 ) ), {
    'date': 30,
    'month': 0
  });
  ok( +d === 917654400000, 'prevent rollovers: 1999-02-20 date,month' );

  var d = dateutil.set(new Date( Date.UTC( 1999, 1, 20 ) ), {
    'month': 0,
    'date': 30
  });
  ok( +d === 917654400000, 'prevent rollovers: 1999-02-20 month,date' );

  var d = dateutil.set(new Date( Date.UTC( 1600, 1, 29 ) ), {
    'date': 30,
    'month': 0
  });
  deepEqual( +d, -11673590400000, 'prevent rollovers: 1600-02-29 date,month' );

  var d = dateutil.set(new Date( Date.UTC( 1600, 1, 29 ) ), {
    'month': 0,
    'date': 30
  });
  deepEqual( +d, -11673590400000, 'prevent rollovers: 1600-02-29 month,date' );
  
});


test('dateutil.parse', function(){
  
  var corduroy_full = new Date(Date.UTC(2011,10,11, 11,11,11, 111));
  var corduroy_sec  = new Date(Date.UTC(2011,10,11, 11,11,11));
  var corduroy_mfrc = new Date(Date.UTC(2011,10,11, 11,11,6, 660));
  var corduroy_min  = new Date(Date.UTC(2011,10,11, 11,11));
  var corduroy_hfrc = new Date(Date.UTC(2011,10,11, 11,6,39,600));
  var corduroy_hour = new Date(Date.UTC(2011,10,11, 11));
  var corduroy_day  = new Date(Date.UTC(2011,10,11));
  var corduroy_mon  = new Date(Date.UTC(2011,10,1));
  var corduroy_year = new Date(Date.UTC(2011,0,1));
  var INVALID = new Date('borked')+'';

  // date_and_time
  deepEqual( +dateutil.parse('2011-11-11T11:11:11.111Z'), +corduroy_full, "2011-11-11T11:11:11.111Z" );
  deepEqual( +dateutil.parse('2011-11-11T11:11:11Z'), +corduroy_sec, "2011-11-11T11:11:11Z" );
  deepEqual( +dateutil.parse('2011-11-11T11:11.111Z'), +corduroy_mfrc, "2011-11-11T11:11.111Z" );
  deepEqual( +dateutil.parse('2011-11-11T11:11Z'), +corduroy_min, "2011-11-11T11:11Z" );
  deepEqual( +dateutil.parse('2011-11-11T11.111Z'), +corduroy_hfrc, "2011-11-11T11.111Z" );
  deepEqual( +dateutil.parse('2011-11-11T11Z'), +corduroy_hour, "2011-11-11T11Z" );

  deepEqual( +dateutil.parse('2011-11-11T11:11:11.111'), +corduroy_full, "2011-11-11T11:11:11.111" );
  deepEqual( +dateutil.parse('2011-11-11T11:11:11'), +corduroy_sec, "2011-11-11T11:11:11" );
  deepEqual( +dateutil.parse('2011-11-11T11:11.111'), +corduroy_mfrc, "2011-11-11T11:11.111" );
  deepEqual( +dateutil.parse('2011-11-11T11:11'), +corduroy_min, "2011-11-11T11:11" );
  deepEqual( +dateutil.parse('2011-11-11T11.111'), +corduroy_hfrc, "2011-11-11T11.111" );
  deepEqual( +dateutil.parse('2011-11-11T11'), +corduroy_hour, "2011-11-11T11" );

  deepEqual( +dateutil.parse('2011-11-11T11:11:11.111+00:00'), +corduroy_full, "2011-11-11T11:11:11.111+00:00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11:11+00:00'), +corduroy_sec, "2011-11-11T11:11:11+00:00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11.111+00:00'), +corduroy_mfrc, "2011-11-11T11:11.111+00:00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11+00:00'), +corduroy_min, "2011-11-11T11:11+00:00" );
  deepEqual( +dateutil.parse('2011-11-11T11.111+00:00'), +corduroy_hfrc, "2011-11-11T11.111+00:00" );
  deepEqual( +dateutil.parse('2011-11-11T11+00:00'), +corduroy_hour, "2011-11-11T11+00:00" );

  deepEqual( +dateutil.parse('2011-11-11T11:11:11.111+00'), +corduroy_full, "2011-11-11T11:11:11.111+00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11:11+00'), +corduroy_sec, "2011-11-11T11:11:11+00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11.111+00'), +corduroy_mfrc, "2011-11-11T11:11.111+00" );
  deepEqual( +dateutil.parse('2011-11-11T11:11+00'), +corduroy_min, "2011-11-11T11:11+00" );
  deepEqual( +dateutil.parse('2011-11-11T11.111+00'), +corduroy_hfrc, "2011-11-11T11.111+00" );
  deepEqual( +dateutil.parse('2011-11-11T11+00'), +corduroy_hour, "2011-11-11T11+00" );

  // extended year
  deepEqual( +dateutil.parse('0005-01-01T00:00:00.000Z'), +new Date(-62009366400000), '0005-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('0000-01-01T00:00:00.000Z'), +new Date(-62167219200000), '0000-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('-000001-01-01T00:00:00.000Z'), +new Date(-62198755200000), '-000001-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('-000500-01-01T00:00:00.000Z'), +new Date(-77945673600000), '-000500-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('+010000-01-01T00:00:00.000Z'), +new Date(253402300800000), '+010000-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('+100000-01-01T00:00:00.000Z'), +new Date(3093527980800000), '+100000-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('9999-01-01T00:00:00.000Z'), +new Date(253370764800000), '9999-01-01T00:00:00.000Z' );
  deepEqual( +dateutil.parse('+099999-01-01T00:00:00.000Z'), +new Date(3093496444800000), '+099999-01-01T00:00:00.000Z' );

  // date
  deepEqual( +dateutil.parse('2011-11-11'), +corduroy_day, "2011-11-11" );
  deepEqual( +dateutil.parse('2011-1111'), +corduroy_day, "2011-1111" );

  // year_and_month
  deepEqual( +dateutil.parse('2011-11'), +corduroy_mon, "2011-11" );
  deepEqual( +dateutil.parse('2011/11'), +corduroy_mon, "2011/11" );
  deepEqual( ''+dateutil.parse('2011-13'), INVALID, "2011-13" );  // should fail!

  // year
  deepEqual( +dateutil.parse('2011'), +corduroy_year, "2011" );
  deepEqual( +dateutil.parse('12011'), +new Date(Date.UTC(12011,0,1)), "12011" );
  deepEqual( +dateutil.parse('-12011'), +new Date(Date.UTC(-12011,0,1)), "-12011" );

  // year_and_week
  ok( +corduroy_day == +dateutil.parse('2011-W45-5'), "2011-W45-5" );
  ok( +corduroy_day == +dateutil.parse('2011W45-5'), "2011W45-5" );
  ok( +corduroy_day == +dateutil.parse('2011W455'), "2011W455" );
  ok( +new Date(Date.UTC(2011,10,7)) == +dateutil.parse('2011-W45'), "2011-W45" );
  ok( +new Date(Date.UTC(2011,10,7)) == +dateutil.parse('2011W45'), "2011W45" );

  // year_and_ordinal
  deepEqual( +dateutil.parse('-12011-314'), +new Date( Date.UTC( -12011,0,314 ) ), "-12011-314" );
  deepEqual( +dateutil.parse('2011-314'), +new Date( Date.UTC( 2011,0,314 ) ), "2011-314" );
  deepEqual( ''+dateutil.parse('2011-500'), INVALID, "2011-500" ); // should fail!
    
  // year_and_quarter
  var corduroy_q = new Date( Date.UTC( 2011,9,1 ) );
  ok( +dateutil.parse('-12011-Q4') == +new Date(Date.UTC(-12011,9,1)), "-12011-Q4" );
  ok( +corduroy_q == +dateutil.parse('2011Q4'), "2011Q4" );
  ok( +corduroy_q == +dateutil.parse('2011-Q4'), "2011-Q4" );
  ok( +corduroy_q == +dateutil.parse('2011q4'), "2011q4" );
  ok( +corduroy_q == +dateutil.parse('2011-q4'), "2011-q4" );

});


test("dateutil.parse: JSON style calendar dates", function () {
  for (var i=0,l=test_dates.length; i<l; i++) {
    var test_date = test_dates[i];
    var parsed_caldate = dateutil.parse( test_date[0] );
    var org_timestamp = test_date[2];
    with (Math) {
      // I anticipate that there may be some floating point artifacts 
      // in the milliseconds. Currently allowing a variation of a about 
      // a microsecond 
      var diff = parsed_caldate - floor( org_timestamp * 1000 );
      ok(
        abs( diff ) <= 1,
        test_date[0]
      );
    }
  }
});


test("dateutil.parse: yyyy-Www-d", function () {
  for (var i=0,l=test_dates.length; i<l; i++) {
    var test_date = test_dates[i];
    with (Math) {
      var d = new Date( floor( test_date[2] * 1000 ) );
      d.setUTCHours(0); d.setUTCMinutes(0); d.setUTCSeconds(0); d.setUTCMilliseconds(0);
      deepEqual( +dateutil.parse( test_date[1] ), +d, test_date[1] );
    }
  }
});


test("dateutil.format", function () {

  // expect( 10 );
  ok( typeof dateutil.format === 'function', 'dateutil.format() is a function' );

  var d = new Date( Date.UTC( 2001, 2, 10, 17, 16, 18, 13 ) );
  deepEqual( dateutil.format( d, "F j, Y, g:i a"), "March 10, 2001, 5:16 pm",  "F j, Y, g:i a" );
  deepEqual( dateutil.format( d, "m.d.y"), "03.10.01",  "m.d.y" );
  deepEqual( dateutil.format( d, "j, n, Y"), "10, 3, 2001",  "j, n, Y" );
  deepEqual( dateutil.format( d, "Ymd"), "20010310",  "Ymd" );
  deepEqual( dateutil.format( d, 'h-i-s, j-m-y, it is w Day'), "05-16-18, 10-03-01, 1631 1618 6 Satpm01",  "h-i-s, j-m-y, it is w Day" );
  deepEqual( dateutil.format( d, '\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.'), "it is the 10th day.",  "\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y." );
  deepEqual( dateutil.format( d, "D M j G:i:s T Y"), "Sat Mar 10 17:16:18 UTC 2001",  "D M j G:i:s T Y" );
  deepEqual( dateutil.format( d, 'H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h'), "17:03:18 m is month",  "H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h" );
  deepEqual( dateutil.format( d, "H:i:s"), "17:16:18",  "Format: 17:16:18" );

  var d = new Date( Date.UTC( 2006, 7, 10, 15, 5, 8, 123 ) );
  equal( dateutil.format( d, 'd'), '10', 'format: d' );
  equal( dateutil.format( d, 'D'), 'Thu', 'format: D' );
  equal( dateutil.format( d, 'j'), '10', 'format: j' );
  equal( dateutil.format( d, 'l'), 'Thursday', 'format: l' );
  equal( dateutil.format( d, 'N'), '4', 'format: N' );
  equal( dateutil.format( d, 'S'), 'th', 'format: S' );
  equal( dateutil.format( d, 'w'), '4', 'format: w' );
  equal( dateutil.format( d, 'z'), '221', 'format: z' );
  equal( dateutil.format( d, 'W'), '32', 'format: W' );
  equal( dateutil.format( d, 'F'), 'August', 'format: F' );
  equal( dateutil.format( d, 'm'), '08', 'format: m' );
  equal( dateutil.format( d, 'M'), 'Aug', 'format: M' );
  equal( dateutil.format( d, 'n'), '8', 'format: n' );
  equal( dateutil.format( d, 't'), '31', 'format: t' );
  equal( dateutil.format( d, 'L'), '0', 'format: L' );
  equal( dateutil.format( d, 'o'), '2006', 'format: o' );
  equal( dateutil.format( d, 'Y'), '2006', 'format: Y' );
  equal( dateutil.format( d, 'y'), '06', 'format: y' );
  equal( dateutil.format( d, 'a'), 'pm', 'format: a' );
  equal( dateutil.format( d, 'A'), 'PM', 'format: A' );
  equal( dateutil.format( d, 'B'), 'B', 'format: B' );  // not supported
  equal( dateutil.format( d, 'g'), '3', 'format: g' );
  equal( dateutil.format( d, 'G'), '15', 'format: G' );
  equal( dateutil.format( d, 'h'), '03', 'format: h' );
  equal( dateutil.format( d, 'H'), '15', 'format: H' );
  equal( dateutil.format( d, 'i'), '05', 'format: i' );
  equal( dateutil.format( d, 's'), '08', 'format: s' );
  equal( dateutil.format( d, 'u'), '000123', 'format: u' );
  equal( dateutil.format( d, 'e'), 'UTC', 'format: e' );
  equal( dateutil.format( d, 'I'), 'I', 'format: I' );  // not supported
  equal( dateutil.format( d, 'O'), '+0000', 'format: O' );
  equal( dateutil.format( d, 'P'), '+00:00', 'format: P' );
  equal( dateutil.format( d, 'T'), 'UTC', 'format: T' );
  equal( dateutil.format( d, 'Z'), 'Z', 'format: Z' );  // not supported
  equal( dateutil.format( d, 'c'), '2006-08-10T15:05:08.123Z', 'format: c' );
  equal( dateutil.format( d, 'r'), 'Thu, 10 Aug 2006 15:05:08 +0000', 'format: r' );
  equal( dateutil.format( d, 'U'), '1155222308', 'format: U' );

  var d = new Date( Date.UTC( 1961, 0, 3, 1, 51, 10, 1 ) );
  equal( dateutil.format( d, 'd'), '03', 'format: d' );
  equal( dateutil.format( d, 'D'), 'Tue', 'format: D' );
  equal( dateutil.format( d, 'j'), '3', 'format: j' );
  equal( dateutil.format( d, 'l'), 'Tuesday', 'format: l' );
  equal( dateutil.format( d, 'N'), '2', 'format: N' );
  equal( dateutil.format( d, 'S'), 'rd', 'format: S' );
  equal( dateutil.format( d, 'w'), '2', 'format: w' );
  equal( dateutil.format( d, 'z'), '2', 'format: z' );
  equal( dateutil.format( d, 'W'), '01', 'format: W' );
  equal( dateutil.format( d, 'F'), 'January', 'format: F' );
  equal( dateutil.format( d, 'm'), '01', 'format: m' );
  equal( dateutil.format( d, 'M'), 'Jan', 'format: M' );
  equal( dateutil.format( d, 'n'), '1', 'format: n' );
  equal( dateutil.format( d, 't'), '31', 'format: t' );
  equal( dateutil.format( d, 'L'), '0', 'format: L' );
  equal( dateutil.format( d, 'o'), '1961', 'format: o' );
  equal( dateutil.format( d, 'Y'), '1961', 'format: Y' );
  equal( dateutil.format( d, 'y'), '61', 'format: y' );
  equal( dateutil.format( d, 'a'), 'am', 'format: a' );
  equal( dateutil.format( d, 'A'), 'AM', 'format: A' );
  equal( dateutil.format( d, 'B'), 'B', 'format: B' );  // unsupported
  equal( dateutil.format( d, 'g'), '1', 'format: g' );
  equal( dateutil.format( d, 'G'), '1', 'format: G' );
  equal( dateutil.format( d, 'h'), '01', 'format: h' );
  equal( dateutil.format( d, 'H'), '01', 'format: H' );
  equal( dateutil.format( d, 'i'), '51', 'format: i' );
  equal( dateutil.format( d, 's'), '10', 'format: s' );
  equal( dateutil.format( d, 'u'), '000001', 'format: u' );
  equal( dateutil.format( d, 'e'), 'UTC', 'format: e' );
  equal( dateutil.format( d, 'I'), 'I', 'format: I' );  // not supported
  equal( dateutil.format( d, 'O'), '+0000', 'format: O' );
  equal( dateutil.format( d, 'P'), '+00:00', 'format: P' );
  equal( dateutil.format( d, 'T'), 'UTC', 'format: T' );
  equal( dateutil.format( d, 'Z'), 'Z', 'format: Z' );  // not supported
  equal( dateutil.format( d, 'c'), '1961-01-03T01:51:10.001Z', 'format: c' );
  equal( dateutil.format( d, 'r'), 'Tue, 03 Jan 1961 01:51:10 +0000', 'format: r' );
  equal( dateutil.format( d, 'U'), '-283817329', 'format: U' );

  equal( dateutil.format( new Date(-62009366400000), 'c'), '0005-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(-62167219200000), 'c'), '0000-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(-62198755200000), 'c'), '-000001-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(-77945673600000), 'c'), '-000500-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(253402300800000), 'c'), '+010000-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(3093527980800000), 'c'), '+100000-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(253370764800000), 'c'), '9999-01-01T00:00:00.000Z', 'format: c' );
  equal( dateutil.format( new Date(3093496444800000), 'c'), '+099999-01-01T00:00:00.000Z', 'format: c' );

  // allow transfering to prototype
  Date.prototype.format = dateutil.format;
  var d = new Date( Date.UTC(1975, 9, 16) );
  equal( d.format('Y-m-d'), "1975-10-16", 'format prototype assignment' );
  try {  delete Date.prototype.format; }
  catch (err) {}

});


test("dateutil.today", function () {

  // expect( 10 );
  ok( typeof dateutil.today === 'function', 'dateutil.today() is a function' );

  var d = new Date();
  var today = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

  deepEqual( +dateutil.today(), +today, 'dateutil.today()' );
  deepEqual( +dateutil.today(), +dateutil.set(new Date, { hour:0, minute:0, second:0, millisecond:0 }), 'dateutil.today() vs. dateutil.set()' );

});


test("dateutil.now", function () {
  var d = new Date(), now = dateutil.now();

  // expect( 10 );
  ok( typeof dateutil.now === 'function', 'dateutil.now() is a function' );
  ok( typeof now === "number", 'dateutil.now() returns a number, not a date' );
  deepEqual( +d, +now, 'dateutil.now()' );

});


test("dateutil._", function () {

  ok( typeof dateutil._ === 'function', 'dateutil._() is a function' );

  // provide translations for icelandic:
  dateutil.lang.is = {
    "January":"janúar", "February":"febrúar", "March":"mars", "April":"apríl", "May":"maí", "June":"júní", "July":"júlí", "August":"ágúst", "September":"september", "October":"október", "November":"nóvember", "December":"desember", 
    "Sunday":"sunnudagur", "Monday":"mánudagur", "Tuesday":"þriðjudagur", "Wednesday":"miðvikudagur", "Thursday":"fimmtudagur", "Friday":"föstudagur", "Saturday":"laugardagur",
    "Jan":"jan", "Feb":"feb", "Mar":"mar", "Apr":"apr", "Jun":"jún", "Jul":"júl", "Aug":"ágú", "Sep":"sep", "Oct":"okt", "Nov":"nóv", "Dec":"des",
    "Sun":"sun", "Mon":"mán", "Tue":"þri", "Wed":"mið", "Thu":"fim", "Fri":"fös", "Sat":"lau"
  };
  var d = new Date( Date.UTC( 2006, 7, 10, 15, 5, 8, 123 ) );
  equal( dateutil.format( d, 'D', 'is' ), 'fim', 'format: D' );
  equal( dateutil.format( d, 'l', 'is' ), 'fimmtudagur', 'format: l' );
  equal( dateutil.format( d, 'F', 'is' ), 'ágúst', 'format: F' );
  equal( dateutil.format( d, 'M', 'is' ), 'ágú', 'format: M' );

  dateutil._ = function () { return 'BORK'; };
  equal( dateutil.format( d, 'D', 'is' ), 'BORK', 'format: D' );
  equal( dateutil.format( d, 'l', 'is' ), 'BORK', 'format: l' );
  equal( dateutil.format( d, 'F', 'is' ), 'BORK', 'format: F' );
  equal( dateutil.format( d, 'M', 'is' ), 'BORK', 'format: M' );

});
