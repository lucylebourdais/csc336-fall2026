document.addEventListener("DOMContentLoaded", () => {
    let data = [
        {
            name: "Lucy",
        },
        {
            name: "Cat",
        }
    ];

    let lowerCaseNames = data.map((obj) => {
        obj.name = obj.name.toLowerCase();
        return obj;
    });
    console.log(lowerCaseNames);

});