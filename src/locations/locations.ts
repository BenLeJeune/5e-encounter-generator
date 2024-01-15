import {coastal_locations} from "./coastal_locations";
import {desert_locations} from "./desert_locations";
import {forest_locations} from "./forest_locations";
import {grassland_locations} from "./grassland_locations";
import {hill_locations} from "./hill_locations";
import {mountain_locations} from "./mountain_locations";
import {swamp_locations} from "./swamp_locations";
import {underdark_locations} from "./underdark_locations";
import {underwater_locations} from "./underwater_locations";
import {urban_locations} from "./urban_locations";
import {arctic_locations} from "./arctic_locations";
import {undead_locations} from "./undead_locations";
import {fiend_locations} from "./fiend_locations";
import {aberration_locations} from "./aberration_locations";

export const locations = {
    // We have the "environment-based" locations
    "arctic": arctic_locations,
    "coastal": coastal_locations,
    "desert": desert_locations,
    "forest": forest_locations,
    "grassland": grassland_locations,
    "hill": hill_locations,
    "mountain": mountain_locations,
    "swamp": swamp_locations,
    "underdark": underdark_locations,
    "underwater": underwater_locations,
    "urban": urban_locations,
    // ...and the "type-based" locations
    "undead": undead_locations,
    "fiend": fiend_locations,
    "aberration": aberration_locations
}