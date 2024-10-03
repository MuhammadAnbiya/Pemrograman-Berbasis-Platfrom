let fullname = (fn, mn, ln) => {
    return `${fn} ${mn} ${ln}, ${getTitle()}`;
}

let getTitle = () => {
    return "B.sc";
}

console.log(fullname("Jhon", "Dream", "Myung"));
