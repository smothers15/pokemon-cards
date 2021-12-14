const {Pokemon} = require('../models');
const types = ['Electric', 'Fire', 'Water', 'Steel', 'Psychic', 'Fighting', 'Colorless', 'Dark']
module.exports.viewAll = async function(req, res, next) {

    const pokemon = await Pokemon.findAll();

    res.render('index', {pokemon});

};

module.exports.renderEditForm = async function(req, res, next) {

    const pokemon = await Pokemon.findByPk(

        req.params.id
    );

    res.render('edit', {pokemon});
};

module.exports.updateCard = async function(res, req, next) {
    await Pokemon.update(
        {
            name: req.body.name,
            type: getSymbol(req.body.type),
            hp: req.body.hp,
            first_power: req.body.first_power,
            first_damage: req.body.first_damage,

            second_power: req.body.second_power,

            second_damage: req.body.second_damage,
            secondary_cost: getSymbol(req.body.secondary_cost),
            weakness: getSymbol(req.body.weakness),
            resistance: getSymbol(req.body.resistance),
            retreat_cost: getSymbol(req.body.retreat_cost)
        },
        {
            where:{
                id:req.params.id
            }
        });
    res.redirect('/');
};

module.exports.renderAddForm = function(req, res) {
    const pokemon = {
        name: "",
        type: "",
        hp: " HP",
        first_power: "",
        first_damage: 0,

        second_power: "",
        second_damage: 0,

        secondary_cost: "",
        weakness: "",
        resistance: "",
        retreat_cost: ""

    };
    res.render('add', {pokemon});
};

module.exports.addPokemon = async function(res, req) {
    await Pokemon.create({
        name: req.body.name,
        type: getSymbol(req.body.type),
        hp: req.body.hp,
        first_power: req.body.first_power,
        first_damage: req.body.first_damage,

        second_power: req.body.second_power,

        second_damage: req.body.second_damage,
        secondary_cost: getSymbol(req.body.secondary_cost),
        weakness: getSymbol(req.body.weakness),
        resistance: getSymbol(req.body.resistance),
        retreat_cost: getSymbol(req.body.retreat_cost)
    });
    res.redirect('/');
};

function getSymbol(type){
    if(type === "Electric"){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w476-824f2616-a647-4a21-a284-8a35db3dd34b.png/v1/fill/w_720,h_720,strp/electric_energy_by_humac1_d50w476-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDc2LTgyNGYyNjE2LWE2NDctNGEyMS1hMjg0LThhMzVkYjNkZDM0Yi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TWz0rw0cPCDqnXtwripN9OXA1V9qf5jNwrZYea4YZ7w'
    }else if(type === "Grass"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w40k-75281ddb-5dc8-4eb8-9321-d5c901815eed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQway03NTI4MWRkYi01ZGM4LTRlYjgtOTMyMS1kNWM5MDE4MTVlZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yGkym2UfwaoUVHBldwSE9pHM9Y0tgJMSzvVGLEh6HDI"
    }else if(type === "Fire"){
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png/v1/fill/w_720,h_720,strp/fire_energy_by_humac1_d50w437-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDM3LTMxNWEzNGM0LTg1YzItNGQwNy1hZTRkLTZiNDJhMjUyMzNiZi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9MXJnu8IXMxIGYcRKIg-sfxBAcqfIptXg_uw_OqM3wo'
    }else if(type === "Water"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3fi-85063943-452c-4b80-8db1-5cf8ff52df52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNmaS04NTA2Mzk0My00NTJjLTRiODAtOGRiMS01Y2Y4ZmY1MmRmNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.voroYLPZMwgOCJjmkVuK6GepgSaDWAjj25Ptq5CuGJg"
    }else if(type === "Steel"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3tj-08f8872a-82e0-4261-b39f-6d66030b354f.png/v1/fill/w_720,h_720,strp/metal_energy_by_humac1_d50w3tj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3RqLTA4Zjg4NzJhLTgyZTAtNDI2MS1iMzlmLTZkNjYwMzBiMzU0Zi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Dpncm4PEyyma0CBCZcpVZ0Lm0YeMMKHnrxCu5RK9Nh0"
    }else if(type === "Fighting"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f23c48c4-218f-4490-a23d-551fbf5b3603/d6nca3w-39090ca4-f295-4432-b742-c48089abcfd1.png"
    }else if(type === "Psychic"){
        return "http://pm1.narvii.com/6369/f14d12472d3cddf98ec656ba88c9aed343459b59_00.jpg"
    }else if(type === "Dark"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4az-9be9ea46-fdf8-4e18-957e-9c7fcded42e5.png/v1/fill/w_720,h_720,strp/dark_energy_by_humac1_d50w4az-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGF6LTliZTllYTQ2LWZkZjgtNGUxOC05NTdlLTljN2ZjZGVkNDJlNS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7GbSWxHrGsP-onFWhchqfZziYMeQ7tUS8kVNPSr2g54"
    }else if(type === "Colorless"){
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8"
    }else{
        return ""
    }
}

