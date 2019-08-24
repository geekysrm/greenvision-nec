const initialState = {
  totalEarthPoints: 8240,
  totalKMTraveled: 73.8,
  totalCarbonReduced: 29.6,
  totalMoneySaved: 240,
  earthPointsHistory: [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 }
  ],
  kmTravelledHistory: [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 }
  ],
  moneySavedHistory: [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 }
  ],
  carbonReducedHistory: [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
