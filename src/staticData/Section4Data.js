const section4Data = [
    {
        appType: 'SPARK',
        total: 19,
        finsihed: 17,
        failed: undefined
    },
    {
        appType: 'TEZ',
        total: 2,
        finsihed: 1,
        failed: undefined
    },
    {
        appType: 'MEMSQL',
        total: undefined,
        finsihed: undefined,
        failed: undefined
    }

];

const recommandations = [
    {
        name: 'SPARK',
        value: '90'
    },
    {
        name: 'TEZ',
        value: '10'
    }
];


const tableLabel = [
    'APPLICATION TYPE',
    'TOTAL',
    'FINSIHED',
    'FAILED'
];

export { section4Data, tableLabel, recommandations };