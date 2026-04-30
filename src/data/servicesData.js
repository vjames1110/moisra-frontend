const servicesData = [
    {
        id: "it-solutions",
        title: "IT Solutions",
        description: "End-to-end IT consultancy and digital transformation services.",
        sections: [
            {
                id: "development",
                title: "Development",
                items: [
                    { name: "Web Development", slug: "web-development" },
                    { name: "App Development", slug: "app-development" },
                    { name: "Software Development", slug: "software-development" },
                    { name: "ERP Development", slug: "erp-development" },
                    { name: "HR & Admin IT Solutions", slug: "hr-admin-it-solutions" }
                ]
            },
            {
                id: "erp-solutions",
                title: "ERP Solutions",
                items: [
                    { name: "SAP", slug: "sap" },
                    { name: "Talley ERP", slug: "talley-erp" },
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
                    { name: "Weighbridge Callibration", slug: "weighbridge-callibration" },
                ]
            },
            {
                id: "3d-design",
                title: "3D Designing",
                items: [
                    { name: "AutoCAD", slug: "autocad" },
                    { name: "BIM360", slug: "bim" },
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
        id: "workforce-solutions",
        title: "Workforce Solutions",
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
        id: "machinery-equipment",
        title: "Machinery & Equipment",
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
        id: "civil-construction",
        title: "Civil & Construction",
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
                    { name: "Bitumin Work", slug: "bitumin-work" },
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
        id: "transportation-logistics",
        title: "Transportation & Logistics",
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
        id: "finance-insurance",
        title: "Finance & Insurance",
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
        id: "accounts-taxation",
        title: "Accounts & Taxation",
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
        id: "industrial-supplies",
        title: "Industrial Supplies",
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
                    { name: "Bitumin", slug: "bitumin" },
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