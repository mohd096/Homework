const subwayLines = {
    Red:[
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green:[
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore'
    ],
    Orange:[
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'
    ]
  }




const stopsBetweenStations = function(startLine, startStation, endLine, endStation){

    let startStationIndex = subwayLines[startLine].indexOf(startStation)
   
    let endStationIndex = subwayLines[endLine].indexOf(endStation)

    if (startLine === endLine) {
        return (startStationIndex - endStationIndex)
      }
 
      let startLineParkStreet = subwayLines[startLine].indexOf('Park Street')

      let tripToParkStreet = Math.abs(startStationIndex - startLineParkStreet)

      let endLineParkStreet = subwayLines[endLine].indexOf('Park Street')

      let tripToDestination = Math.abs(endStationIndex - endLineParkStreet)
      
      let total = tripToParkStreet + tripToDestination
      return total;
}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops