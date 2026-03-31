const { Game } = require("../models");

const seedGames = async () => {
    const games = [
        // 🏆 SPORTS
        { title: "FIFA 24", genre: "Sports", rating: 4.8, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg" },
        { title: "Dream League Soccer 2025", genre: "Sports", rating: 4.5, coverUrl: "https://play-lh.googleusercontent.com/HAdL4dVRB5O6tMbyGgn0rhc4HnVRHcQ97dRJ-4J0a6sy3yphTvfaHZ2Zn9xIxzUrM5Q=w480-h960-rw" },
        { title: "PES 2021", genre: "Sports", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/header.jpg" },
        { title: "NBA 2K24", genre: "Sports", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/header.jpg" },
        { title: "Madden NFL 24", genre: "Sports", rating: 4.4, coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Madden_NFL_24_Cover.jpeg" },
        { title: "Tennis World Tour 2", genre: "Sports", rating: 4.1, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1204350/header.jpg" },
        { title: "Cricket 24", genre: "Sports", rating: 4.3, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2373730/header.jpg" },
        { title: "Golf With Your Friends", genre: "Sports", rating: 4.2, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/431240/header.jpg" },

        // 💥 ACTION
        { title: "GTA V", genre: "Action", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg" },
        { title: "Red Dead Redemption 2", genre: "Action", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg" },
        { title: "Assassin’s Creed Valhalla", genre: "Action", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg" },
        { title: "God of War", genre: "Action", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg" },
        { title: "Marvel’s Spider-Man", genre: "Action", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg" },
        { title: "Batman: Arkham Knight", genre: "Action", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg" },
        { title: "Uncharted 4", genre: "Action", rating: 4.8, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header.jpg" },
        { title: "Shadow of the Tomb Raider", genre: "Action", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg" },

        // 🎯 SHOO
        { title: "Call of Duty: Warzone", genre: "Shooter", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg" },
        { title: "PUBG Battlegrounds", genre: "Shooter", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg" },
        { title: "CS:GO 2", genre: "Shooter", rating: 4.8, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg" },
        { title: "Valorant", genre: "Shooter", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2239540/header.jpg" },
        { title: "Overwatch 2", genre: "Shooter", rating: 4.4, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg" },
        { title: "Battlefield V", genre: "Shooter", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg" },
        { title: "Far Cry 6", genre: "Shooter", rating: 4.4, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/939960/header.jpg" },
        { title: "Apex Legends", genre: "Shooter", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg" },

        // 🌍 ADVENTURE
        { title: "Minecraft", genre: "Adventure", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg" },
        { title: "The Legend of Zelda: TOTK", genre: "Adventure", rating: 4.9, coverUrl: "https://assets-prd.ignimgs.com/2022/09/13/zelda-tears-of-the-kingdom-button-1663088444048.jpg" },
        { title: "Hogwarts Legacy", genre: "Adventure", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg" },
        { title: "The Witcher 3", genre: "Adventure", rating: 4.9, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg" },
        { title: "Life is Strange", genre: "Adventure", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/319630/header.jpg" },
        { title: "Subnautica", genre: "Adventure", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg" },
        { title: "No Man’s Sky", genre: "Adventure", rating: 4.4, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header.jpg" },

        // 🚗 RACING
        { title: "Forza Horizon 5", genre: "Racing", rating: 4.8, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg" },
        { title: "Need for Speed: Heat", genre: "Racing", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg" },
        { title: "F1 23", genre: "Racing", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2108330/header.jpg" },
        { title: "The Crew Motorfest", genre: "Racing", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg" },
        { title: "Gran Turismo 7", genre: "Racing", rating: 4.8, coverUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2906/MYx4nDBgN3Mekqpo3MKkCnD5.png" },
        { title: "MotoGP 24", genre: "Racing", rating: 4.3, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2634900/header.jpg" },

        // 🧠 STRATEGY / SIMULATION
        { title: "The Sims 4", genre: "Simulation", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg" },
        { title: "Cities: Skylines II", genre: "Simulation", rating: 4.4, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/949230/header.jpg" },
        { title: "Football Manager 2025", genre: "Simulation", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/3105600/header.jpg" },
        { title: "Microsoft Flight Simulator", genre: "Simulation", rating: 4.8, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg" },
        { title: "Age of Empires IV", genre: "Strategy", rating: 4.6, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg" },
        { title: "Clash of Clans", genre: "Strategy", rating: 4.7, coverUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/88/8b/b2/888bb27e-8e27-c066-bf1f-5d14c85d4b6c/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" },
        { title: "Clash Royale", genre: "Strategy", rating: 4.6, coverUrl: "https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/05/ae/d8/05aed882-2cf7-0cb4-d1d5-47e17734c0f9/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" },
        { title: "Plague Inc", genre: "Strategy", rating: 4.3, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/246620/header.jpg" },
        { title: "Hearts of Iron IV", genre: "Strategy", rating: 4.5, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg" },
        { title: "Civilization VI", genre: "Strategy", rating: 4.7, coverUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg" },
    ];

    try {
        await Game.bulkCreate(games);
        console.log("✅ 50 Games seeded successfully!");
    } catch (error) {
        console.error("❌ Error seeding games:", error.message || error);
    }
};

seedGames();
