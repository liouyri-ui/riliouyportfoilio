// src/data/seed.ts
import type { Skill, Experience, Project, Certification, Testimonial } from '../types';

export const defaultSkills: Skill[] = [
  { id: 'prog-1', name: 'HTML, CSS, Bootstrap', level: 90, category: 'Programming & Web' },
  { id: 'prog-2', name: 'JavaScript, JQuery, Ajax', level: 82, category: 'Programming & Web' },
  { id: 'prog-3', name: 'C#.NET, ASP.NET, VB.NET', level: 80, category: 'Programming & Web' },
  { id: 'prog-4', name: 'Java', level: 76, category: 'Programming & Web' },
  { id: 'prog-5', name: 'Git Version Control', level: 82, category: 'Programming & Web' },

  { id: 'net-1', name: 'Cisco Routing & Switching', level: 88, category: 'Network & Security' },
  { id: 'net-2', name: 'FortiGate Firewall & VPN', level: 86, category: 'Network & Security' },
  { id: 'net-3', name: 'MikroTik RouterOS & AP', level: 84, category: 'Network & Security' },
  { id: 'net-4', name: 'VLAN, NAT, ACL, IPSec VPN', level: 86, category: 'Network & Security' },
  { id: 'net-5', name: 'Zabbix, Grafana, Nagios, Cacti', level: 78, category: 'Network & Security' },

  { id: 'sys-1', name: 'Windows Server 2019', level: 86, category: 'Systems & Cloud' },
  { id: 'sys-2', name: 'Microsoft 365, SharePoint, Exchange', level: 86, category: 'Systems & Cloud' },
  { id: 'sys-3', name: 'CPanel Web & Mail Hosting', level: 82, category: 'Systems & Cloud' },
  { id: 'sys-4', name: 'EDR, WSUS, GPO, SCCM', level: 78, category: 'Systems & Cloud' },
  { id: 'sys-5', name: 'Nginx & HAProxy Load Balancing', level: 76, category: 'Systems & Cloud' },

  { id: 'db-1', name: 'SQL Server', level: 86, category: 'Database & Business Systems' },
  { id: 'db-2', name: 'MySQL, PostgreSQL, MongoDB, Oracle', level: 78, category: 'Database & Business Systems' },
  { id: 'db-3', name: 'Microsoft Access', level: 84, category: 'Database & Business Systems' },
  { id: 'db-4', name: 'Stored Procedures & CRUD Logic', level: 82, category: 'Database & Business Systems' },
  { id: 'db-5', name: 'POS, CRM, EMR, RCMS, QuickBooks', level: 82, category: 'Database & Business Systems' }
];

export const defaultExperience: Experience[] = [
  {
    id: 'exp-raffles',
    company: 'Raffles Medical Clinic',
    role: 'IT Supervisor',
    period: '2024 - Present',
    duration: 'Current',
    current: true,
    description: [
      'Support EMR doctor system and RCMS customer service system through user requirements, UAT, and daily issue resolution',
      'Install, configure, monitor, and improve network infrastructure for high availability',
      'Check firewall policy, routing, switching, VPN, FortiGate, Cisco, Huawei, and IP table rules',
      'Monitor network traffic and infrastructure health using Cacti, Zabbix, Grafana, and Nagios',
      'Analyze POS, CRM, QuickBooks, accounting, and warehouse workflows with users and developers',
      'Design database logic, stored procedures, process flows, technical specifications, and architecture diagrams',
      'Provide end-user training, support, documentation, CCTV monitoring, Wi-Fi access control, and backup scheduling'
    ]
  },
  {
    id: 'exp-ace',
    company: 'Australian Centre for Education (ACE)',
    role: 'IT Officer',
    period: 'Previous Role',
    duration: 'Professional experience',
    current: false,
    description: [
      'Managed technology infrastructure including software applications, hardware, network, printers, scanners, and equipment deployment',
      'Maintained systems covering software installation, license management, server setup, database administration, and user support',
      'Managed CPanel hosting, mail server, bandwidth, storage, email security gateway, Burp Suite, OWASP, SQL injection testing, and penetration testing activities',
      'Troubleshot IT equipment, database systems, phone systems, storage, networking, and security operations',
      'Maintained IT asset lists, daily task updates, SQL Server backups and restores, and branch data center controls',
      'Administered Microsoft 365 services including SharePoint, Exchange, Teams, and OneDrive',
      'Configured VLANs, L3 switches, Cisco routers, Juniper, Catalyst, FortiGate, MikroTik, AP, CCTV, ACL, NAT, IPSec VPN, failover, and BGP'
    ]
  },
  {
    id: 'exp-wis',
    company: 'Western International School (WIS)',
    role: 'Computer Teacher',
    period: 'Previous Role',
    duration: 'Teaching and systems work',
    current: false,
    description: [
      'Taught students how to use Microsoft 365, Microsoft Access, and advanced Excel',
      'Prepared lesson plans, updated computer program curriculum, and trained adult learners',
      'Created an E-Gradebook in Excel to record student scores',
      'Built a school management system using Microsoft Access, VB.NET, and SQL Server',
      'Uploaded and maintained WordPress website content and customized responsive pages',
      'Designed book covers, event flyers, and 2D images using Photoshop',
      'Installed additional software and troubleshot computing devices'
    ]
  },
  {
    id: 'exp-lsc',
    company: 'Lastsmile Company (LSC)',
    role: 'Creative Graphic Designer',
    period: 'Previous Role',
    duration: 'Design experience',
    current: false,
    description: [
      'Worked on 360-degree panoramas for home interiors including bedrooms, kitchens, and bathrooms',
      'Removed and restored objects from panoramas including tables, cupboards, and people',
      'Designed banners, brochures, flyers, cards, artwork, promotions, vouchers, and 3D images',
      'Created logos and slogans based on customer requirements'
    ]
  }
];

