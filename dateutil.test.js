test('dateutil', function () {
 
  ok( typeof dateutil === 'object', 'have dateutil' );

});


test("dateutil.isLeapYear", function () {

  // expect( 10 );
  ok( typeof dateutil.isLeapYear === 'function', 'dateutil.isLeapYear() is a function' );
  same( dateutil.isLeapYear(1468), true , 'dateutil.isLeapYear(1468)' );
  same( dateutil.isLeapYear(1600), true , 'dateutil.isLeapYear(1600)' );
  same( dateutil.isLeapYear(1852), true , 'dateutil.isLeapYear(1852)' );
  same( dateutil.isLeapYear(1920), true , 'dateutil.isLeapYear(1920)' );
  same( dateutil.isLeapYear(1968), true , 'dateutil.isLeapYear(1968)' );
  same( dateutil.isLeapYear(2000), true , 'dateutil.isLeapYear(2000)' );
  same( dateutil.isLeapYear(2008), true , 'dateutil.isLeapYear(2008)' );
  same( dateutil.isLeapYear(2400), true , 'dateutil.isLeapYear(2400)' );
  same( dateutil.isLeapYear(2800), true , 'dateutil.isLeapYear(2800)' );
  same( dateutil.isLeapYear(1933), false, 'dateutil.isLeapYear(1933)' );
  same( dateutil.isLeapYear(1999), false, 'dateutil.isLeapYear(1999)' );
  same( dateutil.isLeapYear(1800), false, 'dateutil.isLeapYear(1800)' );
  same( dateutil.isLeapYear(1900), false, 'dateutil.isLeapYear(1900)' );
  same( dateutil.isLeapYear(2100), false, 'dateutil.isLeapYear(2100)' );
  same( dateutil.isLeapYear(2200), false, 'dateutil.isLeapYear(2200)' );

});

test("dateutil.daysInMonth", function () {

  // expect( 10 );
  ok( typeof dateutil.daysInMonth === 'function', 'dateutil.daysInMonth() is a function' );
  
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 0,1) )), 31, 'dateutil.daysInMonth( Jan. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 1,1) )), 28, 'dateutil.daysInMonth( Feb. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 2,1) )), 31, 'dateutil.daysInMonth( Mar. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 3,1) )), 30, 'dateutil.daysInMonth( Apr. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 4,1) )), 31, 'dateutil.daysInMonth( May. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 5,1) )), 30, 'dateutil.daysInMonth( Jun. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 6,1) )), 31, 'dateutil.daysInMonth( Jul. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 7,1) )), 31, 'dateutil.daysInMonth( Aug. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 8,1) )), 30, 'dateutil.daysInMonth( Sep. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999, 9,1) )), 31, 'dateutil.daysInMonth( Oct. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999,10,1) )), 30, 'dateutil.daysInMonth( Nov. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1999,11,1) )), 31, 'dateutil.daysInMonth( Dec. 1999 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 0,1) )), 31, 'dateutil.daysInMonth( Jan. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 1,1) )), 29, 'dateutil.daysInMonth( Feb. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 2,1) )), 31, 'dateutil.daysInMonth( Mar. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 3,1) )), 30, 'dateutil.daysInMonth( Apr. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 4,1) )), 31, 'dateutil.daysInMonth( May. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 5,1) )), 30, 'dateutil.daysInMonth( Jun. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 6,1) )), 31, 'dateutil.daysInMonth( Jul. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 7,1) )), 31, 'dateutil.daysInMonth( Aug. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 8,1) )), 30, 'dateutil.daysInMonth( Sep. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920, 9,1) )), 31, 'dateutil.daysInMonth( Oct. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920,10,1) )), 30, 'dateutil.daysInMonth( Nov. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(1920,11,1) )), 31, 'dateutil.daysInMonth( Dec. 1920 )' );
  same( dateutil.daysInMonth(new Date( Date.UTC(2100, 1,1) )), 28, 'dateutil.daysInMonth( Feb. 2100 )' );
  
});


