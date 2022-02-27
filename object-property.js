const student = {
    name: "Imtiaz",
    id: 2015 - 1 - 60 - 042,
    money: 5000,
    friend: ['Shovon', 'Shakib', 'Rony', 'Hossen'],
    favPlace: {
        name: "Bandorbon",
        area: ['Buiyan', 'Chotki', 'Chinadi', 'Askartek'],
        favFood: {
            name: "Biriani",
            tk: 250,
            isTasty: true,
        }

    },
    treatDey: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    },
}
// 1. solved
// const reamining = student.treatDey(2600, 200);
// console.log(reamining, student.name, student.friend[2], student.favPlace.favFood.isTasty);

// 2. solved
// const string = `${student.name} ${student.friend[1]} ${student.favPlace.favFood.isTasty} ${student.favPlace.area[3]}`;
// console.log(string);
