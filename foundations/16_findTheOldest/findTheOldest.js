const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        const aBirth = a.yearOfBirth;
        const bBirth = b.yearOfBirth;
        const aDeath = a.yearOfDeath || null;
        const bDeath = b.yearOfDeath || null;
        let currentYear = new Date().getFullYear();
        if(aDeath && bDeath) {
            return aDeath - aBirth - bDeath + bBirth;
        } else if(!aDeath && bDeath) {
            return currentYear - aBirth - bDeath + bBirth;
        } else if(aDeath && !bDeath) {
            return aDeath - aBirth - currentYear + bBirth;
        } else {
            return bBirth - aBirth;
        }
    }).at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