test('dateutil.isocalendar', function () {

  same( dateutil.isocalendar(new Date(Date.UTC(2005, 0, 1))), [2004,53,6], "2004-W53-6" );
  same( dateutil.isocalendar(new Date(Date.UTC(2005, 0, 2))), [2004,53,7], "2004-W53-7" );
  same( dateutil.isocalendar(new Date(Date.UTC(2005,11,31))), [2005,52,6], "2005-W52-6" );
  same( dateutil.isocalendar(new Date(Date.UTC(2007, 0, 1))), [2007, 1,1], "2007-W01-1" );
  same( dateutil.isocalendar(new Date(Date.UTC(2007,11,30))), [2007,52,7], "2007-W52-7" );
  same( dateutil.isocalendar(new Date(Date.UTC(2007,11,31))), [2008, 1,1], "2008-W01-1" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008, 0, 1))), [2008, 1,2], "2008-W01-2" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,29))), [2009, 1,1], "2009-W01-1" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,31))), [2009, 1,3], "2009-W01-3" );
  same( dateutil.isocalendar(new Date(Date.UTC(2009, 0, 1))), [2009, 1,4], "2009-W01-4" );
  same( dateutil.isocalendar(new Date(Date.UTC(2009,11,31))), [2009,53,4], "2009-W53-4" );
  same( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 3))), [2009,53,7], "2009-W53-7" );
  same( dateutil.isocalendar(new Date(Date.UTC(2009,11,31))), [2009,53,4], "2009-W53-4" );
  same( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 1))), [2009,53,5], "2009-W53-5" );
  same( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 2))), [2009,53,6], "2009-W53-6" );
  same( dateutil.isocalendar(new Date(Date.UTC(2010, 0, 3))), [2009,53,7], "2009-W53-7" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,28))), [2008,52,7], "2008-W52-7" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,29))), [2009, 1,1], "2009-W01-1" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,30))), [2009, 1,2], "2009-W01-2" );
  same( dateutil.isocalendar(new Date(Date.UTC(2008,11,31))), [2009, 1,3], "2009-W01-3" );
  same( dateutil.isocalendar(new Date(Date.UTC(2009, 0, 1))), [2009, 1,4], "2009-W01-4" );
  
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
  same( +d, -11673590400000, 'prevent rollovers: 1600-02-29 date,month' );

  var d = dateutil.set(new Date( Date.UTC( 1600, 1, 29 ) ), {
    'month': 0,
    'date': 30
  });
  same( +d, -11673590400000, 'prevent rollovers: 1600-02-29 month,date' );
  
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
  same( +dateutil.parse('2011-11-11T11:11:11.111Z'), +corduroy_full, "2011-11-11T11:11:11.111Z" );
  same( +dateutil.parse('2011-11-11T11:11:11Z'), +corduroy_sec, "2011-11-11T11:11:11Z" );
  same( +dateutil.parse('2011-11-11T11:11.111Z'), +corduroy_mfrc, "2011-11-11T11:11.111Z" );
  same( +dateutil.parse('2011-11-11T11:11Z'), +corduroy_min, "2011-11-11T11:11Z" );
  same( +dateutil.parse('2011-11-11T11.111Z'), +corduroy_hfrc, "2011-11-11T11.111Z" );
  same( +dateutil.parse('2011-11-11T11Z'), +corduroy_hour, "2011-11-11T11Z" );

  same( +dateutil.parse('2011-11-11T11:11:11.111'), +corduroy_full, "2011-11-11T11:11:11.111" );
  same( +dateutil.parse('2011-11-11T11:11:11'), +corduroy_sec, "2011-11-11T11:11:11" );
  same( +dateutil.parse('2011-11-11T11:11.111'), +corduroy_mfrc, "2011-11-11T11:11.111" );
  same( +dateutil.parse('2011-11-11T11:11'), +corduroy_min, "2011-11-11T11:11" );
  same( +dateutil.parse('2011-11-11T11.111'), +corduroy_hfrc, "2011-11-11T11.111" );
  same( +dateutil.parse('2011-11-11T11'), +corduroy_hour, "2011-11-11T11" );

  same( +dateutil.parse('2011-11-11T11:11:11.111+00:00'), +corduroy_full, "2011-11-11T11:11:11.111+00:00" );
  same( +dateutil.parse('2011-11-11T11:11:11+00:00'), +corduroy_sec, "2011-11-11T11:11:11+00:00" );
  same( +dateutil.parse('2011-11-11T11:11.111+00:00'), +corduroy_mfrc, "2011-11-11T11:11.111+00:00" );
  same( +dateutil.parse('2011-11-11T11:11+00:00'), +corduroy_min, "2011-11-11T11:11+00:00" );
  same( +dateutil.parse('2011-11-11T11.111+00:00'), +corduroy_hfrc, "2011-11-11T11.111+00:00" );
  same( +dateutil.parse('2011-11-11T11+00:00'), +corduroy_hour, "2011-11-11T11+00:00" );

  same( +dateutil.parse('2011-11-11T11:11:11.111+00'), +corduroy_full, "2011-11-11T11:11:11.111+00" );
  same( +dateutil.parse('2011-11-11T11:11:11+00'), +corduroy_sec, "2011-11-11T11:11:11+00" );
  same( +dateutil.parse('2011-11-11T11:11.111+00'), +corduroy_mfrc, "2011-11-11T11:11.111+00" );
  same( +dateutil.parse('2011-11-11T11:11+00'), +corduroy_min, "2011-11-11T11:11+00" );
  same( +dateutil.parse('2011-11-11T11.111+00'), +corduroy_hfrc, "2011-11-11T11.111+00" );
  same( +dateutil.parse('2011-11-11T11+00'), +corduroy_hour, "2011-11-11T11+00" );

  // date
  same( +dateutil.parse('2011-11-11'), +corduroy_day, "2011-11-11" );
  same( +dateutil.parse('2011-1111'), +corduroy_day, "2011-1111" );

  // year_and_month
  same( +dateutil.parse('2011-11'), +corduroy_mon, "2011-11" );
  same( +dateutil.parse('2011/11'), +corduroy_mon, "2011/11" );
  same( ''+dateutil.parse('2011-13'), INVALID, "2011-13" );  // should fail!

  // year
  same( +dateutil.parse('2011'), +corduroy_year, "2011" );
  same( +dateutil.parse('12011'), +new Date(Date.UTC(12011,0,1)), "12011" );
  same( +dateutil.parse('-12011'), +new Date(Date.UTC(-12011,0,1)), "-12011" );

  // year_and_week
  ok( +corduroy_day == +dateutil.parse('2011-W45-5'), "2011-W45-5" );
  ok( +corduroy_day == +dateutil.parse('2011W45-5'), "2011W45-5" );
  ok( +corduroy_day == +dateutil.parse('2011W455'), "2011W455" );
  ok( +new Date(Date.UTC(2011,10,7)) == +dateutil.parse('2011-W45'), "2011-W45" );
  ok( +new Date(Date.UTC(2011,10,7)) == +dateutil.parse('2011W45'), "2011W45" );

  // year_and_ordinal
  same( +dateutil.parse('-12011-314'), +new Date( Date.UTC( -12011,0,314 ) ), "-12011-314" );
  same( +dateutil.parse('2011-314'), +new Date( Date.UTC( 2011,0,314 ) ), "2011-314" );
  same( ''+dateutil.parse('2011-500'), INVALID, "2011-500" ); // should fail!
    
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
      same( +dateutil.parse( test_date[1] ), +d, test_date[1] );
    }
  }
});


