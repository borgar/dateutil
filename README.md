# Dateutil

Dateutil is a modest collection of utility methods for manipulating dates. It works both in Node.JS and in browsers. It's goal is to provide extendable mechanisms for parsing and formatting dates, as well as other convenient date methods.

Currently, the library supports formatting of nearly full spec of PHP style dates (minus the really useless bits), and parses about the full range of ISO 8901 formats. It supports translations (for formatter) but no timezones.

## Dateutil methods

### dateutil.isLeapYear( date / year )

Function accepts a *Date*, or a year, and will return true if the year is a leap year or false if not.

    dateutil.isLeapYear( 1468 ) = true


### dateutil.daysInMonth( date )

Function accepts a *Date* and returns the number of days in it's month.

    dateutil.daysInMonth( new Date(1920, 3, 1) ) == 30


### dateutil.isocalendar( date )

Function accepts a *Date* and returns a three value array containing the ISO 8901 year, week, and day (of the week), respectively.

    dateutil.isocalendar( new Date(2010, 0, 3) ) == [2009, 53, 7]


### dateutil.set( date, values )

Function accepts a *Date* and an object of values. The function returns the input date (same instance) having set the units specified in the values collection.

    var mydate = new Date( 2000, 9, 16, 10, 45, 12 );
    dateutil.set( mydate, { hour: 0, minute: 0, second: 0 });

    result:  mydate == new Date( 2000, 9, 16, 0, 0, 0 );

The function will accept all or any of these keys: 
`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`. and their plural forms (`years`, `minutes`, etc. ); and these shorthand variations: `yr` (year), `mn` (month), `day` (day), `hr` (hour), `min` (minute), `sec` (second), `ms` (millisecond).

**Please note:** Months are zero based in set just as they are in native *Date* construction.


### dateutil.parse( string )

Function accepts a string (representing a date) and will output a *Date* based on parsing the string.

    dateutil.parse('2005-01-01') == new Date(2005, 0, 1)

The function will aways return a *Date* instance, valid or not. Internally it falls back to native parser if it fails to recognize the format.

A mostly complete list of recognized formats:

* yyyy-mm-dd hh:mm:ss.ffff+0000 &nbsp; &mdash; *(timezone is currently ignored)*
* yyyy-mm-dd hh:mm:ss.ffffZ
* yyyy-mm-dd hh:mm:ss.ffff
* yyyy-mm-dd hh:mm
* yyyy-mm-ddThh:mm:ss.ffff+0000 &nbsp; &mdash; *(timezone is currently ignored)*
* yyyy-mm-ddThh:mm:ss.ffffZ
* yyyy-mm-ddThh:mm:ss.ffff
* yyyy-mm-ddThh:mm
* yyyy-mm-dd
* yyyy-mmdd
* yyyymmdd
* yyyy-ddd &nbsp; &mdash; *year with day-of-the-year*
* yyyy-Www-d
* yyyy-Wwwd
* yyyy-Www
* yyyyWww-d
* yyyyWwwd
* yyyyWww
* yyyy-Qq &nbsp; &mdash; *year with quarter*
* yyyyQq
* yyyy-mm
* yyyy/mm
* yyyy

... In addition to the formats JavaScript can natively parse.


#### Adding a custom parser

You may add your own parser by assigning them into `dateutil._parsers`. A parser is simply an object with two members: 

* `test`: a regular expression used to test if this date can be parsed by the parser. Keep these simple and avoid capture groups, or suffer the slowdown cost.
* `parse`: a function that handles turning the string into a `Date` instance.

An contrived example:

    // year + excel week
    dateutil._parsers['year_and_excel_week'] = {
      test: /^\d{4}_[0-5]\d$/,
      parse: function ( str ) {
        var bits = str.split('_');
        var year = parseInt( bits[0], 10 );
        var dofy = parseInt( bits[1], 10 );
        return new Date( year, 0, ((dofy - 1) * 7) + 1);
      }
    };

    // usage:
    dateutil.parse('2002_31') == new Date(2002, 6, 30)


### dateutil.format( date, format_string )

Function accepts a *Date* and a *PHP* style [format string][1] and returns a formatted date. Refer to the [PHP docs][1] for the full spec.

    var mydate = new Date( 2000, 9, 16, 10, 45, 12 );
    dateutil.format( mydate, 'jS F Y' ) == "16th October 2000"

The `B`, `Z`, and `I` characters have been purposely omitted, and the following new characters added:

* `q` &mdash; quarter of the year


#### Adding a custom formatter

You may add your own formatter by assigning them into `dateutil._formats`. A parser is simply a function that takes a *Date* parameter and returns a string. 

And example that adds *Swatch internet time* formatter:

    
    // Swatch Internet time
    dateutil._formats['B'] = function (d) {
      var mo = 0; // Should really be: isDST * 60 + timeZoneOffsetInMinutes
      return Math.round( ( d.getUTCHours() * 3600 + 
            ( ( d.getUTCMinutes() - mo + 60 ) * 60 ) +
              d.getUTCSeconds() ) * 1000 / 86400 ) % 1000;
    };

    var mydate = new Date( 1961, 0, 3, 1, 51, 10, 1 );
    dateutil.format( mydate, 'B' ) == '119'



### dateutil.today()

Function returns a new *Date* instance set to the current day.


### dateutil.now()

Function returns a new *Date* instance set to the current moment. Uses native implementation if it exists.


### dateutil._( string )

A translation service hook. This function accepts a string and returns it untouched. If you want translated month or day names, then overwrite this function with your translation service function, and provide translations for the following strings:

* January February March April May June July August September October November December
* Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
* Sunday Monday Tuesday Wednesday Thursday Friday Saturday
* Sun Mon Tue Wed Thu Fri Sat




[1]: http://php.net/manual/en/function.date.php
