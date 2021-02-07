const section1Data = [
  {
    name: 'CPU Usage',
    data: [
      {
        label: 'usage',
        value: 52.53

      },
      {
        label: 'left',
        value: 100 - 52.533

      }
    ]
  },
  {
    name: 'Memory Usage',
    data: [
      {
        label: 'usage',
        value: 66.31

      },
      {
        label: 'left',
        value: 100 - 66.31

      }
    ]
  },
  {
    name: 'Cluster Storage Utlilization',
    data: [
      {
        label: 'usage',
        value: 90.45

      },
      {
        label: 'left',
        value: 100 - 90.45
      }
    ]
  },
  {
    header: 'Network I/O Bytes',
    data: '691 MB /568 MB',
    dataType: 'Read/Write',
    displayType: 'per'
  }
];

export { section1Data };