test("dateutil.format", function () {

  // expect( 10 );
  ok( typeof dateutil.format === 'function', 'dateutil.format() is a function' );

  var d = new Date( Date.UTC( 2001, 2, 10, 17, 16, 18, 13 ) );
  same( dateutil.format( d, "F j, Y, g:i a"), "March 10, 2001, 5:16 pm",  "F j, Y, g:i a" );
  same( dateutil.format( d, "m.d.y"), "03.10.01",  "m.d.y" );
  same( dateutil.format( d, "j, n, Y"), "10, 3, 2001",  "j, n, Y" );
  same( dateutil.format( d, "Ymd"), "20010310",  "Ymd" );
  same( dateutil.format( d, 'h-i-s, j-m-y, it is w Day'), "05-16-18, 10-03-01, 1631 1618 6 Satpm01",  "h-i-s, j-m-y, it is w Day" );
  same( dateutil.format( d, '\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.'), "it is the 10th day.",  "\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y." );
  same( dateutil.format( d, "D M j G:i:s T Y"), "Sat Mar 10 17:16:18 UTC 2001",  "D M j G:i:s T Y" );
  same( dateutil.format( d, 'H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h'), "17:03:18 m is month",  "H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h" );
  same( dateutil.format( d, "H:i:s"), "17:16:18",  "Format: 17:16:18" );

  var d = new Date( Date.UTC( 2006, 7, 10, 15, 5, 8, 123 ) );
  equals( dateutil.format( d, 'd'), '10', 'format: d' );
  equals( dateutil.format( d, 'D'), 'Thu', 'format: D' );
  equals( dateutil.format( d, 'j'), '10', 'format: j' );
  equals( dateutil.format( d, 'l'), 'Thursday', 'format: l' );
  equals( dateutil.format( d, 'N'), '4', 'format: N' );
  equals( dateutil.format( d, 'S'), 'th', 'format: S' );
  equals( dateutil.format( d, 'w'), '4', 'format: w' );
  equals( dateutil.format( d, 'z'), '221', 'format: z' );
  equals( dateutil.format( d, 'W'), '32', 'format: W' );
  equals( dateutil.format( d, 'F'), 'August', 'format: F' );
  equals( dateutil.format( d, 'm'), '08', 'format: m' );
  equals( dateutil.format( d, 'M'), 'Aug', 'format: M' );
  equals( dateutil.format( d, 'n'), '8', 'format: n' );
  equals( dateutil.format( d, 't'), '31', 'format: t' );
  equals( dateutil.format( d, 'L'), '0', 'format: L' );
  equals( dateutil.format( d, 'o'), '2006', 'format: o' );
  equals( dateutil.format( d, 'Y'), '2006', 'format: Y' );
  equals( dateutil.format( d, 'y'), '06', 'format: y' );
  equals( dateutil.format( d, 'a'), 'pm', 'format: a' );
  equals( dateutil.format( d, 'A'), 'PM', 'format: A' );
  equals( dateutil.format( d, 'B'), 'B', 'format: B' );  // not supported
  equals( dateutil.format( d, 'g'), '3', 'format: g' );
  equals( dateutil.format( d, 'G'), '15', 'format: G' );
  equals( dateutil.format( d, 'h'), '03', 'format: h' );
  equals( dateutil.format( d, 'H'), '15', 'format: H' );
  equals( dateutil.format( d, 'i'), '05', 'format: i' );
  equals( dateutil.format( d, 's'), '08', 'format: s' );
  equals( dateutil.format( d, 'u'), '000123', 'format: u' );
  equals( dateutil.format( d, 'e'), 'UTC', 'format: e' );
  equals( dateutil.format( d, 'I'), 'I', 'format: I' );  // not supported
  equals( dateutil.format( d, 'O'), '+0000', 'format: O' );
  equals( dateutil.format( d, 'P'), '+00:00', 'format: P' );
  equals( dateutil.format( d, 'T'), 'UTC', 'format: T' );
  equals( dateutil.format( d, 'Z'), 'Z', 'format: Z' );  // not supported
  equals( dateutil.format( d, 'c'), '2006-08-10T15:05:08.123Z', 'format: c' );
  equals( dateutil.format( d, 'r'), 'Thu, 10 Aug 2006 15:05:08 +0000', 'format: r' );
  equals( dateutil.format( d, 'U'), '1155222308', 'format: U' );

  var d = new Date( Date.UTC( 1961, 0, 3, 1, 51, 10, 1 ) );
  equals( dateutil.format( d, 'd'), '03', 'format: d' );
  equals( dateutil.format( d, 'D'), 'Tue', 'format: D' );
  equals( dateutil.format( d, 'j'), '3', 'format: j' );
  equals( dateutil.format( d, 'l'), 'Tuesday', 'format: l' );
  equals( dateutil.format( d, 'N'), '2', 'format: N' );
  equals( dateutil.format( d, 'S'), 'rd', 'format: S' );
  equals( dateutil.format( d, 'w'), '2', 'format: w' );
  equals( dateutil.format( d, 'z'), '2', 'format: z' );
  equals( dateutil.format( d, 'W'), '01', 'format: W' );
  equals( dateutil.format( d, 'F'), 'January', 'format: F' );
  equals( dateutil.format( d, 'm'), '01', 'format: m' );
  equals( dateutil.format( d, 'M'), 'Jan', 'format: M' );
  equals( dateutil.format( d, 'n'), '1', 'format: n' );
  equals( dateutil.format( d, 't'), '31', 'format: t' );
  equals( dateutil.format( d, 'L'), '0', 'format: L' );
  equals( dateutil.format( d, 'o'), '1961', 'format: o' );
  equals( dateutil.format( d, 'Y'), '1961', 'format: Y' );
  equals( dateutil.format( d, 'y'), '61', 'format: y' );
  equals( dateutil.format( d, 'a'), 'am', 'format: a' );
  equals( dateutil.format( d, 'A'), 'AM', 'format: A' );
  equals( dateutil.format( d, 'B'), 'B', 'format: B' );  // unsupported
  equals( dateutil.format( d, 'g'), '1', 'format: g' );
  equals( dateutil.format( d, 'G'), '1', 'format: G' );
  equals( dateutil.format( d, 'h'), '01', 'format: h' );
  equals( dateutil.format( d, 'H'), '01', 'format: H' );
  equals( dateutil.format( d, 'i'), '51', 'format: i' );
  equals( dateutil.format( d, 's'), '10', 'format: s' );
  equals( dateutil.format( d, 'u'), '000001', 'format: u' );
  equals( dateutil.format( d, 'e'), 'UTC', 'format: e' );
  equals( dateutil.format( d, 'I'), 'I', 'format: I' );  // not supported
  equals( dateutil.format( d, 'O'), '+0000', 'format: O' );
  equals( dateutil.format( d, 'P'), '+00:00', 'format: P' );
  equals( dateutil.format( d, 'T'), 'UTC', 'format: T' );
  equals( dateutil.format( d, 'Z'), 'Z', 'format: Z' );  // not supported
  equals( dateutil.format( d, 'c'), '1961-01-03T01:51:10.001Z', 'format: c' );
  equals( dateutil.format( d, 'r'), 'Tue, 03 Jan 1961 01:51:10 +0000', 'format: r' );
  equals( dateutil.format( d, 'U'), '-283817329', 'format: U' );

  // allow transfering to prototype
  Date.prototype.format = dateutil.format;
  var d = new Date( Date.UTC(1975, 9, 16) );
  equals( d.format('Y-m-d'), "1975-10-16", 'format prototype assignment' );
  try {  delete Date.prototype.format; }
  catch (err) {}

});


