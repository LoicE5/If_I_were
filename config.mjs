const config = {
    keyCodes: {
        left: 37,
        up: 38,
        right: 39,
        down: 40
    },
    defaultCameraPosition: {
        x: 0,
        y: 0,
        z: 21600
    },
    maxCameraDepht: 23400,
    minCameraDepht: 800,
    cameraDephtStep: 50,
    musicPlayerDephtInterval: [7500, 6500],
    futuraFontPath: 'fonts/futura.json',
    perspectiveCameraSettings:  {
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2600
    },
    scenePositions: [
        19450,
        16850,
        15050,
        12700,
        10650,
        8750,
        6950,
        4450
    ],
    particlesNumber: {
        min: 0,
        max: 23400
    },
    arrowsCameraDisplacementStep: 10,
    art: {
        text: [
            {
                color: "white",
                x: 0,
                y: 10,
                z: 20900,
                fontSize: 100,
                content: `If I were...`
            },
            {
                color: "orange",
                x: 0,
                y: -200,
                z: 20900,
                fontSize: 40,
                content: `Name Name`
            },
            {
                color: "white",
                x: 0,
                y: 300,
                z: 18750,
                fontSize: 80,
                content: `Introduction`
            },
            {
                color: "white",
                x: -300,
                y: 100,
                z: 18750,
                fontSize: 30,
                content: `This Chinese portrait aims to convey my personality and aspirations through various comparisons.\nThese comparisons take the form of 'if I were..., I would be...'\nI hope you'll enjoy going through it as much as I enjoyed creating it.`
            },
            {
                color: "white",
                x: 0,
                y: 300,
                z: 16150,
                fontSize: 80,
                content: `If I were a movie, I would be Avatar.`
            },
            {
                color: "white",
                x: 450,
                y: 150,
                z: 16150,
                fontSize: 30,
                content: `The plot of this movie immerses us in a parallel universe where humans are intruders in an extraterrestrial world.\nNot only was this choice against the cinematic ideals of the time, but it also proved to be successful.\nThis film represents my personal beliefs, such as the idea that sometimes going against the grain can lead to success.`
            },
            {
                color: "white",
                x: 0,
                y: 600,
                z: 13850,
                fontSize: 80,
                content: `If I were a video game character, I would be Giovanni.`
            },
            {
                color: "white",
                x: -750,
                y: 300,
                z: 13850,
                fontSize: 50,
                content: `An iconic character in the Pokémon series, Giovanni embodied evil in the early versions.\nBesides his often questionable beliefs, this character demonstrates leadership, versatility (due to his different roles), and pragmatism that doesn't confine him in his opinions.\nGiovanni has a personality that resonates with me, and he has untapped storytelling potential.`
            },
            {
                color: "white",
                x: 0,
                y: 400,
                z: 11850,
                fontSize: 80,
                content: `If I were a color, I would be blue.`
            },
            {
                color: "white",
                x: 500,
                y: 250,
                z: 11850,
                fontSize: 35,
                content: `A color representing nature and the planet, from the sky to the sea, it also symbolizes modernity and progress in my view.\nBlue, in its various shades, suits interfaces perfectly.\nIt can also be used in painting and decorative art.\nIt's no coincidence that it's found on the French and European flags.`
            },
            {
                color: "white",
                x: 0,
                y: 400,
                z: 9800,
                fontSize: 80,
                content: `If I were a country, I would be Singapore.`
            },
            {
                color: "white",
                x: -525,
                y: 200,
                z: 9700,
                fontSize: 37,
                content: `A city-state with the significant qualities of a flourishing economy, impeccable streets and buildings, and an extremely low crime rate.\nThis is made possible through the state's commitment to ensuring economic prosperity through ambitious positions in global markets and protecting its population by enforcing strict rules.\nAlthough this country may not be for everyone, it represents to me an image of a safe and prosperous nation, which is why I included it in this Chinese portrait.`
            },
            {
                color: "white",
                x: 0,
                y: 500,
                z: 7750,
                fontSize: 80,
                content: `If I were a company, I would be Coinbase Ltd.`
            },
            {
                color: "white",
                x: -700,
                y: 400,
                z: 7500,
                fontSize: 53,
                content: `A pioneer and leader in the exchange of virtual assets, Coinbase aims to radically change the global economic model by positioning itself as a major player in blockchain evolution.\nThe goals, convictions, and aspirations of this company align with my personal beliefs regarding a more free, independent, and just economy for all.\nIn the long run, Coinbase aims for the democratization of virtual assets and their use beyond speculation, an objective I strongly endorse.`
            },
            {
                color: "white",
                x: 0,
                y: 750,
                z: 5500,
                fontSize: 80,
                content: `If I were a piece of music, I would be Shoot To Thrill by AC/DC.`
            },
            {
                color: "white",
                x: 700,
                y: 400,
                z: 5500,
                fontSize: 56,
                content: `This piece has the particularity of offering a fast-paced rhythm and an intense musical ambiance.\nIn my opinion, this music piece reflects an individual's determination to succeed, become better, and win, no matter the cost.\nI find this piece highly evocative, creating an atmosphere where nothing is impossible, and perseverance pays off.\nMoreover, the rhythm is well managed, the lyrics are effective and match the overall ambiance.\nI appreciate this piece because it motivates me in most of my work.\nThat's why it's included in this Chinese portrait.`
            },
            {
                color: "white",
                x: 0,
                y: 450,
                z: 3500,
                fontSize: 80,
                content: `If I were a tool, I would be a Swiss knife.`
            },
            {
                color: "white",
                x: -550,
                y: 250,
                z: 3500,
                fontSize: 40,
                content: `An allegory of versatility and an analogy that aligns perfectly with the MMI spirit, the Swiss knife aims to be versatile, addressing a multitude of issues.\nA Swiss knife has the significant advantage of bringing together a range of functions into a single tool, quickly making it indispensable.\nI personally aspire to acquire this versatility, becoming a true Swiss knife capable of efficiently solving a wide range of problems.`
            }
        ]
        
    }
}

export default config