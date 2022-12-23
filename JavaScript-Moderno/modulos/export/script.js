// Aqui estou importando um função de forma inline e renomenado ela.
import { inline as i } from "./inline.js";
// o default não precisa ser renomeado e só pode ser usado uma vez
import defaultInline from "./inline.js";
import { group } from "./nonIline.js";
import exportDefault from "./nonIline.js";

i();
defaultInline();

group();
exportDefault();
