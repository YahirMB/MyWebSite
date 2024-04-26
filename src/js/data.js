export const projectsListData = [
    {
        id: 1,
        name: 'DailyPlan',
        multiplatform: "mobil",
        description: `Es una aplicación que desarrollé como pasatiempo y 
        para repasar los conocimientos adquiridos en cursos previos. 
        La aplicación consiste en un bloc de notas o agenda que facilita 
        recordar eventos o fechas importantes.`,
        startDate: '15/09/2023',
        endDate: '10/01/2024',
        linkVideo: '',
        logoUrl: "./resources/png/logo_dailyplan.png",
        monologoUrl: './resources/logos/monologo_dailyplan.png',
        technologiesUsed: [
            'React-native',
            'Typescript',
            'Context',
            'NodeJs',
            'MySQL',
            'AtomicDesign',
            'Express',
        ],
        screenshotList: [
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_1.jpg",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_2.jpg",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_3.jpg",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_4.jpg",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_5.jpg",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/dailyPlan/dailypla_6.jpg",
                deviceSize: "mobile",
            },
        ]
    },
    {
        id: 2,
        name: 'Cafe-uta',
        multiplatform: "desktop",
        description: `En este proyecto se desarrolló una aplicación web tipo punto de venta, 
        que permite realizar compras, además de ofrecer funcionalidades administrativas para el 
        control de productos y el seguimiento de ganancias.
        `,
        startDate: '04/05/2023',
        endDate: '20/08/2023',
        linkVideo: 'https://www.youtube.com/watch?v=LZR2bQYWwyk',
        logoUrl: "./resources/png/logo_cafeUta.png",
        monologoUrl: './resources/logos/monologo_cafeuta.png',
        technologiesUsed: [
            'Reactjs',
            'Javascript',
            'Redux',
            'C#',
            '.Net',
            'Entity-framework',
            'Style-components',
            'SQL server',
        ],
        screenshotList: []
    },
    {
        id: 3,
        name: 'AWLGroup',
        multiplatform: "desktop",
        description: `Durante mis prácticas profesionales, desarrollé una aplicación de escritorio utilizando el lenguaje Java y NetBeans. 
        Esta aplicación tenía como objetivo gestionar y controlar los 
        registros de aduanas para los clientes dentro del ámbito logístico. `,
        startDate: '04/09/2022',
        endDate: '20/12/2022',
        linkVideo: 'https://youtu.be/jdYj8Slm3D4',
        logoUrl: './resources/png/awlgroup.png',
        monologoUrl: './resources/logos/monologo_awlgroup.png',
        technologiesUsed: [
            'Java',
            'NetBeans',
            'MySQL',
        ],
        screenshotList: [
            {
                imageUrl: "./resources/projects/awlgroup/AWLGroup_5.bmp",
                deviceSize: "desktop",
            },
            {
                imageUrl: "./resources/projects/awlgroup/AWLGroup_4.bmp",
                deviceSize: "desktop",
            },
            {
                imageUrl: "./resources/projects/awlgroup/AWLGroup_3.bmp",
                deviceSize: "desktop",
            },
            {
                imageUrl: "./resources/projects/awlgroup/AWLGroup_1.png",
                deviceSize: "desktop",
            },
            {
                imageUrl: "./resources/projects/awlgroup/AWLGroup_2.bmp",
                deviceSize: "desktop",
            },
        ]
    },
    {
        id: 4,
        name: 'WorldShoes',
        multiplatform: "mobil",
        description: `World-shoes fue un proyecto colaborativo que desarrollé con otros dos compañeros. 
        Este proyecto consistió en un tipo de plataforma de comercio electrónico (E-commerce), 
        donde implementamos operaciones CRUD (Crear, Leer, Actualizar y Borrar) para registrar productos y permitir a los usuarios comprarlos.`,
        startDate: '04/05/2022',
        endDate: '20/08/2022',
        linkVideo: '',
        logoUrl: "./resources/png/logo_worldshoes.png",
        monologoUrl: './resources/logos/monologo_worldshoes.png',
        technologiesUsed: [
            'Angular',
            'MongoDB',
            'Typescript',
            'Nodejs',
            'Express',
        ],
        screenshotList: [
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_1.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_2.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_3.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_4.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_5.png",
                deviceSize: "mobile",
            },
            {
                imageUrl: "./resources/projects/WordlShoesImages/mobile_6.png",
                deviceSize: "mobile",
            },
        ]
    }
]