export const defaultProjects: Project[] = [
  {
    id: 'p1',
    title: 'EMR & RCMS Healthcare System Support',
    description: 'Healthcare system support for EMR and RCMS applications, covering user requirements, application performance, UAT, documentation, and daily operational reliability.',
    tech: ['EMR', 'RCMS', 'Jira', 'ClickUp', 'UAT', 'System Testing'],
    highlights: [
      'Updated user requirements and provided ongoing support for doctor and CSR systems',
      'Monitored application performance and identified bottlenecks with developers',
      'Coordinated UAT, test plans, quality checks, and end-user training',
      'Prepared process flows, algorithms, reports, and system documentation',
      'Improved user interface and workflow clarity with developer collaboration'
    ],
    status: 'live',
    color: '#0ea5e9'
  },
  {
    id: 'p2',
    title: 'Enterprise Network & Firewall Administration',
    description: 'Network and security infrastructure work across routers, switches, firewalls, VPN, VLANs, access points, CCTV, monitoring tools, and branch connectivity.',
    tech: ['FortiGate', 'Cisco', 'Huawei', 'MikroTik', 'Juniper', 'Zabbix', 'Grafana', 'Nagios'],
    highlights: [
      'Configured firewall policies, routing, switching, VPN, NAT, ACL, and IPSec tunnels',
      'Designed VLANs, inter-VLAN routing, port security, link aggregation, EtherChannel, and STP',
      'Monitored traffic and availability with Cacti, Zabbix, Grafana, and Nagios',
      'Managed Nginx and HAProxy load balancing for availability and performance',
      'Troubleshot access points, CCTV, printers, branch internet, and network devices'
    ],
    status: 'live',
    color: '#06b6d4'
  },
  {
    id: 'p3',
    title: 'School Management & E-Gradebook System',
    description: 'Education management tools built during teaching work, including grade recording, student score tracking, curriculum support, and school website maintenance.',
    tech: ['Microsoft Access', 'VB.NET', 'SQL Server', 'Excel', 'Microsoft 365', 'WordPress'],
    highlights: [
      'Created an E-Gradebook in Excel for student score records',
      'Built a school management system with Microsoft Access, VB.NET, and SQL Server',
      'Taught Microsoft 365, Microsoft Access, and advanced Excel',
      'Maintained WordPress content and customized responsive website pages',
      'Installed software and resolved computing device issues for school users'
    ],
    status: 'live',
    color: '#3b82f6'
  },
  {
    id: 'p4',
    title: 'Server, Hosting & IT Asset Operations',
    description: 'Infrastructure operations covering Windows Server, Microsoft 365, CPanel hosting, mail server, SQL Server backup, IT assets, EDR, and data center controls.',
    tech: ['Windows Server', 'SQL Server', 'Microsoft 365', 'Exchange', 'SharePoint', 'OneDrive', 'EDR', 'CPanel'],
    highlights: [
      'Maintained IT asset lists and daily task updates',
      'Backed up and restored SQL Server files, scripts, and system configurations',
      'Controlled branch data centers with primary and secondary server environments',
      'Administered Microsoft 365 services including SharePoint, Exchange, Teams, and OneDrive',
      'Managed web hosting, mail server, storage, bandwidth, and email security gateway'
    ],
    status: 'live',
    color: '#8b5cf6'
  },
  {
    id: 'p5',
    title: 'POS, CRM & Warehouse System Analysis',
    description: 'Business and systems analysis for sales, accounting, stock, POS, CRM, QuickBooks, and warehouse workflows, translating needs into process and database design.',
    tech: ['POS', 'CRM', 'QuickBooks', 'SQL Server', 'Stored Procedures', 'Warehouse Management', 'Flowcharts'],
    highlights: [
      'Analyzed QuickBooks server, accounting system, warehouse inbound and outbound workflows',
      'Designed database structures from user requirements and created stored procedures for CRUD',
      'Prepared system flows, architecture diagrams, technical specifications, and reports',
      'Supported sales target tracking, daily expenses, income, and sales reporting',
      'Provided user training and implementation support for new system processes'
    ],
    status: 'live',
    color: '#10b981'
  }
];

export const defaultCertifications: Certification[] = [
  { id: 'c1', title: 'Postgraduate Master Degree in Information Technology', issuer: 'Build Bright University', year: '2024 - Present', icon: 'IT' },
  { id: 'c2', title: 'Bachelor Degree in Computer Science', issuer: 'Royal University of Phnom Penh', year: '2014 - 2018', icon: 'CS' },
  { id: 'c3', title: 'Cisco Network Administration Training', issuer: 'RCI', year: 'Training', icon: 'NW' },
  { id: 'c4', title: 'Web Designing Short Course', issuer: 'RUPP Lecturer', year: 'Training', icon: 'WD' },
  { id: 'c5', title: 'C# Training Course', issuer: 'VTC Center', year: 'Training', icon: 'C#' },
  { id: 'c6', title: 'Android App Software Development UX Designer Course', issuer: 'CKCC', year: 'Training', icon: 'UX' }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Nhem Chhordaren',
    role: 'IT Assistant Manager',
    company: 'ACE',
    message: 'Professional reference listed in the CV for IT infrastructure, support, and operations experience.',
    initials: 'NC'
  },
  {
    id: 't2',
    name: 'Pheng Marady',
    role: 'CCNA Lecturer',
    company: 'Salarcyber',
    message: 'Professional reference listed in the CV for networking knowledge and technical development.',
    initials: 'PM'
  }
];
