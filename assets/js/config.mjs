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
    futuraFontPath: 'assets/fonts/futura.json',
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
    particlesDepht: {
        min: 0,
        max: 23400
    },
    particlesAmount: 1500,
    arrowsCameraDisplacementStep: 10,
    art: {
        text: [
            {
                color: "white",
                x: 0,
                y: 10,
                z: 20900,
                fontSize: 100,
                content: `If I were...\n`
            },
            {
                color: "orange",
                x: 0,
                y: -200,
                z: 20900,
                fontSize: 40,
                content: `Loïc Etienne\n`
            },
            {
                color: "white",
                x: 0,
                y: 300,
                z: 18750,
                fontSize: 80,
                content: `Introduction\n`
            },
            {
                color: "white",
                x: -300,
                y: 100,
                z: 18750,
                fontSize: 30,
                content: `This project aims to convey \nmy personality and aspirations through \nvarious comparisons.\nThese comparisons take the form of \n'if I were..., I would be...'. I hope you'll enjoy \ngoing through it as much as I enjoyed creating it.\n`
            },
            {
                color: "white",
                x: 0,
                y: 300,
                z: 16150,
                fontSize: 70,
                content: `If I were a movie, I would be Avatar.\n`
            },
            {
                color: "white",
                x: 450,
                y: 150,
                z: 16150,
                fontSize: 30,
                content: `The plot of this movie \nimmerses us in a parallel universe \nwhere humans are intruders in an \nextraterrestrial world.\nNot only was this choice \nagainst the cinematic ideals of the time, \nbut it also proved to be successful.\nThis film represents my \npersonal beliefs, such as the idea \nthat sometimes going against the \ngrain can lead to success.\n`
            },
            {
                color: "white",
                x: 0,
                y: 600,
                z: 13850,
                fontSize: 80,
                content: `If I were a video game character, I would be Giovanni.\n`
            },
            {
                color: "white",
                x: -750,
                y: 300,
                z: 13850,
                fontSize: 50,
                content: `An iconic character in the Pokémon \nseries, Giovanni embodied evil in \nthe early versions.\nBesides his often questionable beliefs, \nthis character demonstrates leadership, \nversatility (due to his different roles), \nand pragmatism that doesn't confine \nhim in his opinions.\nGiovanni has a personality that \nresonates with me, and he has untapped \nstorytelling potential.\n`
            },
            {
                color: "white",
                x: 0,
                y: 400,
                z: 11850,
                fontSize: 80,
                content: `If I were a color, I would be blue.\n`
            },
            {
                color: "white",
                x: 500,
                y: 250,
                z: 11850,
                fontSize: 35,
                content: `A color representing nature and \nthe planet, from the sky to \nthe sea, it also symbolizes \nmodernity and progress in my view.\nBlue, in its various shades, \nsuits interfaces perfectly.\nIt can also be used in painting \nand decorative art.\nIt's no coincidence that it's found \non many countries flags.\n`
            },
            {
                color: "white",
                x: 0,
                y: 400,
                z: 9800,
                fontSize: 70,
                content: `If I were a country, I would be Singapore.\n`
            },
            {
                color: "white",
                x: -525,
                y: 200,
                z: 9700,
                fontSize: 37,
                content: `A city-state with the significant qualities \nof a flourishing economy, impeccable \nstreets and buildings, and an extremely \nlow crime rate. This is made possible \nthrough the state's commitment to ensuring \neconomic prosperity through ambitious \npositions in global markets and protecting its \npopulation by enforcing strict rules.\nAlthough this country may not be for everyone, \nit represents to me an image of a safe and \nprosperous nation, which is why \nI included it in this project.\n`
            },
            {
                color: "white",
                x: 0,
                y: 500,
                z: 7750,
                fontSize: 80,
                content: `If I were a company, I would be Coinbase.\n`
            },
            {
                color: "white",
                x: -700,
                y: 400,
                z: 7500,
                fontSize: 53,
                content: `A pioneer and leader \nin the exchange of virtual assets, \nCoinbase aims to radically change the global \neconomic model by positioning itself \nas a major player in blockchain evolution.\nThe goals, convictions, and aspirations \nof this company align with my \npersonal beliefs regarding a more \nfree, independent, and fair economy for all.\nIn the long run, Coinbase aims for \nthe democratization of virtual assets and \ntheir use beyond speculation, \na goal I strongly endorse.\n`
            },
            {
                color: "white",
                x: 0,
                y: 750,
                z: 5500,
                fontSize: 80,
                content: `If I were a song, I would be Shoot To Thrill by AC/DC.\n`
            },
            {
                color: "white",
                x: 700,
                y: 400,
                z: 5500,
                fontSize: 56,
                content: `This song has the particularity of offering a \nfast-paced rhythm and an intense musical ambiance.\nIn my opinion, this song reflects an \nindividual's determination to succeed, become better, \nand win, no matter the cost.\nI find this piece highly evocative, \ncreating an atmosphere where nothing is impossible, \nand perseverance pays off.\nMoreover, the rhythm is well managed, \nthe lyrics are effective and match the overall ambiance.\nI appreciate this song because it \nmotivates me in most of my work.\nThat's why it's included in this project.\n`
            },
            {
                color: "white",
                x: 0,
                y: 450,
                z: 3500,
                fontSize: 80,
                content: `If I were a tool, I would be a Swiss knife.\n`
            },
            {
                color: "white",
                x: -550,
                y: 250,
                z: 3500,
                fontSize: 40,
                content: `An allegory of versatility that aligns great \nwith my ambition, the Swiss knife \naims to be versatile, addressing a vast array \nof issues.A Swiss knife has the \nsignificant advantage of bringing together \na range of functions into a single tool, quickly \nmaking it indispensable. I aim \nto this versatility, capable of efficiently solving \na wide range of challenges.\n`
            }
        ],
        images: [
            {
                path: 'assets/media/images/singapore_1_opti.jpg',
                width: 576,
                height: 360,
                scale: 1,
                x: 550,
                y: -200,
                z: 18740
            },
            {
                path: 'assets/media/images/avatar_1_opti.jpg',
                width: 384,
                height: 216,
                scale: 1,
                x: 300,
                y: 50,
                z: 18850
            },
            {
                path: 'assets/media/images/avatar_2_opti.jpg',
                width: 1280,
                height: 720,
                scale: 0.36,
                x: -220,
                y: -50,
                z: 16450
            },
            {
                path: 'assets/media/images/giovanni_1_opti.jpg',
                width: 604,
                height: 340,
                scale: 2,
                x: 700,
                y: -100,
                z: 13900
            },
            {
                path: 'assets/media/images/blue_1_opti.jpg',
                width: 768,
                height: 576,
                scale: 1,
                x: -400,
                y: -70,
                z: 11999
            },
            {
                path: 'assets/media/images/singapore_2_opti.jpg',
                width: 912,
                height: 593,
                scale: 1,
                x: 575,
                y: -100,
                z: 9800
            },
            {
                path: 'assets/media/images/coinbase_1_opti.jpg',
                width: 678,
                height: 356,
                scale: 2,
                x: 875,
                y: -100,
                z: 7500
            },
            {
                path: 'assets/media/images/ACDC_1_opti.jpg',
                width: 640,
                height: 640,
                scale: 1.5,
                x: -1000,
                y: 100,
                z: 5500
            },
            {
                path: 'assets/media/images/swiss_knife_1_opti.jpg',
                width: 807,
                height: 675,
                scale: 0.8,
                x: 450,
                y: -80,
                z: 3750
            }
        ]
    },
    navButtons: [
        {
            targetZPos: 21600,
            imgPath: 'assets/media/icons/home.png',
            alt: 'Title'
        },
        {
            targetZPos: 19450,
            imgPath: 'assets/media/icons/intro.png',
            alt: 'Introduction'
        },
        {
            targetZPos: 16850,
            imgPath: 'assets/media/icons/movie.png',
            alt: 'If I were a movie...'
        },
        {
            targetZPos: 15050,
            imgPath: 'assets/media/icons/game.png',
            alt: 'If I were a video game character...'
        },
        {
            targetZPos: 12700,
            imgPath: 'assets/media/icons/color.png',
            alt: 'If I were a color...'
        },
        {
            targetZPos: 10650,
            imgPath: 'assets/media/icons/country.png',
            alt: 'If I were a country...'
        },
        {
            targetZPos: 8750,
            imgPath: 'assets/media/icons/company.png',
            alt: 'If I were a company...'
        },
        {
            targetZPos: 6950,
            imgPath: 'assets/media/icons/music.png',
            alt: 'If I were a piece of music...'
        },
        {
            targetZPos: 4450,
            imgPath: 'assets/media/icons/tool.png',
            alt: 'If I were a tool...'
        }
    ]
}

export default config