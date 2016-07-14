/*
 *  Class.js
 *  @depends {Base.js}
 */
(function() {
    'use strict';

    var bigObject = {
        a: 1,
        b: 2,
        c: 3
    };

    function someFunctionThatDoesStuff() {
        return 'cats';
    }

    window.ohNoNotGlobal = {
        object: bigObject,
        thebest: someFunctionThatDoesStuff()
    };

}());

/**
 * NewFile.js
 * @depends {Class.js}
 */
(function() {
    'use strict';
    window.ohNoNotGlobal = { spider: 'man', cat: 'woman' };
}());

/*
 *  Base.js
 */
(function() {
    'use strict';

    var notDoingMuch = {};

}());

/*
 *  Class.js
 *  @depends {Base.js}
 */
(function() {
    'use strict';

    var bigObject = {
        a: 1,
        b: 2,
        c: 3
    };

    function someFunctionThatDoesStuff() {
        return 'cats';
    }

    window.ohNoNotGlobal = {
        object: bigObject,
        thebest: someFunctionThatDoesStuff()
    };

}());
