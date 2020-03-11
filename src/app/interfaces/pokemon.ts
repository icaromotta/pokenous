export interface PokemonInterface {
    national_number: String,
    evolution: String,
    sprites: {
        normal: String,
        large: String,
        animated: String
    },
    name: String,
    type: [
        String,
        String
    ],
    total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    sp_atk: Number,
    sp_def: Number,
    speed: Number
}
