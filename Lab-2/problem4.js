let sandwich_calculator = function(bread) {
    if (bread > 1) {
        let no_of_sandwich = bread / 2;
        console.log("Number of Sandwich = " + Math.floor(no_of_sandwich));
    }
};

sandwich_calculator(3);

//Extending Function

let sandwich_calculator2 = function(bread, cheese) {
    if ((bread / 2) <= cheese) {
        let sandwich = bread / 2;
        console.log("Number of Sandwich = " + Math.floor(sandwich));
    }

    if ((bread / 2) > cheese) {
        let sandwich = cheese;
        console.log("Number of Sandwich = " + Math.floor(sandwich));
    }
};

sandwich_calculator2(8, 3);