test("dateutil.today", function () {

  // expect( 10 );
  ok( typeof dateutil.today === 'function', 'dateutil.today() is a function' );

  var d = new Date();
  var today = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

  same( +dateutil.today(), +today, 'dateutil.today()' );
  same( +dateutil.today(), +dateutil.set(new Date, { hour:0, minute:0, second:0, millisecond:0 }), 'dateutil.today() vs. dateutil.set()' );

});


test("dateutil.now", function () {
  var d = new Date(), now = dateutil.now();

  // expect( 10 );
  ok( typeof dateutil.now === 'function', 'dateutil.now() is a function' );
  same( +d, +now, 'dateutil.now()' );

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
  equals( dateutil.format( d, 'D', 'is' ), 'fim', 'format: D' );
  equals( dateutil.format( d, 'l', 'is' ), 'fimmtudagur', 'format: l' );
  equals( dateutil.format( d, 'F', 'is' ), 'ágúst', 'format: F' );
  equals( dateutil.format( d, 'M', 'is' ), 'ágú', 'format: M' );

  dateutil._ = function () { return 'BORK'; };
  equals( dateutil.format( d, 'D', 'is' ), 'BORK', 'format: D' );
  equals( dateutil.format( d, 'l', 'is' ), 'BORK', 'format: l' );
  equals( dateutil.format( d, 'F', 'is' ), 'BORK', 'format: F' );
  equals( dateutil.format( d, 'M', 'is' ), 'BORK', 'format: M' );

});
