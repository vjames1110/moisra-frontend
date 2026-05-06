// import { FaLaptopCode } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FaTruck } from "react-icons/fa";
// import { FaHardHat } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { FaIndustry } from "react-icons/fa";
// import { FaCogs } from "react-icons/fa";

const servicesData = [
    {
        uid: "srv-001",
        id: "it-solutions",
        title: "IT Solutions",
        icon: "FaLaptopCode",
        shortDescription: "Comprehensive IT services for industrial and construction sectors.",
        description: "End-to-end IT consultancy and digital transformation services.",
        sections: [
            {
                id: "development",
                title: "Development",
                items: [
                    {
                        name: "Web Development",
                        slug: "web-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981805/web-development_cvhktg.jpg",
                        description: "Custom Websites, enterprise portals, Ecommerce websites and more"
                    },
                    {
                        name: "App Development",
                        slug: "app-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981805/app-development_tzxrzg.jpg",
                        description: "Build powerful, user-friendly mobile apps tailored to your business goals-designed for performance, scalability and exceptional user experience across Android and IOS platform."
                    },
                    {
                        name: "Software Development",
                        slug: "software-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981806/software-development_fwuwos.jpg",
                        description: "Custom software solutions, engineered to streamline operations, boost productivity, and scale your business."
                    },
                    {
                        name: "ERP Development",
                        slug: "erp-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981805/erp-development_rdkxhf.jpg",
                        description: "Smart Enterprise Resource Planning solutions that unify your operations, automate workflows, and provide real-time business insights-helping you manage, smarter, faster, and more efficiently."
                    },
                    {
                        name: "HR & Admin IT Solutions",
                        slug: "hr-admin-it-solutions",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981806/hr-it_mcnfpx.jpg",
                        description: "Advanced HR & IT solutions that simplify workforce management, automate daily operations, and enhance organizational efficiency-enabling smarter people management and seamless business control."
                    }
                ]
            },
            {
                id: "erp-solutions",
                title: "ERP Solutions",
                items: [
                    {
                        name: "SAP",
                        slug: "sap",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980846/sap_jbhtqi.png",
                        description: "Expert SAP solutions for seamless business integration, process automation, and data-driven decision-making—empowering enterprises with smarter, faster, and scalable operations."
                    },
                    {
                        name: "Tally ERP",
                        slug: "tally-erp",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980846/tallyerp_ybaz51.png",
                        description: "Efficient Tally.ERP solutions for accounting, inventory, taxation, and business management—ensuring accuracy, compliance, and complete financial control with ease."
                    },
                    {
                        name: "ERP",
                        slug: "erp",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980845/erp_hjrgyl.png",
                        description: "Integrated Enterprise Resource Planning solutions that connect finance, operations, inventory, and workflows in one powerful system—driving efficiency, visibility, and smarter business growth."
                    },
                    {
                        name: "ERP Training",
                        slug: "erp-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980846/erp-training_plmtfq.png",
                        description: "Hands-on Enterprise Resource Planning training designed to build real-world expertise in business processes, system operations, and industry-ready skills for career growth."
                    }
                ]
            },
            {
                id: "planning-strategy",
                title: "Planning & Strategy",
                items: [
                    {
                        name: "Primavera",
                        slug: "primavera",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980927/primavera_xpxxmx.png",
                        description: "Professional Oracle Primavera solutions for project planning, scheduling, resource management, and cost control—helping you deliver complex projects on time and within budget."
                    },
                    {
                        name: "MSP",
                        slug: "msp",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980926/msp_dqf2q3.png",
                        description: "Expert Microsoft Project solutions for project planning, scheduling, resource allocation, and progress tracking—ensuring organized execution, timely delivery, and better project control."
                    },
                    {
                        name: "PROCORE",
                        slug: "procore",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980927/procore_mno2wk.png",
                        description: "Smart Procore solutions for construction planning, collaboration, document control, and real-time project tracking—keeping teams connected and projects moving efficiently from start to finish."
                    },
                    {
                        name: "Weighbridge Calibration",
                        slug: "weighbridge-calibration",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980928/weighbridge-callibration_zuoa0l.png",
                        description: "Precision weighbridge calibration services ensuring accurate measurements, regulatory compliance, and reliable performance—minimizing errors, preventing losses, and keeping your operations running with confidence."
                    },
                ]
            },
            {
                id: "3d-design",
                title: "3D Designing",
                items: [
                    {
                        name: "AutoCAD",
                        slug: "autocad",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980789/autocad_vshbc1.png",
                        description: "Professional AutoCAD solutions for precise drafting, 2D/3D design, and technical documentation—turning concepts into accurate, industry-ready engineering designs."
                    },
                    {
                        name: "BIM360",
                        slug: "bim360",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980861/bim-360_t6edi7.png",
                        description: "Advanced Autodesk BIM 360 solutions for collaborative design, document management, and real-time project coordination—connecting teams, reducing errors, and delivering smarter construction outcomes."
                    },
                    {
                        name: "Staad",
                        slug: "staad",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980861/staad_pmasj0.png",
                        description: "Expert STAAD.Pro solutions for structural analysis, design optimization, and engineering accuracy—helping you build safer, stronger, and more reliable infrastructure projects."
                    },
                ]
            },
            {
                id: "performance-analytics",
                title: "Performance & Analytics",
                items: [
                    {
                        name: "Data Analytics",
                        slug: "data-analytics",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980917/data-analytics_aiitaz.png",
                        description: "Powerful Data Analysis solutions that transform raw data into actionable insights—helping businesses make smarter decisions, optimize performance, and drive sustainable growth."
                    },
                    {
                        name: "Business Intelligence",
                        slug: "business-intelligence",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777980916/business-analytics_xvwh6b.png",
                        description: "Strategic Business Analysis solutions that turn business challenges into growth opportunities—optimizing processes, improving decisions, and driving measurable results."
                    },
                ]
            }
        ]
    },
    {
        uid: "srv-002",
        id: "workforce-solutions",
        title: "Workforce Solutions",
        icon: "FaUsers",
        shortDescription: "Comprehensive workforce solutions for industrial and construction sectors.",
        description: "Manpower supply, training, and placement services.",
        sections: [
            {
                id: "work-manpower",
                title: "Manpower Supply",
                items: [
                    {
                        name: "Skilled Labour",
                        slug: "skilled-labour",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053015/skilled-labour_ujifxq.png",
                        description: "Reliable skilled workforce solutions providing trained professionals across multiple industries—ensuring quality workmanship, operational efficiency, and timely project execution with confidence."
                    },
                    {
                        name: "Unskilled Labour",
                        slug: "unskilled-labour",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053017/un-skilled-labour_ygrzhi.png",
                        description: "Dependable manpower solutions with readily available workforce support for operational, construction, and industrial needs—ensuring smooth execution, flexibility, and productivity at every stage."
                    },
                    {
                        name: "Contract Staffing",
                        slug: "contract-staffing",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053014/contract-staffing_le8in1.png",
                        description: "Flexible contract staffing solutions that connect your business with the right talent, right when you need it—reducing hiring time, optimizing costs, and powering projects with skilled professionals."
                    },
                    { name: "Permanent Staffing", slug: "permanent-staffing" },
                ]
            },
            {
                id: "work-training",
                title: "Training Programs",
                items: [
                    {
                        name: "Technical Training",
                        slug: "technical-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053030/technical-training_fkhr7u.png",
                        description: "Industry-focused technical training programs designed to build practical skills, enhance expertise, and prepare professionals for real-world challenges in today’s evolving technology landscape."
                    },
                    {
                        name: "Safety Training",
                        slug: "safety-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053030/safety-training_d1x8nv.png",
                        description: "Professional safety training programs designed to build a strong safety culture, reduce workplace risks, and ensure compliance—empowering teams to work confidently, responsibly, and safely."
                    },
                    {
                        name: "Industrial Training",
                        slug: "industrial-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053029/industrial-training_fm3dpi.png",
                        description: "Hands-on industrial training programs designed to bridge the gap between theory and real-world application—building practical expertise, industry readiness, and career-focused technical skills."
                    },
                    {
                        name: "Executive Development",
                        slug: "executive-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053028/executive-development_bcqeco.png",
                        description: "Strategic executive development programs designed to strengthen leadership, enhance decision-making, and build high-impact professionals—empowering leaders to drive innovation, performance, and business success."
                    },
                    {
                        name: "Soft Skills Training",
                        slug: "soft-skills-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053030/softskill-training_equnsu.png",
                        description: "Professional soft skills training designed to enhance communication, leadership, teamwork, and confidence—helping individuals grow personally, perform professionally, and lead with impact."
                    },
                    {
                        name: "HR & Administration Training",
                        slug: "hr-administration-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053029/hr-administration-training_fwjre6.png",
                        description: "Professional soft skills training designed to enhance communication, leadership, teamwork, and confidence—helping individuals grow personally, perform professionally, and lead with impact."
                    },
                    {
                        name: "Leadership Development",
                        slug: "leadership-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053029/leadership-development_zlflv4.png",
                        description: "Transformative leadership development programs designed to build vision, confidence, and strategic thinking—empowering professionals to inspire teams, drive change, and achieve lasting success."
                    },
                    {
                        name: "Project Management Training",
                        slug: "project-management-training",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053029/project-management-training_f5kypa.png",
                        description: "Industry-focused project management training designed to master planning, execution, resource management, and risk control—building the skills to deliver projects on time, within scope, and with confidence."
                    }
                ]
            },
            {
                id: "job-placement",
                title: "Job Placement",
                items: [
                    {
                        name: "Placement",
                        slug: "placement",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778052999/placement_khuoy1.png",
                        description: "Career-focused job placement solutions that connect talent with the right opportunities—bridging skills with industry needs and helping professionals build successful, future-ready careers."
                    },
                    {
                        name: "Campus Recruitment",
                        slug: "campus-recruitment",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778053000/campus-recruitment_ew885n.png",
                        description: "Smart campus recruitment solutions that connect organizations with emerging talent—streamlining hiring, identifying high-potential candidates, and building tomorrow’s workforce today."
                    },
                    {
                        name: "Resume Building",
                        slug: "resume-building",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1778052999/resume-building_ma1uuf.png",
                        descripiton: "Professional resume-building services designed to showcase your strengths, highlight your achievements, and create a powerful first impression—helping you stand out in today’s competitive job market." },
                ]
            },
        ]
    },
    {
        uid: "srv-003",
        id: "machinery-equipment",
        title: "Machinery & Equipment",
        icon: "FaTruck",
        shortDescription: "Comprehensive machinery and equipment services for industrial and construction sectors.",
        description: "Rental, maintenance and sale of construction machinery.",
        sections: [
            {
                id: "machinery-maintenance",
                title: "Machinery Maintenance",
                items: [
                    { name: "HMV Maintenance", slug: "hmV-maintenance" },
                    { name: "LMV Maintenance", slug: "lmv-maintenance" },
                    { name: "Plant & Crusher Maintenance", slug: "plant-crusher-maintenance" },
                ]
            },
            {
                id: "machine-rental",
                title: "Machine Rental",
                items: [
                    { name: "HMV Rental", slug: "hmv-rental" },
                    { name: "LMV Rental", slug: "lmv-rental" },
                    { name: "Plant & Crusher Rental", slug: "plant-crusher-rental" },
                    { name: "Equipment Rental", slug: "equipment-rental" },
                ]
            },
            {
                id: "machine-sales",
                title: "Machine Sales & Purchase",
                items: [
                    { name: "Old Machine Sales", slug: "old-machine-sales" },
                    { name: "Old Machine Purchase", slug: "old-machine-purchase" },
                    { name: "New Machine Purchase", slug: "new-machine-purchase" },
                ]
            },
        ]
    },
    {
        uid: "srv-004",
        id: "civil-construction",
        title: "Civil & Construction",
        icon: "FaHardHat",
        shortDescription: "Complete civil construction and infrastructure solutions.",
        description: "Complete civil construction and infrastructure solutions.",
        sections: [
            {
                id: "sub-contracting",
                title: "Sub-Contracting",
                items: [
                    { name: "B2B", slug: "b2b" },
                    { name: "B2C", slug: "b2c" },
                ]
            },
            {
                id: "construction-work",
                title: "Construction Work",
                items: [
                    { name: "Building Construction", slug: "building-construction" },
                    { name: "Civil Construction", slug: "civil-construction" },
                    { name: "Road Construction", slug: "road-construction" },
                    { name: "Bridge Construction", slug: "bridge-construction" },
                    { name: "Infrastructure Development", slug: "infrastructure-development" },
                ]
            },
            {
                id: "miscellaneous-work",
                title: "Miscellaneous Work",
                items: [
                    { name: "Bitumen Work", slug: "bitumen-work" },
                    { name: "Crushing & Screening", slug: "crushing-screening" },
                    { name: "Earth Work", slug: "earth-work" },
                    { name: "Electrical Work", slug: "electrical-work" },
                    { name: "Fabrication Work", slug: "fabrication-work" },
                    { name: "Interior Work", slug: "interior-work" },
                    { name: "Plumbing Work", slug: "plumbing-work" },
                    { name: "Road Marking", slug: "road-marking" },
                    { name: "P-Way Work", slug: "p-way-work" },
                ]
            },
        ]
    },
    {
        uid: "srv-005",
        id: "transportation-logistics",
        title: "Transportation & Logistics",
        icon: "FaTruck",
        shortDescription: "End-to-end logistics and transport solutions.",
        description: "End-to-end logistics and transport solutions.",
        sections: [
            {
                id: "logistics",
                title: "Logistics",
                items: [
                    { name: "Shifting", slug: "shifting" },
                    { name: "Transportation", slug: "transportation" },
                    { name: "Point to Point", slug: "point-to-point" },
                    { name: "Weight Wise", slug: "weight-wise" },
                    { name: "Container Transport", slug: "container-transport" },
                    { name: "Rack Loading", slug: "rack-loading" },
                ]
            },
            {
                id: "supply-chain-management",
                title: "Supply Chain Management",
                items: [
                    { name: "Logistics Management", slug: "logistics-management" },
                    { name: "GPS Tracking", slug: "gps-tracking" },
                    { name: "Inventory Management", slug: "inventory-management" },
                    { name: "Warehouse Management", slug: "warehouse-management" },
                    { name: "Distribution Management", slug: "distribution-management" },
                ]
            },
        ]
    },
    {
        uid: "srv-006",
        id: "finance-insurance",
        title: "Finance & Insurance",
        icon: "FaMoneyBillWave",
        shortDescription: "Business loans, insurance and financial consultancy.",
        description: "Business loans, insurance and financial consultancy.",
        sections: [
            {
                id: "finance",
                title: "Finance",
                items: [
                    { name: "Business Loans", slug: "business-loans" },
                    { name: "Project Funding", slug: "project-funding" },
                    { name: "Bank Guarantee", slug: "bank-guarantee" },
                    { name: "Credit Limit", slug: "credit-limit" },
                    { name: "Equipment Loan", slug: "equipment-loan" },
                    { name: "Capital Loan", slug: "capital-loan" },
                ]
            },
            {
                id: "insurance",
                title: "Insurance",
                items: [
                    { name: "Vehicle Insurance", slug: "vehicle-insurance" },
                    { name: "Health Insurance", slug: "health-insurance" },
                    { name: "WC Policy", slug: "wc-policy" },
                    { name: "Term Insurance", slug: "term-insurance" },
                    { name: "CAR Policy", slug: "car-policy" },
                ]
            }
        ]
    },
    {
        uid: "srv-007",
        id: "accounts-taxation",
        icon: "FaFileInvoiceDollar",
        title: "Accounts & Taxation",
        shortDescription: "GST, accounting, auditing and compliance services.",
        description: "GST, accounting, auditing and compliance services.",
        sections: [
            {
                id: "accounts",
                title: "Accounts",
                items: [
                    { name: "Accounting", slug: "accounting" },
                    { name: "Book Keeping", slug: "book-keeping" },
                    { name: "Audit", slug: "audit" },
                    { name: "Financial Reporting", slug: "financial-reporting" },
                    { name: "Payroll Management", slug: "payroll-management" },
                    { name: "Compliance Management", slug: "compliance-management" },
                ]
            },
            {
                id: "taxation",
                title: "Taxation & Compliances",
                items: [
                    { name: "Goods & Service Tax - GST", slug: "gst" },
                    { name: "TDS", slug: "tds" },
                    { name: "PF", slug: "pf" },
                    { name: "ESIC", slug: "esic" },
                    { name: "Professional Tax", slug: "professional-tax" },
                    { name: "ROC Filing", slug: "roc-filing" },
                ]
            }
        ]
    },
    {
        uid: "srv-008",
        id: "industrial-supplies",
        icon: "FaIndustry",
        title: "Industrial Supplies",
        shortDescription: "Construction materials and industrial supply chain.",
        description: "Construction materials and industrial supply chain.",
        sections: [
            {
                id: "aggregate",
                title: "Aggregate Supply",
                items: [
                    { name: "Sand Supply", slug: "sand-supply" },
                    { name: "Aggregate", slug: "aggregate" },
                    { name: "Cement", slug: "cement" },
                ]
            },
            {
                id: "consumables",
                title: "Consumables Supply",
                items: [
                    { name: "TMT", slug: "tmt" },
                    { name: "Structural Steel", slug: "structural-steel" },
                    { name: "Girder", slug: "girder" },
                    { name: "Chemical", slug: "chemical" },
                    { name: "Bitumen", slug: "bitumen" },
                    { name: "Concrete", slug: "concrete" },
                ]
            },
            {
                id: "mechanical",
                title: "Mechanical Supply",
                items: [
                    { name: "Electrical Supply", slug: "electrical-supply" },
                    { name: "Spare Parts", slug: "spare-parts" },
                    { name: "Tyre", slug: "tyre" },
                    { name: "Battery", slug: "battery" },
                ]
            }
        ]
    },
];

export default servicesData;