function getName(symbol){
    if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w476-824f2616-a647-4a21-a284-8a35db3dd34b.png/v1/fill/w_720,h_720,strp/electric_energy_by_humac1_d50w476-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDc2LTgyNGYyNjE2LWE2NDctNGEyMS1hMjg0LThhMzVkYjNkZDM0Yi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TWz0rw0cPCDqnXtwripN9OXA1V9qf5jNwrZYea4YZ7w"){
        return 'Electric'
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w40k-75281ddb-5dc8-4eb8-9321-d5c901815eed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzQway03NTI4MWRkYi01ZGM4LTRlYjgtOTMyMS1kNWM5MDE4MTVlZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yGkym2UfwaoUVHBldwSE9pHM9Y0tgJMSzvVGLEh6HDI"){
        return "Grass"
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w437-315a34c4-85c2-4d07-ae4d-6b42a25233bf.png/v1/fill/w_720,h_720,strp/fire_energy_by_humac1_d50w437-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NDM3LTMxNWEzNGM0LTg1YzItNGQwNy1hZTRkLTZiNDJhMjUyMzNiZi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9MXJnu8IXMxIGYcRKIg-sfxBAcqfIptXg_uw_OqM3wo"){
        return 'Fire'
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3fi-85063943-452c-4b80-8db1-5cf8ff52df52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiYTFhNzU2LWQ5NTUtNDNmNi1hMmU5LTViN2Q2MDQwNjg1NFwvZDUwdzNmaS04NTA2Mzk0My00NTJjLTRiODAtOGRiMS01Y2Y4ZmY1MmRmNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.voroYLPZMwgOCJjmkVuK6GepgSaDWAjj25Ptq5CuGJg"){
        return "Water"
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w3tj-08f8872a-82e0-4261-b39f-6d66030b354f.png/v1/fill/w_720,h_720,strp/metal_energy_by_humac1_d50w3tj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3M3RqLTA4Zjg4NzJhLTgyZTAtNDI2MS1iMzlmLTZkNjYwMzBiMzU0Zi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Dpncm4PEyyma0CBCZcpVZ0Lm0YeMMKHnrxCu5RK9Nh0"){
        return "Steel"
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f23c48c4-218f-4490-a23d-551fbf5b3603/d6nca3w-39090ca4-f295-4432-b742-c48089abcfd1.png"){
        return "Fighting"
    }else if(type === "http://pm1.narvii.com/6369/f14d12472d3cddf98ec656ba88c9aed343459b59_00.jpg"){
        return "Psychic"
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4az-9be9ea46-fdf8-4e18-957e-9c7fcded42e5.png/v1/fill/w_720,h_720,strp/dark_energy_by_humac1_d50w4az-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGF6LTliZTllYTQ2LWZkZjgtNGUxOC05NTdlLTljN2ZjZGVkNDJlNS5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7GbSWxHrGsP-onFWhchqfZziYMeQ7tUS8kVNPSr2g54"){
        return "Dark"
    }else if(type === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aba1a756-d955-43f6-a2e9-5b7d60406854/d50w4gu-bcf44127-7bc3-468d-b148-1af8cf4e7ac0.png/v1/fill/w_720,h_720,strp/colorless_energy_by_humac1_d50w4gu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWJhMWE3NTYtZDk1NS00M2Y2LWEyZTktNWI3ZDYwNDA2ODU0XC9kNTB3NGd1LWJjZjQ0MTI3LTdiYzMtNDY4ZC1iMTQ4LTFhZjhjZjRlN2FjMC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I2hRnHXhqZrAh05uX4UyxVC8C-iVQrj00LWU7nvS9C8"){
        return "Colorless"
    }else{
        return ""
    }
}

function cardColor(type,){
    if(type === 'Electric'){
          '#fffc7b'
    }
}