export const experienceData = [
    { name: 'React', valueExperience: 50, color: '#007bff' },
    { name: 'JavaScript', valueExperience: 50, color: '#fff500' },
    { name: 'TypeScript', valueExperience: 50, color: '#0039ff' },
    { name: 'Angular', valueExperience: 10, color: '#ff0000' },
    { name: 'Mysql', valueExperience: 20, color: '#ff8d00' },
    { name: 'Nodejs', valueExperience: 25, color: '#04ff00' },
    { name: 'HTML', valueExperience: 50, color: '#ff0000' },
    { name: 'CSS', valueExperience: 50, color: '#007bff' },
    { name: 'Docker', valueExperience: 20, color: '#0039ff' },
]

export const jobs = [
    {
        position: 'Desarrollador web', company: 'Softwaria', startDate: 'Enero 2023', endDate: 'Febrebro 2024',
        description: `Estuve involucrado en el diseño y maquetado de páginas y aplicaciones web, 
        así como en el consumo de APIs, 
        mantenimiento de software y la implementación de diseño responsive. En un proyecto específico, 
        desarrollé componentes utilizando React y trabajé en el consumo de APIs. En otro proyecto, utilicé ASP.Net 
        y Razor para llevar a cabo tareas similares.`
    },
    {
        position: 'Desarrollador fullstack', company: 'AWLGroup', startDate: 'Mayo 2022', endDate: 'Agosto 2022',
        description: `En mi experiencia laboral en esta empresa, me encargaba de 
        llevar a cabo todas las actividades necesarias para completar el proyecto de 
        estadías. Utilicé el lenguaje Java en conjunto con NetBeans y otras bibliotecas. 
        Aplicaba mis conocimientos en la adquisición de requerimientos para el proyecto, elaboraba prototipos, 
        realizaba pruebas documentadas y preparaba la documentación del usuario, entre otras responsabilidades.`
    },
]

export const educations = [
    { title: 'Ing. Desarrollo y gestión de software', description: '', startDate: 'Septiembre 2022', endDate: 'Abril 2024', instituteName: 'Universidad Tecnológica de Aguascalientes', courseUrl: '', certificateUrl: '' },
    { title: 'TSU.Tecnologías de la información', description: '', startDate: 'Septiembre 2020', endDate: 'Agosto 2022', instituteName: 'Universidad Tecnológica de Aguascalientes', courseUrl: '', certificateUrl: '' },
    { title: 'Javascript Moderno:Guía para dominar el lenguaje', description: '', startDate: 'Agosto 2022', endDate: 'Septiembre 2022', instituteName: 'Udemy', courseUrl: 'https://www.udemy.com/course/javascript-fernando-herrera/', certificateUrl: '' },
    { title: 'React Native:Aplicaciones nativas para IOS y Android', description: '', startDate: 'Marzo 2023', endDate: 'Octubre 2023', instituteName: 'Udemy', courseUrl: 'https://www.udemy.com/course/react-native-fh/', certificateUrl: '' },
    { title: 'React:De cero a experto(Hooks y MERN)', description: '', startDate: 'Abril 2022 ', endDate: 'Marzo 2022', instituteName: 'Udemy', courseUrl: 'https://www.udemy.com/course/react-cero-experto/', certificateUrl: '' },
    { title: 'Docker, de principiante a experto', description: '', startDate: 'Agosto 2023', endDate: 'Marzo 2024', instituteName: 'Udemy', courseUrl: 'https://www.udemy.com/course/docker-de-principiante-a-experto/?couponCode=GENAISALE24', certificateUrl: '' },
    { title: 'Tailwind', description: '', startDate: 'Enero 2023', endDate: 'Enero 2023', instituteName: 'Platzi', courseUrl: 'https://platzi.com/cursos/tailwind/', certificateUrl: '' },
]