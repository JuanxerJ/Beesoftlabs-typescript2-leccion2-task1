//------------------------------------------------Ejercicio 1-------------------------------------------------//

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//------------------------------------------------Ejercicio 2-------------------------------------------------//

export const boolToWord = (bool) => {
  return bool === true ? "Yes" : "No";
};

//------------------------------------------------Ejercicio 3-------------------------------------------------//

export function abbrevName(name) {
  const splited = name.split(" ");
  const Reduced = splited.reduce((acc, current) => {
    acc.push(current[0]);
    return acc;
  }, []);

  const joined = Reduced.join(".").toUpperCase();
  return joined;
}

//------------------------------------------------Ejercicio 4-------------------------------------------------//

export function updateLight(current) {
  switch (current) {
    case "red":
      current = "green";
      break;

    case "green":
      current = "yellow";
      break;

    case "yellow":
      current = "red";
      break;
  }
  return current;
}

//------------------------------------------------Ejercicio 5-------------------------------------------------//

export function DNAtoRNA(dna) {
  let re = /T/gi;
  return dna.replace(re, "U");
}
