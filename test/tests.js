const test = QUnit.test;

function subtract(x, y) {
    return x - y;
}

test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 10;
    const y = 2;
    const expected = 8;

    //Act 
    // Call the function you're testing and set the result to a const

    const difference = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);
});

// NEW FUNCTION:

function multiply(x, y) {
    return x * y;
}

test('multiply function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 5;
    const y = 5;
    const expected = 25;

    //Act 
    // Call the function you're testing and set the result to a const

    const multiple = multiply(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(multiple, expected);
});

// NEW FUNCTION:

function divide(x, y) {
    return x / y;
}

test('divide function 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 100;
    const y = 20;
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const

    const division = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(division, expected);
});

// NEW FUNCTION:

function divide2(x, y) {
    return x / y;
}

test('divide function 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 7;
    const y = 0;
    const expected = Infinity;

    //Act 
    // Call the function you're testing and set the result to a const

    const division = divide2(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(division, expected);
});

// NEW FUNCTION:
function isEven(i) {
    if(i % 2 === 0) {
        return true;
    } else {
        return false;
    }
    
}

test('isEven function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6;
    const y = 7;
    const expected = true;
    const expectedY = false; 

    //Act 
    // Call the function you're testing and set the result to a const

    const even = isEven(x);
    const odd = isEven(y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(even, expected);
    assert.equal(odd, expectedY);

});

// NEW FUNCTION:

function getNumbers(i) {
    return x / y;
}

test('getNumbers function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 5;
    const expected = [1, 2, 3, 4, 5];

    //Act 
    // Call the function you're testing and set the result to a const

    const get = getNumbers(x, y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(get, expected);
});
