export interface LibraryItem {
    id: number;
    title: string;
    author: string;
    year: string;
    isbn?: string;
    status: 'available' | 'out-of-print';
    source: string;
    type: 'book' | 'film' | 'ppt';
    description: string;
    link: string;
    duration?: string;
    slides?: string;
}

export interface LibraryData {
    [key: string]: LibraryItem[];
}

export const initialLibraryData: LibraryData = {
    imo: [
        {
            id: 1,
            title: "STCW Convention and Code",
            author: "International Maritime Organization",
            year: "2017",
            isbn: "978-92-801-1663-1",
            status: "available",
            source: "imo",
            type: "book",
            description: "Standar pelatihan, sertifikasi dan jaga laut internasional",
            link: "https://www.imo.org/en/Publications/Pages/Home.aspx"
        },
        {
            id: 2,
            title: "MARPOL Consolidated Edition",
            author: "International Maritime Organization",
            year: "2022",
            isbn: "978-92-801-1234-5",
            status: "available",
            source: "imo",
            type: "book",
            description: "Konvensi internasional untuk pencegahan polusi dari kapal",
            link: "https://www.imo.org/en/Publications/Pages/Home.aspx"
        }
    ],
    textbooks: [
        {
            id: 3,
            title: "Marine Engineering Principles",
            author: "Doug Woodyard",
            year: "2020",
            isbn: "978-0-08-102748-6",
            status: "available",
            source: "external",
            type: "book",
            description: "Prinsip-prinsip teknik kelautan modern",
            link: "https://www.elsevier.com"
        }
    ],
    bibliography: [
        {
            id: 4,
            title: "Ship Stability for Masters and Mates",
            author: "Bryan Barrass",
            year: "2019",
            isbn: "978-0-08-102784-4",
            status: "available",
            source: "external",
            type: "book",
            description: "Stabilitas kapal untuk nakhoda dan mualim",
            link: "https://www.elsevier.com"
        }
    ],
    external: [
        {
            id: 6,
            title: "Maritime Safety and Security Law",
            author: "Proshanto K. Mukherjee",
            year: "2021",
            isbn: "978-1-138-33445-2",
            status: "available",
            source: "external",
            type: "book",
            description: "Hukum keselamatan dan keamanan maritim",
            link: "https://www.routledge.com"
        },
        {
            id: 7,
            title: "Introduction to Naval Architecture",
            author: "E.C. Tupper",
            year: "2020",
            isbn: "978-0-08-098237-3",
            status: "available",
            source: "external",
            type: "book",
            description: "Pengantar arsitektur perkapalan",
            link: "https://www.elsevier.com"
        }
    ],
    internal: [
        {
            id: 5,
            title: "Panduan Praktikum Mesin Kapal",
            author: "Tim Dosen TKN SMKN 9 Pontianak",
            year: "2023",
            isbn: "978-602-1234-56-7",
            status: "available",
            source: "internal",
            type: "book",
            description: "Panduan praktikum khusus untuk siswa TKN",
            link: "#"
        }
    ],
    'film-imo': [
        {
            id: 101,
            title: "STCW Basic Safety Training",
            author: "International Maritime Organization",
            year: "2020",
            duration: "45 menit",
            status: "available",
            source: "imo",
            type: "film",
            description: "Video pelatihan keselamatan dasar sesuai standar STCW",
            link: "#"
        }
    ],
    'film-relevan': [
        {
            id: 201,
            title: "Modern Ship Engine Room",
            author: "Maritime Documentary",
            year: "2022",
            duration: "52 menit",
            status: "available",
            source: "external",
            type: "film",
            description: "Dokumenter tentang ruang mesin kapal modern",
            link: "#"
        }
    ],
    'ppt-tkn': [
        {
            id: 301,
            title: "Sistem Propulsi Kapal",
            author: "Tim Dosen TKN SMKN 9",
            year: "2024",
            slides: "45 slide",
            status: "available",
            source: "internal",
            type: "ppt",
            description: "Presentasi lengkap tentang sistem propulsi kapal niaga",
            link: "#"
        }
    ]
};

export const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
        imo: 'IMO References',
        textbooks: 'Textbooks',
        bibliography: 'Bibliography',
        external: 'External Relevan',
        internal: 'Buku Internal SMKN 9',
        'film-imo': 'Film IMO',
        'film-relevan': 'Film Relevan',
        'ppt-tkn': 'PPT TKN'
    };
    return names[category] || category;
};