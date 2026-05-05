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
                    { name: "ERP Development", 
                        slug: "erp-development",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981805/erp-development_rdkxhf.jpg",
                        description: "Smart Enterprise Resource Planning solutions that unify your operations, automate workflows, and provide real-time business insights-helping you manage, smarter, faster, and more efficiently." },
                    { name: "HR & Admin IT Solutions", 
                        slug: "hr-admin-it-solutions",
                        image: "https://res.cloudinary.com/dm6vrdbw5/image/upload/v1777981806/hr-it_mcnfpx.jpg",
                        description: "Advanced HR & IT solutions that simplify workforce management, automate daily operations, and enhance organizational efficiency-enabling smarter people management and seamless business control." }
                ]
            },
            {
                id: "erp-solutions",
                title: "ERP Solutions",
                items: [
                    { name: "SAP", slug: "sap" },
                    { name: "Tally ERP", slug: "tally-erp" },
                    { name: "ERP", slug: "erp" },
                    { name: "ERP Training", slug: "erp-training" }
                ]
            },
            {
                id: "planning-strategy",
                title: "Planning & Strategy",
                items: [
                    { name: "Primavera", slug: "primavera" },
                    { name: "MSP", slug: "msp" },
                    { name: "PROCORE", slug: "procore" },
                    { name: "Weighbridge Calibration", slug: "weighbridge-calibration" },
                ]
            },
            {
                id: "3d-design",
                title: "3D Designing",
                items: [
                    { name: "AutoCAD", slug: "autocad" },
                    { name: "BIM360", slug: "bim360" },
                    { name: "Staad", slug: "staad" },
                ]
            },
            {
                id: "performance-analytics",
                title: "Performance & Analytics",
                items: [
                    { name: "Data Analytics", slug: "data-analytics" },
                    { name: "Business Intelligence", slug: "business-intelligence" },
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
                    { name: "Skilled Labour", slug: "skilled-labour" },
                    { name: "Unskilled Labour", slug: "unskilled-labour" },
                    { name: "Contract Staffing", slug: "contract-staffing" },
                    { name: "Permanent Staffing", slug: "permanent-staffing" },
                ]
            },
            {
                id: "work-training",
                title: "Training Programs",
                items: [
                    { name: "Technical Training", slug: "technical-training" },
                    { name: "Safety Training", slug: "safety-training" },
                    { name: "Industrial Training", slug: "industrial-training" },
                    { name: "Executive Development", slug: "executive-development" },
                    { name: "Soft Skills Training", slug: "soft-skills-training" },
                    { name: "HR & Administration Training", slug: "hr-administration-training" },
                    { name: "Leadership Development", slug: "leadership-development" },
                    { name: "Project Management Training", slug: "project-management-training" }
                ]
            },
            {
                id: "job-placement",
                title: "Job Placement",
                items: [
                    { name: "Placement", slug: "placement" },
                    { name: "Campus Recruitment", slug: "campus-recruitment" },
                    { name: "Resume Building", slug: "resume-building" },
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