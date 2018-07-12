export const getRegions = (data) => {
    console.log(data);
    data.filter( onlyUnique );
};

function unique(value, index, self) {
    return self.indexOf(value) === index;
}