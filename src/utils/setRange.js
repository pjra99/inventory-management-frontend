export const setRange = (range1, range2, rangeCol) => {
    return (key) => {  
        if (range1 && range2) {
            return key[rangeCol] >= range1 && key[rangeCol] <= range2;
        } else if (range1) {
            return key[rangeCol] >= range1;
        } else {
            return key[rangeCol] <= range2;
        }
    };
};