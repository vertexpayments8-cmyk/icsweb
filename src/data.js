export const CONTACT = {
  person: 'Kunal Chopra',
  phoneDisplay: '+91 98115 51563',
  phoneHref: 'tel:+919811551563',
  whatsappNumber: '919811551563',
  addressLines: ['B-1322, 1st Floor, GD Colony', 'Mayur Vihar Phase III', 'Delhi – 110096'],
  addressShort: 'Mayur Vihar Phase III, Delhi',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('B-1322 GD Colony Mayur Vihar Phase III Delhi 110096'),
  gstin: '07AIVPC4135D2ZE',
};

export function whatsappLink(text) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const SERVICES = [
  {
    id: 'data-entry',
    icon: 'keyboard',
    title: 'Data entry',
    summary:
      'Paper forms, scanned documents, spreadsheets and web portals turned into clean, structured records in the format you work with.',
    includes: [
      'Online and offline data entry',
      'Form, survey and catalogue entry',
      'Excel, Google Sheets, CRM and ERP input',
      'Typing from scanned or handwritten documents',
    ],
  },
  {
    id: 'accounting',
    icon: 'ledger',
    title: 'Accounting & bookkeeping',
    summary:
      'Day-to-day books maintained by an accountant: vouchers posted, ledgers reconciled and accounts kept ready for your CA.',
    includes: [
      'Voucher entry in Tally or your accounting software',
      'Bank and ledger reconciliation',
      'Accounts payable and receivable tracking',
      'Month-end closing support',
    ],
  },
  {
    id: 'backend',
    icon: 'stack',
    title: 'Backend process outsourcing',
    summary:
      'The repetitive back-office work that keeps operations moving, run as a defined process so your team can stay on the front line.',
    includes: [
      'Order and record processing',
      'Back-office administration',
      'Database updating and maintenance',
      'Process documentation and checklists',
    ],
  },
  {
    id: 'gst',
    icon: 'receipt',
    title: 'GST & TDS support',
    summary:
      'Purchase and sales registers prepared and reconciled so your returns can be filed on time and match the books.',
    includes: [
      'Sales and purchase register preparation',
      'GSTR-2B reconciliation',
      'TDS data preparation',
      'Coordination with your CA for filing',
    ],
  },
  {
    id: 'payroll',
    icon: 'people',
    title: 'Payroll processing',
    summary:
      'Monthly salaries calculated from attendance, with payslips and statutory data ready to pay and file.',
    includes: [
      'Attendance and leave consolidation',
      'Salary calculation and payslips',
      'PF and ESI data preparation',
      'Salary registers and reports',
    ],
  },
  {
    id: 'billing',
    icon: 'invoice',
    title: 'Invoice & billing processing',
    summary:
      'Invoices raised, captured and matched so money goes out correctly and comes in on time.',
    includes: [
      'Sales invoice generation',
      'Vendor bill capture and matching',
      'Payment follow-up lists',
      'Credit and debit note processing',
    ],
  },
  {
    id: 'digitization',
    icon: 'scan',
    title: 'Document digitization',
    summary:
      'Files and registers scanned, named and indexed so any document can be found in seconds instead of searched for in cupboards.',
    includes: [
      'Scanning of files and registers',
      'Indexing and naming conventions',
      'Searchable PDF conversion',
      'Organised digital archives',
    ],
  },
  {
    id: 'cleansing',
    icon: 'filter',
    title: 'Data cleansing & validation',
    summary:
      'Duplicate, incomplete and inconsistent records found and corrected so your database can be trusted again.',
    includes: [
      'Duplicate removal and merging',
      'Format standardisation',
      'Missing-field completion',
      'Validation against source documents',
    ],
  },
  {
    id: 'mis',
    icon: 'chart',
    title: 'MIS & reporting',
    summary:
      'Your raw numbers turned into regular reports that show where the business stands, delivered on a fixed schedule.',
    includes: [
      'Daily, weekly and monthly MIS',
      'Sales, stock and collection reports',
      'Excel dashboards',
      'Custom report formats',
    ],
  },
];

export const STEPS = [
  {
    title: 'Tell us the work',
    text: 'Call or WhatsApp with what needs doing: the kind of documents, rough volume and when you need it back.',
  },
  {
    title: 'Agree how it’s done',
    text: 'We talk through the format, the volume and the timeline, and agree on the arrangement.',
  },
  {
    title: 'We do the work',
    text: 'Your documents are entered, accounted or processed in the format you use.',
  },
  {
    title: 'Back to you',
    text: 'The completed work is handed back in the agreed format, ready for you or your CA to use.',
  },
];

export const SECTORS = [
  'Retail & distribution',
  'CA & tax practices',
  'Clinics & diagnostic centres',
  'E-commerce sellers',
  'Logistics & transport',
  'Manufacturing & trading',
];
