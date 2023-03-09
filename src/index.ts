// values intended to be randomized for warrior cat OC generation
const furLength = ["short", "medium", "long"];
const furTexture = ["straight", "soft", "curly", "dirty", "messy", "clean", "spiky",];
const furColor = ["white", "grey", "blue", "black", "brown", "cream", "orange"];
const furPattern = ["plain-colored", "tabby", "tortoiseshell", "torbie", "calico", "leopard spots", "tiger-stripes"];
const eyeType = ["deep", "dark", "glowing", "light", "pale", "mysterious"];
const eyeColor = ["brown", "green", "yellow", "blue", "heterochromic"];
const details = ["scar on face", "scar on ear", "scar on body", "scar on paw", "scar on tail", "missing ear", "missing tail", "overbite", "small body", "large body", "skinny", "overweight", "muscular", "new collar", "worn collar", "bald spot", "bandana", "bandage"];
const role = ["leader", "deputy", "warrior", "apprentice", "medicine cat", "medicine cat apprentice", "queen", "kit", "elder","kittypet", "loner"];

//console.log(furLength)

function randomValue(value: string | any[]) {
    return value[Math.floor(Math.random() * value.length)];
}
//console.log(randomValue(role))

//I DONT KNOW HOW TO MAKE THIS SIMPLER.
document.querySelector("b:nth-child(1)").innerHTML = randomValue(furLength);
document.querySelector("b:nth-child(2)").innerHTML = randomValue(furTexture);
document.querySelector("b:nth-child(3)").innerHTML = randomValue(furColor);
document.querySelector("b:nth-child(4)").innerHTML = randomValue(furPattern);

document.querySelector("b:nth-child(5)").innerHTML = randomValue(eyeType);
document.querySelector("b:nth-child(6)").innerHTML = randomValue(eyeColor);

document.querySelector("b:nth-child(7)").innerHTML = randomValue(details);
document.querySelector("b:nth-child(8)").innerHTML = randomValue(role);