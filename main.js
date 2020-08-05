// Roll for parents

let parents = Math.round((Math.random()*100));

switch (parents) {
  case parents >= 95:
    console.log("You do not know who your parents are");
    break;
  default:
    console.log("You know who your parents are or were");
    break;
}

// Roll for non-human parent races

let halfElfParents = Math.ceil(Math.random()*8);

switch (halfElfParents) {
    case halfElfParents >= 2 :
        console.log("One parent was a human and the other was an elf");
        break;
    case halfElfParents >= 4 :
        console.log("One parent was an elf and the other was a half elf");
        break;
    case halfElfParents >= 6 :
        console.log("One parent was a human and the other was a half elf");
        break;
    default:
        console.log("Both parents were half elves");
        break;
}
