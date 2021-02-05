const Section2Data = [
    {
        header: 'Storage I/O Bytes',
        data: '3 MB/25 MB',
        dataType: 'Read/Write'
    },
    {
        header: 'Storage I/O Time',
        data: '4.19 ms/383.66ms',
        dataType: 'Read Time/Write Time'
    },
    {
        header: 'HDFS Data',
        data: '1.68 GB /751 MB',
        dataType: 'Read/Write'
    },
    {
        header: 'HDFS Time Taken',
        data: '1.72 sec /67.20 ms',
        dataType: 'Avg Read Time per Node/Avg Write Time per Node'
    },
    {
        header: 'Critical Incidents',
        data: '16/16',
        dataType: 'Active/Raised',
        isCritical : true
    },
    {
        header: 'High Incidents',
        data: '7/67s',
        dataType: 'Active/Raised',
        isCritical : true
    }
];

export { Section2Data };